'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents a function statement in the node body
 * @memberof Statement
 * @augments Base
 * @class Function
 */
class Function extends Base {
	constructor(name, args, location) {
		super(location);

		const privates = {
			type: "FunctionStatement",
			name: name,
			args: args,
		}

		privateProps.set(this, privates);
	}

	/** @memberof Statement.Function
	 * @instance
	 * @returns {string} the name of the function */
	get name() { return privateProps.get(this).name; }

	/** @memberof Statement.Function 
	 * @instance
	 * @returns {array} an array of expressions for this function */
	get arguments() { return privateProps.get(this).args; }
}

module.exports = Function;