'use strict';

import AssignmentOperator from './base';

const privateProps = new WeakMap();

/**
 * Assignment operator ("$variable = {expr}") - assign the result of {expr} to $variable 
 * @memberof Expression
 * @augments Expression.AssignmentOperator
 * @class AssignOperator
 */
class AssignOperator extends AssignmentOperator {
	constructor(variable, expression, location) { super(variable, expression, location); }
}

module.exports = AssignOperator;