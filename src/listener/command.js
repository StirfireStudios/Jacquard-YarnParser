'use strict';

const CommandStatement = require('../statements/command');
const Location = require('../parser/location');
const StringValueExpression = require('../expression/values/string');

function getCommandArgs(string) {
	const trimmed = string.substr(2, string.length - 2).trim();
	return trimmed.split(' ');
}

function exit(ctx) {
	const location = Location.FromANTLRNode(ctx); 
	const args = getCommandArgs(ctx.getChild(0).getText()).map(arg => {
		return new StringValueExpression(arg, location);
	});

	this._statements.push(new CommandStatement(args, location));
}

function addToPrototype(prototype) {
  prototype.exitAction_statement = exit;
}

module.exports = addToPrototype;