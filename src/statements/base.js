'use strict';

const privateProps = new WeakMap();

/**
 * Represents a function statement in the node body
 * @memberof Statement
 * @class Base
 */
class Base {
	constructor(location) {
		const privates = {
			location: location,
		}

		this.serializableProperties = ["location"];

		privateProps.set(this, privates);
	}

	/** @memberof Statement.Base 
	 * @instance
	 * @returns {Location} the location of this statement in the original file	 */
	get location() {return privateProps.get(this).location }
}

module.exports = Base;