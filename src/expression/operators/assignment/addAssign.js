'use strict';

const AssignmentOperator = require('./base');

const privateProps = new WeakMap();

/**
 * Add Assignment operator ("$variable += {expr}") - assign the result of $variable + {expr} to $variable 
 * @memberof Expression
 * @augments Expression.AssignmentOperator
 * @class AddAssignOperator
 */
class AddAssignOperator extends AssignmentOperator {
	constructor(variable, expression, location) { super(variable, expression, location); }
}

module.exports = AddAssignOperator;