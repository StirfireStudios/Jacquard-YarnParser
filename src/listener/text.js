'use strict';

const TextStatement = require('../statements/text');
const Location = require('../parser/location');

function exit(ctx) {
	const text = ctx.children.map(function(textNode) {
		return textNode.children[0].toString();  
	}).join("\n");
	
	this._statements.push(new TextStatement(text, Location.FromANTLRNode(ctx)));
}

function addToPrototype(prototype) {
  prototype.exitLine_statement = exit;
}

module.exports = addToPrototype;