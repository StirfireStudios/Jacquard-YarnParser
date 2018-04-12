'use strict';

const Base = require('../base');

const privateProps = new WeakMap();

/**
 * a static boolean value
 * @memberof Expression
 * @augments Expression.Base
 * @class BooleanValue
 */
class BooleanValue extends Base {
	constructor(value, location) {
		super(location);

		const privates = {
			value: value,
		}

		privateProps.set(this, privates);		
	}

	/** @memberof Expression.BooleanValue
	 * @instance 
	 * @returns {boolean} boolean value */
	get value() { return privateProps.get(this).value; }
}

module.exports = BooleanValue;