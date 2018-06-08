'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents a Hashtag in the node body
 * @memberof Statement
 * @augments Statement.Base
 * @class Hashtag
 */
class Hashtag extends Base {
  /**
   * Make a new hashtag statement
   * @param {string} key - the key of the hashtag
   * @param {string} value - the value of the hashtag
   * @param {Location} location - the location of the hashtag
   */
	constructor(key, value, location) {
		super(location);

		const privates = {
      key: key,
			value: value,
		}

		privateProps.set(this, privates);
	}

	/** @memberof Statement.Hashtag
	 * @instance
	 * @returns {string} the value of this hashtag (if present) */
	get value() { return privateProps.get(this).value }

	/** @memberof Statement.Hashtag
	 * @instance
	 * @returns {string} the key of this hashtag */
	get key() { return privateProps.get(this).key }
}

module.exports = Hashtag;
