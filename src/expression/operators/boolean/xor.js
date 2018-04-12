'use strict';

const LeftRightOperator = require('../baseLeftRight');

const privateProps = new WeakMap();

/**
 * Exclusive Or operator - result when executed will be a boolean
 * @memberof Expression
 * @augments Expression.LeftRightOperator
 * @class XorOperator
 */
class XorOperator extends LeftRightOperator {
	constructor(left, right, location) { super(left, right, location); }
}

module.exports = XorOperator;