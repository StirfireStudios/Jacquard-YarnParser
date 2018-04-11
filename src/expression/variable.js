'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents a en expression that is a variable
 * @memberof Expression
 * @augments Expression.Base
 * @class Variable
 */
class Variable extends Base {
	constructor(name, location) {
		super(location);

		const privates = {
			name: name,
		}

		privateProps.set(this, privates);		
	}

	/** @memberof Expression.Variable
	 * @instance 
	 * @returns {string} Variable name */
	get name() { return privateProps.get(this).value; }
}

module.exports = Variable;