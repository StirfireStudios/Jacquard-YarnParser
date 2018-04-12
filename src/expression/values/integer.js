'use strict';

const Base = require('../base');

const privateProps = new WeakMap();

/**
 * a static integer value
 * @memberof Expression
 * @augments Expression.Base
 * @class IntegerValue
 */
class IntegerValue extends Base {
	constructor(value, location) {
		super(location);

		const privates = {
			value: value,
		}

		privateProps.set(this, privates);		
	}

	/** @memberof Expression.IntegerValue
	 * @instance 
	 * @returns {number} integer value */
	get value() { return privateProps.get(this).value; }
}

module.exports = IntegerValue;