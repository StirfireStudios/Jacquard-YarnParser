'use strict';

import Base from './base';
import {findFuncs, findVars} from './util';

const privateProps = new WeakMap();

/**
 * Represents a en expression that is represents a function call
 * @memberof Expression
 * @augments Expression.Base
 * @class Function
 */
class Function extends Base {
	constructor(name, args, location) {
		super(location);

		const funcNames = findFuncs(args);
		funcNames.push(name);

		const privates = {
			name: name,
			args: args,
			variables: findVars(args),
			functions: funcNames,
		}

		this.serializableProperties.push("name", "args");

		privateProps.set(this, privates);		
	}

	/** @memberof Expression.Function
	 * @instance 
	 * @returns {string} function name */
	get name() { return privateProps.get(this).name; }

	/** @memberof Expression.Function
	 * @instance 
	 * @returns {Expression.Base[]} expressions that are the arguments to this function */
	get args() { return privateProps.get(this).args; }

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

module.exports = Function;