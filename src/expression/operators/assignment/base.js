'use strict';

import Base from '../../base';
import {findFuncs, findVars} from '../../util';

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

		const varNames = findVars([expression]);
		varNames.push(variable.name);

		const privates = {
			variable: variable,
			expression: expression,
			variables: varNames,
			functions: findFuncs([expression]),			
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

	/** @memberof Expression.Variable
	 * @instance
	 * @returns {array[string] variable names involved in this expression}
	 */
	get variables() { return privateProps.get(this).variables; }

	/** @memberof Expression.Variable
	 * @instance
	 * @returns {array[string] function names involved in this expression}
	 */
	get functions() { return privateProps.get(this).functions; }
}

module.exports = AssignmentOperator;