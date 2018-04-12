'use strict';

const AssignmentOperator = require('./base');

const privateProps = new WeakMap();

/**
 * Divide Assignment operator ("$variable /= {expr}") - assign the result of $variable divided by {expr} to $variable 
 * @memberof Expression
 * @augments Expression.AssignmentOperator
 * @class DivideAssignOperator
 */
class DivideAssignOperator extends AssignmentOperator {
	constructor(variable, expression, location) { super(variable, expression, location); }
}

module.exports = DivideAssignOperator;