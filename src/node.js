'use strict';

const privateProps = new WeakMap();

const defaultNode = {
	attributes: {},
	tags: [],
	statements: [],
	linkedNodeNames: [],
}

/**
 * Represents a yarn node
 * @class Node
 * @property {string} name - The title of this node. Should be unique.
 */
class Node {
	constructor(attrs) {
		this.name = attrs.name;
		delete(attrs.name);
		const privates = Object.assign(defaultNode, attrs);

		privateProps.set(this, privates);
	}

	/** @returns {String[]} - the tags for this node */
	get tags() { return privateProps.get(this).tags; }

	/** @returns {String[]} - the titles of the other nodes we're linked to */
	get linkedNodeNames() { return privateProps.get(this).linkedNodeNames;}

	/** @returns {Statement.Base[]} - the statements in this node */
	get statements() { return privateProps.get(this).statements;}

	/** @returns {Location} the location of this node in the original file	 */
	get location() { return privateProps.get(this).location; }
}

module.exports = Function;