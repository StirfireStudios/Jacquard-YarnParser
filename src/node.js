'use strict';

const privateProps = new WeakMap();

const defaultNode = {
	attributes: {},
	tags: [],
	statements: [],
	linkedNodeNames: [],
	location: null,
}

function getDefaultNode() {
	return Object.assign({}, defaultNode);
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
		const privates = Object.assign(getDefaultNode(), attrs);

		if (privates.linkedNodeNames.length > 1) {
			const newlinkedNames = [];
			privates.linkedNodeNames.forEach(nodeName => {
				if (newlinkedNames.indexOf(nodeName) == -1) newlinkedNames.push(nodeName);
			});
			privates.linkedNodeNames = newlinkedNames;
		}

		privateProps.set(this, privates);
	}

	/** @returns {Object} - the attributes for this node. A dictionary of key value pairs. */
	get attributes() { return privateProps.get(this).attributes; }

	/** @returns {String[]} - the tags for this node */
	get tags() { return privateProps.get(this).tags; }

	/** @returns {String[]} - the titles of the other nodes we're linked to */
	get linkedNodeNames() { return privateProps.get(this).linkedNodeNames;}

	/** @returns {Statement.Base[]} - the statements in this node */
	get statements() { return privateProps.get(this).statements;}

	/** @returns {Location} the location of this node in the original file	 */
	get location() { return privateProps.get(this).location; }

	/** @returns {boolean} does this node have any statements? */
	get hasStatements() { return privateProps.get(this).statements.length > 0; }
}

module.exports = Node;