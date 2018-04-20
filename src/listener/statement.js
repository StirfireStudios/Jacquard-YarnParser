'use strict';

const LineGroup = require('../statements/lineGroup');
const Location = require('../parser/location');
const YarnParser = require('../antlr/YarnParser').YarnParser;

function enter(ctx) {
  if (this._statementGroup != null) return;

  const location = Location.FromANTLRNode(ctx);
  
  const statementGroupParts = {
		previousStatementGroup: this._statementGroup,
		previousStatements: this._statements,
    statements: [],
    location: Location.FromANTLRNode(ctx),
	}


	this._statementGroup = statementGroupParts;
	this._statements = statementGroupParts.statements;
}

function exit(ctx) {
  const lastNode = ctx.getChild(ctx.getChildCount() - 1);
  if (lastNode.symbol == null || lastNode.symbol.type !== YarnParser.NEWLINE) return;
	const statementGroupParts = this._statementGroup;
  this._statements = statementGroupParts.previousStatements;
  this._statementGroup = statementGroupParts.previousStatementGroup;

  if (statementGroupParts.statements.length == 0) {
    return;
  } else if (statementGroupParts.statements.length == 1) {
    this._statements.push(statementGroupParts.statements[0]);
  } else {
    statementGroupParts.location.end.line = ctx.stop.line;
    statementGroupParts.location.end.column = ctx.stop.column;
    this._statements.push(new LineGroup(
      statementGroupParts.statements,
      statementGroupParts.location,
    ));
  }
}

function addToPrototype(prototype) {
	prototype.enterPart = enter;
	prototype.exitPart = exit;
}

module.exports = addToPrototype;