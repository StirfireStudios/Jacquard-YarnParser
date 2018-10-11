'use strict';

import ParserMessage from './parser/message';
import preprocessor from './preprocessor';
import antlrProcessor from './listener';

/**
 * parser configuration
 * @class ParserConfig
 */
const defaultConfig = {
	/** Should this parser only preprocess files and then stop.
	 * Default is false
	 * @type {boolean}
	 * @defaultvalue {false}
	 * @memberof ParserConfig
	 */
	preprocessOnly: false,
	/** Should this parser output preprocessed files with visible option brackets
	 * Default is false
	 * @type {boolean}
	 * @defaultvalue {false}
	 * @memberof ParserConfig
	 */
	preprocessDebug: false,
	/** Should the parser output a dialog segment for each line.
	 * If this is false a blank line will split dialogue segments
	 * Default is true
	 * @type {boolean}
	 * @defaultvalue {true}
	 * @memberof ParserConfig
	 */
	dialogSegmentPerLine: true,
	/** Should the parser interpret a dialog segment text fragment ending with ":" 
	 * as a character name. 
	 * e.g. "character name: i speak the thing"
	 * @type {boolean}
	 * @defaultvalue {false}
	 * @memberof ParserConfig
	 */
	characterSupport: false
};

const privateProps = new WeakMap();

function resetState(privates) {
	privates.errors = [];
	privates.warnings = [];
	privates.processedString = [];
	privates.nodeNames = [];
	privates.nodesByName = {};
	privates.nodesByTag = {};
	privates.variables = [];
	privates.functions = [];
	privates.lastNodesParsed = [];
}

function processMessages(parsedData, fileID) {
	const privates = privateProps.get(this);

	['errors', 'warnings'].forEach((type) => {
		privates[type] = privates[type].concat(parsedData[type]);
	});
}

function processList(parsedData, field) {
	const privateList = privateProps.get(this)[field];
	parsedData[field].forEach(name => {
		if (privateList.indexOf(name) === -1) privateList.push(name);
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

function linkNodes() {
	const privates = privateProps.get(this);

	Object.keys(privates.nodesByName).forEach(nodeName => {
		const node = privates.nodesByName[nodeName];
		node.actualizeLinks(privates.nodesByName);
	});
}

/**
 * Instances of this class are used to parse one or more yarn documents
 * @param {ParserConfig} config the configuration for this parser
 */
export class Parser {
  constructor(config) {
		const privates = { 
			config: Object.assign({}, defaultConfig),
		}

		resetState(privates);

		if (typeof(config) == "object") {
			privates.config = Object.assign(privates.config, config)
		}

		privateProps.set(this, privates);
	}
	
	/**
	 * Parse more yarn text input and add it to the nodes already present.
	 * If the yarn is body only, the node will be called `bodyParsed` and any previous contents will be overwritten
	 * @param {string} yarnString the yarn string to process. Can contain body only or header and body. 
	 * @param {boolean} bodyOnly if this yarnString is only body.
	 * @param {string} fileID an identifer for the source of the yarnString that is being passed in.
	 * @return {boolean} if there was an additional parsing error.
	 */
	parse(yarnString, bodyOnly, fileID) {		
		const privates = privateProps.get(this);

		privates.lastNodesParsed = [];

		const errorCount = privates.errors.length;
		try {
			privates.processedString = preprocessor(yarnString, privates.config.preprocessDebug);
		} catch(err) {
			privates.errors.push({message: err.toString()});
			return true;
		}

		if (privates.config.preprocessOnly || privates.config.preprocessDebug) 
			return false;

		const parsedData = antlrProcessor(
			privates.processedString, bodyOnly, fileID, 
			privates.config.dialogSegmentPerLine, privates.config.characterSupport,
		);

		processMessages.call(this, parsedData, fileID);
		privates.lastNodesParsed = Object.keys(parsedData.nodesByName);	
		processList.call(this, parsedData, "variables");
		processList.call(this, parsedData, "functions");

		if (bodyOnly) delete(privates.nodesByName["bodyParsed"]);
		processNodes.call(this, parsedData, fileID);
		linkNodes.call(this);

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

	/** Get the list of functions
	 * @return {string[]} the list of function names.
	 */
	get functionNames() { return privateProps.get(this).functions; }

	/** Get the list of variables
	 * @return {string[]} the list of function names.
	 */
	get variableNames() { return privateProps.get(this).variables; }	

	/** Get the list of nodes we parsed in the last call of "parse */
	get lastNodesParsed() { return privateProps.get(this).lastNodesParsed; }

	/**
	 * Reset this parser, removing all parsed information
	 */
	reset() {
		const privates = privateProps.get(this);
		resetState(privates);
	}
}

export { default as Location } from './parser/location'; 
export { default as Statement } from './statements';
export { default as Expression } from './expression';
export { default as Node } from './node'; 
