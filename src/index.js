'use strict';

const preprocessor = require('./preprocessor')
const parser = require('./parser')
const optionGroupProcessor = require('./optionGroupProcessor')

/**
 * Instances of this class are used to parse one or more yarn documents
 */
class Parser {
  constructor() {
		this.preprocessOnly = false
    this.preprocessDebug = false
		this.errors = []
		this.warnings = []
	}
	
	/**
	 * Parse more yarn text input and add it to the nodes already present.
	 * @param {string} yarnString the yarn string to process. Can contain body only or header and body. 
	 * @param {boolean} bodyOnly if this yarnString is only body.
	 * @param {string} fileID an identifer for the source of the yarnString that is being passed in.
	 */
	parse(yarnString, bodyOnly, fileID) {
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
}

/**
 * StatementTypes constant values
 * @static
 */
Parser.StatementTypes = require('./statementTypes');

module.exports = Parser;