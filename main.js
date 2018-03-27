'use strict';

const preprocessor = require('./preprocessor')
const parser = require('./parser')

function parse(yarnString) {
	try {
		this.processedString = preprocessor(yarnString, this.preprocessDebug);
	} catch(err) {
		this.error = err;
		return false;
	}

  if (this.preprocessOnly) {
    return true;
  }

  const parsedData = parser(this.processedString);
  console.log(JSON.stringify(parsedData.nodesByName));
	return true;
}

module.exports = function() {
	const parser = {
	  preprocessOnly: false,
    preprocessDebug: false,
    outputNodes: [],
    error: null
	};

	parser.parse = parse.bind(parser);

	return parser;
}

module.exports.statementTypes = require('./statementTypes');