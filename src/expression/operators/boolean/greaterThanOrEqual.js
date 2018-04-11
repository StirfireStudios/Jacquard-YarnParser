'use strict';

const LeftRightOperator = require('../baseLeftRight');

const privateProps = new WeakMap();

/**
 * Greater than or equal operator ("a >= b") - result when executed will be a boolean
 * @memberof Expression
 * @augments Expression.LeftRightOperator
 * @class GreaterThanOrEqualOperator
 */
class GreaterThanOrEqualOperator extends LeftRightOperator {
	constructor(left, right, location) { super(left, right, location); }
}

module.exports = GreaterThanOrEqualOperator;