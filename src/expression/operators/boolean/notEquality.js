'use strict';

const LeftRightOperator = require('../baseLeftRight');

const privateProps = new WeakMap();

/**
 * Not/Inverse equality operator ("a != b") - result when executed will be a boolean
 * @memberof Expression
 * @augments Expression.LeftRightOperator
 * @class NotEqualityOperator
 */
class NotEqualityOperator extends LeftRightOperator {
	constructor(left, right, location) { super(left, right, location); }
}

module.exports = NotEqualityOperator;