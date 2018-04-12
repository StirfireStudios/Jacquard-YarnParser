'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents an expression to execute in the node body
 * @memberof Statement
 * @augments Base
 * @class Evaluate
 */
class Evaluate extends Base {
	constructor(expression, location) {
		super(location);

		const privates = {
			expression: expression,
		}

		privateProps.set(this, privates);
	}

	/** @memberof Statement.Evaluate 
	 * @instance
	 * @returns {Expression.Base} the expression to evaluate */
	get expression() { return privateProps.get(this).expression; }
}

module.exports = Evaluate;