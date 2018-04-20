'use strict';

const Group = require('./group');

const privateProps = new WeakMap();

/**
 * Represents a line group statement (a set of statements grouped as a line of dialog)
 * @memberof Statement
 * @augments Statement.Group
 * @class LineGroup
 */
class LineGroup extends Group {
	constructor(statements, location) { super(statements, location); }
}

module.exports = LineGroup;