'use strict';

const CommandStatement = require('../statements/command');
const Location = require('../parser/location');
const StringValueExpression = require('../expression/values/string');
const YarnParser = require('../antlr/YarnParser').YarnParser;
const expressionGenerator = require('../expression/generator');

function childStringValue(child, args) {
  const location = Location.FromANTLRSymbol(child.symbol);
  const arg = child.getText();
  args.push(new StringValueExpression(arg, location));
}

function childExpression(child, args) {
  const location = Location.FromANTLRNode(child);
  args.push(expressionGenerator(child));
}

function enter(ctx) {

}

function exit(ctx) {
  const location = Location.FromANTLRNode(ctx);
  const args = [];
  for (let index = 1; index < ctx.getChildCount() - 1; index++) {
    const child = ctx.getChild(index);
    if (child.getChildCount() == 0) {
      childStringValue(child, args);
    } else if (child instanceof YarnParser.KeywordContext) {
      childStringValue(child.getChild(0), args);
    } else {
      childExpression(child, args);
    }
  }

  this._statements.push(new CommandStatement(args, location));
}

function addToPrototype(prototype) {
  prototype.enterCommand = enter;
  prototype.exitCommand = exit;
}

module.exports = addToPrototype;