'use strict';

const LeftRightOperator = require('../baseLeftRight');

const privateProps = new WeakMap();

/**
 * Or operator ("a || b") - result when executed will be a boolean
 * @memberof Expression
 * @augments Expression.LeftRightOperator
 * @class OrOperator
 */
class OrOperator extends LeftRightOperator {
	constructor(left, right, location) { super(left, right, location); }
}

module.exports = OrOperator;