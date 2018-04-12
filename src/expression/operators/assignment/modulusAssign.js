'use strict';

const AssignmentOperator = require('./base');

const privateProps = new WeakMap();

/**
 * Modulus Assignment operator ("$variable %= {expr}") - assign the result of {expr} to $variable 
 * @memberof Expression
 * @augments Expression.AssignmentOperator
 * @class ModulusAssignOperator
 */
class ModulusAssignOperator extends AssignmentOperator {
	constructor(variable, expression, location) { super(variable, expression, location); }
}

module.exports = ModulusAssignOperator;