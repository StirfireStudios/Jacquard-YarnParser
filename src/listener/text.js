'use strict';

const TextStatement = require('../statements/text');
const Location = require('../parser/location');

function exit(ctx) {
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	const text = ctx.children.map(function(textNode) {
		return textNode.toString();  
	}).join("\n").trim();
	
	const parts = this._characterSupportEnabled ? text.split(/:(.+)/) : [text];
	if (parts.length > 1 && this._statementGroup.character == null) {
		this._statementGroup.character = parts[0].trim()
		this._statements.push(new TextStatement(parts[1].trim(), location));
	} else {
		this._statements.push(new TextStatement(text, location));
	}
}

function addToPrototype(prototype) {
  prototype.exitText = exit;
}

module.exports = addToPrototype;
 