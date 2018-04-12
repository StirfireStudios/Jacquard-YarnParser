'use strict';

const RightOperator = require('../baseRight');

const privateProps = new WeakMap();

/**
 * Not operator ("-1") - result when executed will be the negative value of the expression
 * @memberof Expression
 * @augments Expression.RightOperator
 * @class NegativeOperator
 */
class NegativeOperator extends RightOperator {
	constructor(expression, location) { super(expression, location); }
}

module.exports = NegativeOperator;