'use strict';

const TextStatement = require('../statements/text');
const Location = require('../parser/location');

function exit(ctx) {
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	const text = ctx.children.map(function(textNode) {
		return textNode.toString();  
	}).join("\n");
	
	this._statements.push(new TextStatement(text.trim(), location));
}

function addToPrototype(prototype) {
  prototype.exitText = exit;
}

module.exports = addToPrototype;
