'use strict';

const Base = require('../base');

const privateProps = new WeakMap();

/**
 * A static string value
 * @memberof Expression
 * @augments Expression.Base
 * @class StringValue
 */
class StringValue extends Base {
	constructor(value, location) {
		super(location);

		const privates = {
			value: value,
		}

		privateProps.set(this, privates);		
	}

	/** @memberof Expression.StringValue
	 * @instance 
	 * @returns {string} string value */
	get value() { return privateProps.get(this).value; }
}

module.exports = StringValue;