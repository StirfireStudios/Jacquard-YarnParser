'use strict';

const LeftRightOperator = require('../baseLeftRight');

const privateProps = new WeakMap();

/**
 * Modulus operator ("a % b") (returns the remainder of a divide operation)
 * @memberof Expression
 * @augments Expression.LeftRightOperator
 * @class ModulusOperator
 */
class ModulusOperator extends LeftRightOperator {
	constructor(variable, expression, location) { super(variable, expression, location); }
}

module.exports = ModulusOperator;