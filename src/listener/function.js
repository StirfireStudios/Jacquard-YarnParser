'use strict';

const FunctionStatement = require('../statements/function');
const Location = require('../parser/location');
const expressionGenerator = require('../expression/generator');

function exit(ctx) {
	const location = Location.FromANTLRNode(ctx);
	const funcText = ctx.getChild(0).getText()
	const args = [];
	for(let i = 1; i < ctx.getChildCount(); i++) {
	  const node = ctx.getChild(i);
	  if (node.getChildCount() === 0) continue;
	  args.push(expressionGenerator(node));
	}
	this._statements.push(new FunctionStatement(
		funcText.substring(2, funcText.length - 1).trim(),
		args,
		location,
	));
}

function addToPrototype(prototype) {
  prototype.exitFunc_call_statement = exit;
}

module.exports = addToPrototype;