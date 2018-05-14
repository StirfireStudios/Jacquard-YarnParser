'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents a group of statements
 * @memberof Statement
 * @augments Statement.Base
 * @class Group
 */
class Group extends Base {
	constructor(statements, location) {
		super(location);

		const privates = {
			statements: statements,
		}

		this.serializableProperties.push("statements");

		privateProps.set(this, privates);
	}

	/** @memberof Statement.Group
	 * @instance
	 * @returns {Statement.Base[]} the statements that are part of this group */
	get statements() { return privateProps.get(this).statements }
}

module.exports = Group;