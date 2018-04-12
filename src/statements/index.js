/**
 * Statement Types.
 * Each of these represents a command encountered in a node body 
 * (or as part of a nested statement)
 * @namespace Statement
 */
module.exports = {
	Base: require('./base'),
	Blank: require('./blank'),
	Command: require('./command'),
	Evaluate: require('./evaluate'),
	Function: require('./function'),
	Text: require('./text'),
}