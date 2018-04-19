'use strict';

const EvaluateStatement = require('../statements/evaluate');
const Location = require('../parser/location');
const expressionGenerator = require('../expression/generator');

function exit(ctx) {
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	let expression = null;
	if (ctx.children.length == 5) {
    const variable = ctx.getChild(1).getChild(0).toString().trim();
    expression = expressionGenerator(ctx.getChild(3), variable);
  } else if (ctx.children.length == 3) {
    expression = expressionGenerator(ctx.getChild(1));
	}
	if (expression != null) {
		this._statements.push(new EvaluateStatement(expression, location));
	} else {
		this.addError(ctx, "could not create a valid statement");
	}
}

function addToPrototype(prototype) {
  prototype.exitSet_statement = exit;
}

module.exports = addToPrototype;