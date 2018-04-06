'use strict';

/** An Action node
 * An arbitrary text string that is an engine action.
 * @property {string} value the action to run
 * @memberof StatementTypes
 */
const Action = "Action";
/** A Execute Function node 
 * @memberof StatementTypes
 */
const Function = "Function";
const Line = "LineStatement";
const NodeLink = "NodeLink";
const NodeLinkWithText = "NodeLinkWithText";
const NodeLinkGroup = "NodeLinkGroup";
const ShortcutGroup = "ShortcutGroup";
const Shortcut = "Shortcut"
const Evaluate = "Expression";
const Blank = "Blank";
const Conditional = "Conditional";

/**
 * Statement Types. See @parser for where these are accessed.
 * @namespace StatementTypes
 */
module.exports = {
	Action,
	Blank,
	Conditional,
	Evaluate,
	Function,
	Line, 
	NodeLink, 
	NodeLinkWithText, 
	NodeLinkGroup, 
	ShortcutGroup, 
	Shortcut,
}