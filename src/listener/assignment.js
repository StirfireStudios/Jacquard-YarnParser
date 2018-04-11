'use strict';

const expressionGenerator = require('../expression/generator');

function exit(ctx) {
	let statement = null;
	if (ctx.children.length == 5) {
    const variable = ctx.getChild(1).getChild(0).toString().trim();
    statement = expressionGenerator(ctx.getChild(3), variable);
  } else if (ctx.children.length == 3) {
    statement = expressionGenerator(ctx.getChild(1));
	}
	if (statement != null) {
		this._statements.push(statement);
	} else {
		this.addError(ctx, "could not create a valid statement");
	}
}

function addToPrototype(prototype) {
  prototype.exitSet_statement = exit;
}

module.exports = addToPrototype;