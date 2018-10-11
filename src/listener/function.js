'use strict';

const FunctionStatement = require('../statements/function');
const Location = require('../parser/location');
const expressionGenerator = require('../expression/generator');
import {recordReference as RecordReference} from './util';

function exit(ctx) {
	this._handleCommand = false;
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	const actual = ctx.getChild(1);
	const funcName = actual.getChild(0).getText();

	RecordReference(funcName.trim(), this._nodeData.name, this._nodeData.functions, this.functions);
	const args = [];
	actual.args.forEach((arg) => {
		const expr = expressionGenerator(arg);
		args.push(expr);
		expr.functions.forEach(funcName => {
			RecordReference(funcName, this._nodeData.name, this._nodeData.functions, this.functions);
		});
		expr.variables.forEach(varName => {
			RecordReference(funcName, this._nodeData.name, this._nodeData.functions, this.functions);
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
