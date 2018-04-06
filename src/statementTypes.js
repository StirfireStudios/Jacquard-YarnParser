'use strict';

/** An Action node 
 * @memberof StatementTypes
 */
const Action = "Action";
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
 * Statement Types. Available as a static property on the main parser object.
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