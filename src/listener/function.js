'use strict';

const FunctionStatement = require('../statements/function');
const Location = require('../parser/location');
const expressionGenerator = require('../expression/generator');

function exit(ctx) {
	this._handleCommand = false;
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	const actual = ctx.getChild(1);
	const funcText = actual.getChild(0).getText()
	const args = [];
	actual.args.forEach((arg) => {
		args.push(expressionGenerator(arg));
	});

	this._statements.push(new FunctionStatement(
		funcText.trim(),
		args,
		location,
	));
}

function addToPrototype(prototype) {
  prototype.exitFunction_command = exit;
}

module.exports = addToPrototype;