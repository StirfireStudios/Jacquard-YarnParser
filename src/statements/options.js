'use strict';

const Group = require('./group');

const privateProps = new WeakMap();

/**
 * Represents a group of options (or statements that decide if options appear)
 * @memberof Statement
 * @augments Statement.Group
 * @class OptionGroup
 */
class OptionGroup extends Group {
	constructor(statements, location) { super(statements, location); }
}

module.exports = OptionGroup;