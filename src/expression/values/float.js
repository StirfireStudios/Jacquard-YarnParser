'use strict';

const Base = require('../base');

const privateProps = new WeakMap();

/**
 * a static float value
 * @memberof Expression
 * @augments Expression.Base
 * @class FloatValue
 */
class FloatValue extends Base {
	constructor(value, location) {
		super(location);

		const privates = {
			value: value,
		}

		this.serializableProperties.push("value");

		privateProps.set(this, privates);		
	}

	/** @memberof Expression.FloatValue
	 * @instance 
	 * @returns {number} float value */
	get value() { return privateProps.get(this).value; }
}

module.exports = FloatValue;