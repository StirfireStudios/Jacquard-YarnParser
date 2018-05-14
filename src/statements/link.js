'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents a statement that links to another node
 * @memberof Statement
 * @augments Statement.Base
 * @class Link
 */
class Link extends Base {
	constructor(destination, location) {
		super(location);

		const privates = {
			destination: destination
		}

		this.serializableProperties.push("destination");

		privateProps.set(this, privates);
	}

	/** @memberof Statement.Link
	 * @instance
	 * @returns {string} the name of the destination node that this statement links to */
	get destination() { return privateProps.get(this).destination }
}

module.exports = Link;