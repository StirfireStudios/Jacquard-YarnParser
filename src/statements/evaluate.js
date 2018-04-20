'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents an expression to execute in the node body.
 * @memberof Statement
 * @augments Base
 * @class Evaluate
 */
class Evaluate extends Base {
	constructor(expression, returnOutput, location) {
		super(location);

		const privates = {
			expression: expression,
			returnOutput: returnOutput,
		}

		privateProps.set(this, privates);
	}

	/** @memberof Statement.Evaluate 
	 * @instance
	 * @returns {Expression.Base} the expression to evaluate */
	get expression() { return privateProps.get(this).expression; }

	/** @memberOf Statement.Evaluate
	 * @instance 
	 * @returns {boolean} if this evaluation should return the value for display
	 */
	get returnOutput() { return privateProps.get(this).returnOutput; }
}

module.exports = Evaluate;