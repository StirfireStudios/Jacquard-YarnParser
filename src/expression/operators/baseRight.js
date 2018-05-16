'use strict';

import Base from '../base';
import {findFuncs, findVars} from '../util';

const privateProps = new WeakMap();

/**
 * Base class for operator expressions with only right operands
 * @memberof Expression
 * @augments Expression.Base
 * @class RightOperator
 */
class RightOperator extends Base {
	constructor(expression, location) {
		super(location);

		const privates = {
			expression: expression,
			variables: findVars([expression]),
			functions: findFuncs([expression]),
		}

		privateProps.set(this, privates);		
	}

	/** @memberof Expression.RightOperator
	 * @instance 
	 * @returns {Expression.Base} the expression this operator is performed on */
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

module.exports = RightOperator;