'use strict';

const LineGroup = require('../statements/lineGroup');
const Location = require('../parser/location');

function enter(ctx) {
	const statementGroupParts = {
		previousStatementGroup: this._statementGroup,
		previousStatements: this._statements,
		statements: [],
	}

	this._statementGroup = statementGroupParts;
	this._statements = statementGroupParts.statements;
}

function exit(ctx) {
	const location = Location.FromANTLRNode(ctx);
	const statementGroupParts = this._statementGroup;
  this._statements = statementGroupParts.previousStatements;
  this._statementGroup = statementGroupParts.previousStatementGroup;

  if (statementGroupParts.statements.length == 0) {
    return;
  } else if (statementGroupParts.statements.length == 1) {
    this._statements.push(statementGroupParts.statements[0]);
  } else {
    this._statements.push(new LineGroup(
      statementGroupParts.statements,
      location,
    ));
  }
}

function addToPrototype(prototype) {
	prototype.enterLine = enter;
	prototype.exitLine = exit;
}

module.exports = addToPrototype;