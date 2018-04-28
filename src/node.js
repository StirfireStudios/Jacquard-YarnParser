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
		privates.incomingLinks = {};
		privates.outgoingLinks = {};

		if (privates.linkedNodeNames.length > 1) {
			const newlinkedNames = [];
			privates.linkedNodeNames.forEach(nodeName => {
				if (newlinkedNames.indexOf(nodeName) == -1) newlinkedNames.push(nodeName);
			});
			privates.linkedNodeNames = newlinkedNames;
		}

		privateProps.set(this, privates);
	}

	/** turn the text linked names into actual node links.
	 * must be run before outgoingLinks or incomingLinks will be valid
	 * @param {Object.<string, Node>} namedNodes a Key, Value store of the node names and the actual nodes to link to.
	 */
	actualizeLinks(namedNodes) {
		const privates = privateProps.get(this);
		privates.linkedNodeNames.forEach(nodeName => {
			if (namedNodes[nodeName] == null) {
				privates.outgoingLinks[nodeName] = null;
			} else {
				privates.outgoingLinks[nodeName] = namedNodes[nodeName];
				privateProps.get(namedNodes[nodeName]).incomingLinks[this.name] = this;
			}
		});
	}

	/** @returns {Object} - the attributes for this node. A dictionary of key value pairs. */
	get attributes() { return privateProps.get(this).attributes; }

	/** @returns {String[]} - the tags for this node */
	get tags() { return privateProps.get(this).tags; }

	/** @returns {Statement.Base[]} - the statements in this node */
	get statements() { return privateProps.get(this).statements;}

	/** @returns {Location} the location of this node in the original file	 */
	get location() { return privateProps.get(this).location; }

	/** @returns {boolean} does this node have any statements? */
	get hasStatements() { return privateProps.get(this).statements.length > 0; }

	/** @returns {Object.<string, Node>} a key-value map of outgoing link names. Values are null if the nodes don't exists and a Node if they do */
	get outgoingLinks() { return privateProps.get(this).outgoingLinks; }

	/** @returns {Object.<string, Node>} a key-value map of incoming link names and the Nodes that link to this one */
	get incomingLinks() { return privateProps.get(this).incomingLinks; }
}

module.exports = Node;