'use strict';

const LeftRightOperator = require('../baseLeftRight');

const privateProps = new WeakMap();

/**
 * And operator ("a && b") - result when executed will be a boolean
 * @memberof Expression
 * @augments Expression.LeftRightOperator
 * @class AndOperator
 */
class AndOperator extends LeftRightOperator {
	constructor(left, right, location) { super(left, right, location); }
}

module.exports = AndOperator;