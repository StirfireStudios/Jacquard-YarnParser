'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents a text statement in the node body
 * @memberof Statement
 * @augments Statement.Base
 * @class Text
 */
class Text extends Base {
	constructor(text, location) {
		super(location);

		const privates = {
			value: text
		}

		this.serializableProperties.push("value", "text");

		privateProps.set(this, privates);
	}

	/** @memberof Statement.Text
	 * @instance
	 * @returns {string} the text that this statement should output */
	get value() { return privateProps.get(this).value }

	/** @memberof Statement.Text
	 * @instance
	 * @returns {string} the text that this statement should output */
	get text() { return privateProps.get(this).value }
}

module.exports = Text;