'use strict';

const EvaluateStatement = require('../statements/evaluate');
const expressionGenerator = require('../expression/generator');
const Location = require('../parser/location');

function exit(ctx) {
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	const expression = expressionGenerator(ctx.getChild(1), this._fileID);
	
	this._statements.push(new EvaluateStatement(expression, location));
}

function addToPrototype(prototype) {
  prototype.exitEval_statement = exit;
}

module.exports = addToPrototype;