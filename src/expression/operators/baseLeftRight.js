'use strict';

const Base = require('../base');

const privateProps = new WeakMap();

/**
 * Base class for operator expressions with left and right operands
 * @memberof Expression
 * @augments Expression.Base
 * @class LeftRightOperator
 */
class LeftRightOperator extends Base {
	constructor(left, right, location) {
		super(location);

		const privates = {
			leftExpression: left,
			rightExpression: right
		}

		privateProps.set(this, privates);
	}

	/** @memberof Expression.LeftRightOperator
	 * @instance 
	 * @returns {Expression.Base} the left expression for this operator */
	get left() { return privateProps.get(this).leftExpression; }

	/** @memberof Expression.LeftRightOperator
	 * @instance 
	 * @returns {Expression.Base} the right expression for this operator */
	get right() { return privateProps.get(this).rightExpression; }
}

module.exports = LeftRightOperator;