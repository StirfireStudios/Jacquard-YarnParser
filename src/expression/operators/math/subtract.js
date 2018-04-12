'use strict';

const LeftRightOperator = require('../baseLeftRight');

const privateProps = new WeakMap();

/**
 * Subtract operator ("a - b")
 * @memberof Expression
 * @augments Expression.LeftRightOperator
 * @class SubtractOperator
 */
class SubtractOperator extends LeftRightOperator {
	constructor(variable, expression, location) { super(variable, expression, location); }
}

module.exports = SubtractOperator;