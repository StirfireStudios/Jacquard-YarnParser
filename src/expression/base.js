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

		privateProps.set(this, privates);
	}

	/** @memberof Expression.Base 
	 * @instance
	 * @returns {Location} the location of this expression in the original file	 */
	get location() {return privateProps.get(this).location }
}

module.exports = Base;