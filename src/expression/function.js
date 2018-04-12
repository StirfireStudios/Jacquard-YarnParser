'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents a en expression that is represents a function call
 * @memberof Expression
 * @augments Expression.Base
 * @class Function
 */
class Function extends Base {
	constructor(name, args, location) {
		super(location);

		const privates = {
			name: name,
			args: args,
		}

		privateProps.set(this, privates);		
	}

	/** @memberof Expression.Function
	 * @instance 
	 * @returns {string} function name */
	get name() { return privateProps.get(this).value; }

	/** @memberof Expression.Function
	 * @instance 
	 * @returns {Expression.Base[]} expressions that are the arguments to this function */
	get args() { return privateProps.get(this).args; }
}

module.exports = Function;