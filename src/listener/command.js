'use strict';

const CommandStatement = require('../statements/command');
const FunctionStatement = require('../statements/function');
const Location = require('../parser/location');
const Expressions = require('../expression');
const YarnParser = require('../antlr/YarnParser').YarnParser;
const expressionGenerator = require('../expression/generator');

function childStringValue(child, args) {
  const location = Location.FromANTLRSymbol(child.symbol);
  const arg = child.getText();
  args.push(new Expressions.StringValue(arg, location));
}

function childExpression(child, args) {
  const location = Location.FromANTLRNode(child);
  args.push(expressionGenerator(child));
}

function enter(ctx) {
  this._handleCommand = true;
}

function exit(ctx) {
  if (!this._handleCommand) return;
  const location = Location.FromANTLRNode(ctx);
  location.fileID = this._fileID;
  const args = [];
  for (let index = 1; index < ctx.getChildCount() - 1; index++) {
    const child = ctx.getChild(index);
    if (child.getChildCount() == 0) {
      childStringValue(child, args);
    } else if (child instanceof YarnParser.KeywordContext) {
      childStringValue(child.getChild(0), args);
    } else if (child.getChildCount() == 3) {
      childExpression(child.getChild(1), args);
    } else if (child.getChildCount() == 1) {
      childExpression(child.getChild(0), args);
    } else {
      console.error("Could not handle command argument");
    }
  }

  const firstArgIsString = args[0] instanceof Expressions.StringValue
  let statement = null;

  if (args.length > 1 || firstArgIsString) {
    statement = new CommandStatement(args, location);
  } else {
    const arg = args[0];
    if (arg instanceof Expressions.Function) {
      statement = new FunctionStatement(arg.name, arg.args, location);
    }
  }

  if (statement != null) {
    this._statements.push(statement);
  } else {
    this.addWarning(ctx, "Commands with single arguments/expressions won't be sent to the engine");
  }
}

function addToPrototype(prototype) {
  prototype.enterCommand = enter;
  prototype.exitCommand = exit;
}

module.exports = addToPrototype;