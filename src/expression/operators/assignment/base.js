'use strict';

const Base = require('../../base');

const privateProps = new WeakMap();

/**
 * Base class for operator expressions that assign values to variables
 * @memberof Expression
 * @augments Expression.Base
 * @class AssignmentOperator
 */
class AssignmentOperator extends Base {
	constructor(variable, expression, location) {
		super(location);

		const privates = {
			variable: variable,
			expression: expression
		}

		privateProps.set(this, privates);
	}

	/** @memberof Expression.AssignmentOperator
	 * @instance 
	 * @returns {Expression.Variable} the variable the result of the expression will be assigned to */
	get variable() { return privateProps.get(this).variable; }

	/** @memberof Expression.AssignmentOperator
	 * @instance 
	 * @returns {Expression.Variable} the expression to assign to the variable */
	get expression() { return privateProps.get(this).expression; }
}

module.exports = AssignmentOperator;