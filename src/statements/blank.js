'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents a blank statement in the node body
 * @memberof Statement
 * @augments Base
 * @class Blank
 */
class Blank extends Base {
	constructor(location) {
		super(location);

		const privates = {
		}

		privateProps.set(this, privates);
	}
}

module.exports = Blank;