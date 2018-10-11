'use strict';

const CommandStatement = require('../statements/command');
const FunctionStatement = require('../statements/function');
const Location = require('../parser/location');
const Expressions = require('../expression');
const YarnParser = require('../antlr/YarnParser').YarnParser;
const expressionGenerator = require('../expression/generator');
import {recordReference as RecordReference} from './util';

function childStringValue(child, args) {
  const location = Location.FromANTLRSymbol(child.symbol);
  location.fileID = this._fileID;
  const arg = child.getText();
  args.push(new Expressions.StringValue(arg, location));
}

function childExpression(child, args) {
  const expression = expressionGenerator(child, this._fileID);
  expression.functions.forEach(funcName => {
    RecordReference(funcName, this._nodeData.name, this._nodeData.functions, this.functions);
  });
  expression.variables.forEach(varName => {
    RecordReference(varName, this._nodeData.name, this._nodeData.variables, this.variables);
  });  
  args.push(expression);
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
      childStringValue.call(this, child, args);
    } else if (child instanceof YarnParser.KeywordContext) {
      childStringValue.call(this, child.getChild(0), args);
    } else if (child.getChildCount() == 3) {
      childExpression.call(this, child.getChild(1), args);
    } else if (child.getChildCount() == 1) {
      childExpression.call(this, child.getChild(0), args);
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
