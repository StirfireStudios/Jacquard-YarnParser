'use strict';

const preprocessor = require('./preprocessor')
const parser = require('./parser')
const optionGroupProcessor = require('./optionGroupProcessor')

function parse(yarnString, bodyOnly, fileID) {
	try {
		this.processedString = preprocessor(yarnString, this.preprocessDebug);
	} catch(err) {
		this.errors.push({message: err.toString()});
		return false;
	}

  if (this.preprocessOnly) {
    return true;
  }

	const parsedData = parser(this.processedString);
	this.errors = parsedData.errors;
	this.warnings = parsedData.warnings;
	this.nodesByName = parsedData.nodesByName;
	this.nodesByTag = parsedData.nodesByTag;
//	optionGroupProcessor(Object.values(this.nodesByName), this.errors);

	console.log(JSON.stringify(this))

	return true;
}

module.exports = function() {
	const parser = {
	  preprocessOnly: false,
    preprocessDebug: false,
		errors: [],
		warnings: []
	};

	parser.parse = parse.bind(parser);

	return parser;
}

module.exports.StatementTypes = require('./statementTypes');