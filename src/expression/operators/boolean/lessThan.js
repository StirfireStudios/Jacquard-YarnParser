'use strict';

const LeftRightOperator = require('../baseLeftRight');

const privateProps = new WeakMap();

/**
 * Less than operator ("a < b") - result when executed will be a boolean
 * @memberof Expression
 * @augments Expression.LeftRightOperator
 * @class LessThanOperator
 */
class LessThanOperator extends LeftRightOperator {
	constructor(left, right, location) { super(left, right, location); }
}

module.exports = LessThanOperator;