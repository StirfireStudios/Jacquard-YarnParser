'use strict';

const AssignmentOperator = require('./base');

const privateProps = new WeakMap();

/**
 * Assignment operator ("$variable = {expr}") - assign the result of {expr} to $variable 
 * @memberof Expression
 * @augments Expression.AssignmentOperator
 * @class SubtractAssignOperator
 */
class SubtractAssignOperator extends AssignmentOperator {
	constructor(variable, expression, location) { super(variable, expression, location); }
}

module.exports = SubtractAssignOperator;