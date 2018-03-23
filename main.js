'use strict';

const preprocessor = require('./preprocessor')

function parse(yarnString) {
	try {
		this.processedString = preprocessor(yarnString, this.preprocessDebug);
	} catch(err) {
		this.error = err;
		return false;
	}

	return true;
}

module.exports = function(yarnString, options) {
	const parser = {
    preprocessOnly: false,
    preprocessDebug: false
	};

	parser.parse = parse.bind(parser);

	return parser;
}