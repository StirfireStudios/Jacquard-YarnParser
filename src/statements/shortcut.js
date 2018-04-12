'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents a shortcut statement (a set of statements grouped as an option)
 * @memberof Statement
 * @augments Statement.Base
 * @class Shortcut
 */
class Shortcut extends Base {
	constructor(statements, location) {
		super(location);

		const privates = {
			statements: statements,
		}

		privateProps.set(this, privates);
	}

	/** @memberof Statement.Shortcut
	 * @instance
	 * @returns {Statement.Base[]} the statements that are part of this shortcut */
	get statements() { return privateProps.get(this).statements }
}

module.exports = Shortcut;