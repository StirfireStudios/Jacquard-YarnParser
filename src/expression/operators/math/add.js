'use strict';

const LeftRightOperator = require('../baseLeftRight');

const privateProps = new WeakMap();

/**
 * Add operator ("a + b")
 * @memberof Expression
 * @augments Expression.LeftRightOperator
 * @class AddOperator
 */
class AddOperator extends LeftRightOperator {
	constructor(variable, expression, location) { super(variable, expression, location); }
}

module.exports = AddOperator;