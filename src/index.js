'use strict';

const ParserMessage = require('./parser/message');
const preprocessor = require('./preprocessor')
const parser = require('./parser')
const optionGroupProcessor = require('./optionGroupProcessor')

/**
 * parser configuration
 * @class ParserConfig
 */
const defaultConfig = {
	/** Should this parser only preprocess files and then stop 
	 * @memberof ParserConfig
	 */
	preprocessOnly: false,
	/** Should this parser output preprocessed files with visible option brackets
	 * @memberof ParserConfig
	 */
	preprocessDebug: false,
};

const privateProps = new WeakMap();

function resetState(privates) {
	privates.errors = [];
	privates.warnings = [];
	privates.processedString = [];
	privates.nodeNames = [];
	privates.nodesByName = {};
	privates.nodesByTag = {};
}

function processMessages(parsedData, fileID) {
	const privates = privateProps.get(this);

	['errors', 'warnings'].forEach((type) => {
		parsedData[type].forEach((item) => { item.location.fileID = fileID; });
		privates[type] = privates[type].concat(parsedData[type]);
	});
}

function processNodes(parsedData, fileID) {
	const privates = privateProps.get(this);
	const nodeNames = privates.nodeNames;
	const newNodeNames = [];

	Object.keys(parsedData.nodesByName).forEach((nodeName) => {
		const node = parsedData.nodesByName[nodeName];
		if (nodeNames.includes(nodeName)) {
			const existing = privates.nodesByName[nodeName];
			const message = ParserMessage.FromNode(
				node, 
				`Node already exists in previously parsed file ${existing.location.fileID}. Skipping.`
			);
			privates.errors.push(message);
			return;
		}

		if (newNodeNames.includes(nodeName)) {
			const message = ParserMessage.FromNode(
				node, 
				`Node already exists twice in file ${fileID}. Skipping`
			);
			privates.errors.push(message);
			return;
		}

		privates.nodesByName[nodeName] = node;
		node.tags.forEach((tag) => {
			if (privates.nodesByTag[tag] == null) privates.nodesByTag[tag] = {};
			privates.nodesByTag[tag][nodeName] = node;
		});
	})
	
}

/**
 * Instances of this class are used to parse one or more yarn documents
 * @param {ParserConfig} config the configuration for this parser
 */
class Parser {
  constructor(config) {
		const privates = { 
			config: Object.assign(defaultConfig),
		}

		resetState(privates);

		if (typeof(config) == "object") {
			privates.config = Object.assign(privates.config, config)
		}

		privateProps.set(this, privates);
	}
	
	/**
	 * Parse more yarn text input and add it to the nodes already present.
	 * @param {string} yarnString the yarn string to process. Can contain body only or header and body. 
	 * @param {boolean} bodyOnly if this yarnString is only body.
	 * @param {string} fileID an identifer for the source of the yarnString that is being passed in.
	 * @return {boolean} if there was an additional parsing error.
	 */
	parse(yarnString, bodyOnly, fileID) {
		const privates = privateProps.get(this);

		const errorCount = privates.errors.length;
		try {
			privates.processedString = preprocessor(yarnString, privates.preprocessDebug);
		} catch(err) {
			privates.errors.push({message: err.toString()});
			return true;
		}
	
		if (this.preprocessOnly) return false;
	
		const parsedData = parser(privates.processedString, bodyOnly);
		processMessages.call(this, parsedData);
		processNodes.call(this, parsedData);

	//	optionGroupProcessor(Object.values(this.nodesByName), this.errors);
		return privates.errors.length != errorCount;
	}

	/**
	 * Get the last output from the preprocessor (will be the last {@link Parser#parse|parse} call)
	 * @return {string} the preprocessed data 
	 */
	get preprocessedData() {
		return privateProps.get(this).processedString;
	}

	/**
	 * Reset this parser, removing all parsed information
	 */
	reset() {
		const privates = privateProps.get(this);
		resetState(privates);
	}
}

/**
 * StatementTypes constant values
 * @static
 */
Parser.StatementTypes = require('./statementTypes');

module.exports = Parser;