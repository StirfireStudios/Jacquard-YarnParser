const preprocessor = require('./preprocessor')

function parse(yarnString) {
	try {
		this.processedString = preprocessor(yarnString)
	} catch(err) {
		this.error = err
		return false;
	}

	return true;
}

export default function(yarnString, options) {
	const parser = {
		preprocessOnly = false
	}

	parser.parse = parse.bind(parser)

	return parser;
}