'use strict';

const LeftRightOperator = require('../baseLeftRight');

const privateProps = new WeakMap();

/**
 * Multiply operator ("a * b")
 * @memberof Expression
 * @augments Expression.LeftRightOperator
 * @class MultiplyOperator
 */
class MultiplyOperator extends LeftRightOperator {
	constructor(variable, expression, location) { super(variable, expression, location); }
}

module.exports = MultiplyOperator;