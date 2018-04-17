'use strict';

const OptionStatement = require('../statements/option');
const LinkStatement = require('../statements/link');
const Location = require('../parser/location');

function addLink(statement) {
	this._statements.push(statement);
	this._nodeData.linkedNodeNames.push(statement.destination);
}

function exitOption(ctx) {
	if (this._group != null) this._group.isOption = true;
	const location = Location.FromANTLRNode(ctx);
	const destination = ctx.getChild(3).getText().trim();
	const text = ctx.getChild(1).getText().trim();

	addLink.call(this, new OptionStatement(text, destination, location));
}

function exitLink(ctx) {
	const location = Location.FromANTLRNode(ctx);
	const destination = ctx.getChild(1).getText().trim();
	
	addLink.call(this, new LinkStatement(destination, location));
}

function addToPrototype(prototype) {
	prototype.exitOption_with_text = exitOption;
	prototype.exitOption_link = exitLink;
}

module.exports = addToPrototype;