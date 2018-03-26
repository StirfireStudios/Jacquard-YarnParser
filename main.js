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

  parsedData = parser(this.processedString);

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