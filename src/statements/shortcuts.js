'use strict';

const Group = require('./group');

const privateProps = new WeakMap();

/**
 * Represents a group of shortcuts (or statements that decide if options appear)
 * @memberof Statement
 * @augments Statement.Group
 * @class ShortcutGroup
 */
class ShortcutGroup extends Group {
	constructor(statements, location) { super(statements, location); }
}

module.exports = ShortcutGroup;