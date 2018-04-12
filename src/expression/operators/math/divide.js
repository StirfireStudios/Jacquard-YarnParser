'use strict';

const LeftRightOperator = require('../baseLeftRight');

const privateProps = new WeakMap();

/**
 * Divide operator ("a / b")
 * @memberof Expression
 * @augments Expression.LeftRightOperator
 * @class DivideOperator
 */
class DivideOperator extends LeftRightOperator {
	constructor(variable, expression, location) { super(variable, expression, location); }
}

module.exports = DivideOperator;