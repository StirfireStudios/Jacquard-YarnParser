'use strict';

const Base = require('./base');

const privateProps = new WeakMap();

/**
 * Represents a command statement in the node body
 * @memberof Statement
 * @augments Base
 * @class Command
 */
class Command extends Base {
	constructor(args, location) {
		super(location);

		const privates = {
			args: args,
		}

		privateProps.set(this, privates);
	}

	/** @memberof Statement.Command 
	 * @instance
	 * @returns {Expression.Base[]} an array of expressions for this command */
	get arguments() { return privateProps.get(this).args; }
}

module.exports = Command;