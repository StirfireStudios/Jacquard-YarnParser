'use strict';

const Base = require('../base');

const privateProps = new WeakMap();

/**
 * Base class for operator expressions with only right operands
 * @memberof Expression
 * @augments Expression.Base
 * @class RightOperator
 */
class RightOperator extends Base {
	constructor(expression, location) {
		super(location);

		const privates = {
			expression: right
		}

		privateProps.set(this, privates);		
	}

	/** @memberof Expression.RightOperator
	 * @instance 
	 * @returns {Expression.Base} the expression this operator is performed on */
	get expression() { return privateProps.get(this).expression; }
}

module.exports = RightOperator;