'use strict';

const ParserMessage = require('./parser/message');
const preprocessor = require('./preprocessor')
const antlrProcessor = require('./listener')
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
			privates.processedString = preprocessor(yarnString, privates.config.preprocessDebug);
		} catch(err) {
			privates.errors.push({message: err.toString()});
			return true;
		}
	
		if (privates.config.preprocessOnly || privates.config.preprocessDebug) 
			return false;
	
		const parsedData = antlrProcessor(privates.processedString, bodyOnly);
		processMessages.call(this, parsedData);
		processNodes.call(this, parsedData);

	//	optionGroupProcessor(Object.values(this.nodesByName), this.errors);
		return privates.errors.length != errorCount;
	}

	/**
	 * Get the last output from the preprocessor (will be the last {@link Parser#parse|parse} call)
	 * @return {string} the preprocessed data 
	 */
	get preprocessedData() { return privateProps.get(this).processedString; }

	/**
	 * Get the names of the nodes parsed so far
	 * @return {string[]} the node names
	 */
	get nodeNames() { return Object.keys(privateProps.get(this).nodesByName) }

	/**
	 * Get the tags used on the nodes parsed so far
	 * @return {string[]} the tag names
	 */
	get nodeTags() { return Object.keys(privateProps.get(this).nodesByTag) }

	/**
	 * Get a node with this name
	 * @param {string} name the name of the node to get
	 * @returns {Node} the node with this name (or null)
	 */
	nodeNamed(name) { return privateProps.get(this).nodesByName[name]; }

	/**
	 * Get a node tagged with this name
	 * @param {string} tag the name of the tag to get nodes for
	 * @returns {Object.<string, Node>} The nodes in this tag (or null if tag doesn't exist)
	 */
	nodesTagged(tag) { return privateProps.get(this).nodesTagged[tag]; }

	/**
	 * Get the error list from the parser
	 * @return {array} an array of {@link ParserMessage|ParserMessages}
	 */
	get errors() {
		return privateProps.get(this).errors;
	}

	/**
	 * Get the warning list from the parser
	 * @return {array} an array of {@link ParserMessage|ParserMessages}
	 */
	get warnings() {
		return privateProps.get(this).warnings;
	}
	
	/**
	 * Reset this parser, removing all parsed information
	 */
	reset() {
		const privates = privateProps.get(this);
		resetState(privates);
	}
}

module.exports = {
	Parser,
	Location: require('./parser/location'),
	ParserMessage: require('./parser/message'),
	Statement: require('./statements'),
	Expression: require('./expression'),
	Node: require('./node'),
}