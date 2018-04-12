'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents an option statement (a link with some display text) in the node body
 * @memberof Statement
 * @augments Statement.Base
 * @class Option
 */
class Option extends Base {
	constructor(text, destination, location) {
		super(location);

		const privates = {
			text: text,
			destination: destination
		}

		privateProps.set(this, privates);
	}

	/** @memberof Statement.Option
	 * @instance
	 * @returns {string} the text that this statement should output */
	get text() { return privateProps.get(this).text }

	/** @memberof Statement.Option
	 * @instance
	 * @returns {string} the name of the destination node that this statement links to */
	get destination() { return privateProps.get(this).destination }
}

module.exports = Option;