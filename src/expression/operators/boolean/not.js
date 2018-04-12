'use strict';

const RightOperator = require('../baseRight');

const privateProps = new WeakMap();

/**
 * Not operator ("!a") - result when executed will be a boolean
 * @memberof Expression
 * @augments Expression.RightOperator
 * @class NotOperator
 */
class NotOperator extends RightOperator {
	constructor(expression, location) { super(expression, location); }
}

module.exports = NotOperator;