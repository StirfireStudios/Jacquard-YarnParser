'use strict';

const LeftRightOperator = require('../baseLeftRight');

const privateProps = new WeakMap();

/**
 * Equality operator ("a == b") - result when executed will be a boolean
 * @memberof Expression
 * @augments Expression.LeftRightOperator
 * @class EqualityOperator
 */
class EqualityOperator extends LeftRightOperator {
	constructor(left, right, location) { super(left, right, location); }
}

module.exports = EqualityOperator;