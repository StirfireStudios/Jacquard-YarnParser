'use strict';

const privateProps = new WeakMap();

/**
 * Base class for all expressions
 * @memberof Expression
 * @class Base
 */
class Base {
	constructor(location) {
		const privates = {
			location: location,
		}

		this.serializableProperties = ["location", "variables", "functions"];		

		privateProps.set(this, privates);
	}

	/** @memberof Expression.Base 
	 * @instance
	 * @returns {Location} the location of this expression in the original file	 */
	get location() {return privateProps.get(this).location }

	/** @memberof Expression.Variable
	 * @instance
	 * @returns {array[string] variable names involved in this expression}
	 */
	get variables() { return []; }

	/** @memberof Expression.Variable
	 * @instance
	 * @returns {array[string] function names involved in this expression}
	 */
	get functions() { return []; }
}

module.exports = Base;