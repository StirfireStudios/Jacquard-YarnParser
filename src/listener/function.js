'use strict';

const FunctionStatement = require('../statements/function');
const Location = require('../parser/location');
const expressionGenerator = require('../expression/generator');

function exit(ctx) {
	this._handleCommand = false;
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	const actual = ctx.getChild(1);
	const funcName = actual.getChild(0).getText()
	this.functions.push(funcName.trim());
	const args = [];
	actual.args.forEach((arg) => {
		const expr = expressionGenerator(arg);
		args.push(expr);
		expr.functions.forEach(funcName => {
			if ( this.functions.indexOf(funcName) === -1) this.functions.push(funcName);
		});
		expr.variables.forEach(varName => {
			if (this.variables.indexOf(varName) === -1) this.variables.push(varName);
		});
	});

	this._statements.push(new FunctionStatement(
		funcName.trim(),
		args,
		location,
	));
}

function addToPrototype(prototype) {
  prototype.exitFunction_command = exit;
}

module.exports = addToPrototype;