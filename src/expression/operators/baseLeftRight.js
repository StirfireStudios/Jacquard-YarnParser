'use strict';

import Base from '../base';
import {findFuncs, findVars} from '../util';

const privateProps = new WeakMap();

/**
 * Base class for operator expressions with left and right operands
 * @memberof Expression
 * @augments Expression.Base
 * @class LeftRightOperator
 */
class LeftRightOperator extends Base {
	constructor(left, right, location) {
		super(location);

		const privates = {
			leftExpression: left,
			rightExpression: right,
			variables: findVars([left, right]),
			functions: findFuncs([left, right]),
		}

		this.serializableProperties.push("left", "right");
		
		privateProps.set(this, privates);
	}

	/** @memberof Expression.LeftRightOperator
	 * @instance 
	 * @returns {Expression.Base} the left expression for this operator */
	get left() { return privateProps.get(this).leftExpression; }

	/** @memberof Expression.LeftRightOperator
	 * @instance 
	 * @returns {Expression.Base} the right expression for this operator */
	get right() { return privateProps.get(this).rightExpression; }

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

module.exports = LeftRightOperator;