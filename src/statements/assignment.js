'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents a variable assignment statement in the node body
 * @memberof Statement
 * @augments Base
 * @class Assignment
 */
class Assignment extends Base {
	constructor(variable, expression, location) {
		super(location);

		const privates = {
			variable: variable,
			expression: expression,
		}

		privateProps.set(this, privates);
	}

	/** @memberof Statement.Assignment
	 * @instance
	 * @returns {string} the variable this statement sets */
	get variable() { return privateProps.get(this).name; }

	/** @memberof Statement.Assignment 
	 * @instance
	 * @returns {Expression.Base} the expression whos result goes into this variable */
	get expression() { return privateProps.get(this).args; }
}

module.exports = Function;