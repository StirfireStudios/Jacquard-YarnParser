'use strict';

const OptionStatement = require('../statements/option');
const LinkStatement = require('../statements/link');
const Location = require('../parser/location');

function exit(ctx) {
	const location = Location.FromANTLRNode(ctx); 
	let statement = null;
	if (ctx.children.length == 3) {
		const destination = ctx.getChild(1).getText().trim();
		statement = new LinkStatement(destination, location);
	} else {
		const destination = ctx.getChild(3).getText().trim();
		const text = ctx.getChild(1).getText().trim();
		statement = new OptionStatement(text, destination, location);
	}

	this._statements.push(statement);
	this._nodeData.linkedNodeNames.push(statement.destination);
}

function addToPrototype(prototype) {
  prototype.exitOption_statement = exit;
}

module.exports = addToPrototype;