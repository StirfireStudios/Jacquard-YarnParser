'use strict';

const ConditionalStatement = require('../statements/conditional');
const Clause = ConditionalStatement.Clause;
const Location = require('../parser/location');
const expressionGenerator = require('../expression/generator');
import * as Util from './util';

function enter(ctx) {
	const conditionalParts = {
		clauseStatements: [],
		clauses: [],
		previousStatements: this._statements,
		previousConditional: this._conditional
	}

	this._conditional = conditionalParts;
}

function enterTestedClause(ctx) {
	this._statements = this._conditional.clauseStatements;
}

function exitTestedClause(ctx) {
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	const expr = expressionGenerator(ctx.getChild(1));
	const test = expr;
  expr.functions.forEach(funcName => {
    if ( this.functions.indexOf(funcName) === -1) this.functions.push(funcName);
  });
  expr.variables.forEach(varName => {
    if (this.variables.indexOf(varName) === -1) this.variables.push(varName);
  });  	

	Util.DialogueSegment.Finish.call(this);
	this._conditional.clauses.push(new Clause(
		this._conditional.clauseStatements,
		location,
		test,
	));

	this._conditional.clauseStatements = [];
}

function enterClause(ctx) {
	this._statements = this._conditional.clauseStatements;
}

function exitClause(ctx) {
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;

	Util.DialogueSegment.Finish.call(this);
	this._conditional.clauses.push(new Clause(
		this._conditional.clauseStatements,
		location,
	));

	this._conditional.clauseStatements = [];
}

function exit(ctx) {
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	const conditionalParts = this._conditional;
  this._statements = conditionalParts.previousStatements;
  this._conditional = conditionalParts.previousConditional;

	Util.DialogueSegment.Finish.call(this);
	this._statements.push(new ConditionalStatement(
		conditionalParts.clauses,
		location,
	));
}

function addToPrototype(prototype) {
	prototype.enterIf_statement = enter;
	prototype.enterIf_clause = enterTestedClause;
	prototype.exitIf_clause = exitTestedClause;
	prototype.enterElse_if_clause = enterTestedClause;
	prototype.exitElse_if_clause = exitTestedClause;
	prototype.enterElse_clause = enterClause;
	prototype.exitElse_clause = exitClause;
	prototype.exitIf_statement = exit;

	prototype.enterOf_statement = enter;
	prototype.enterOf_clause = enterTestedClause;
	prototype.exitOf_clause = exitTestedClause;
	prototype.enterElse_of_clause = enterTestedClause;
	prototype.exitElse_of_clause = exitTestedClause;
	prototype.enterOelse_clause = enterClause;
	prototype.exitOelse_clause = exitClause;
	prototype.exitOf_statement = exit;
}

module.exports = addToPrototype;
