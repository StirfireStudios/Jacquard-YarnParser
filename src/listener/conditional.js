'use strict';

const ConditionalStatement = require('../statements/conditional');
const Clause = ConditionalStatement.Clause;
const Location = require('../parser/location');
const expressionGenerator = require('../expression/generator');

function enter(ctx) {
	const conditionalParts = {
		clauseStatements: [],
		clauses: [],
		previousStatements: this._statements,
		previousConditional: this._conditional,
		location: Location.FromANTLRNode(ctx),
	}

	this._conditional = conditionalParts;
}

function enterTestedClause(ctx) {
	this._statements = this._conditional.clauseStatements;
}

function exitTestedClause(ctx) {
	const location = Location.FromANTLRNode(ctx);
	const test = expressionGenerator(ctx.getChild(1));

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

	this._conditional.clauses.push(new Clause(
		this._conditional.clauseStatements,
		location,
	));

	this._conditional.clauseStatements = [];
}

function exit(ctx) {
	const conditionalParts = this._conditional;
  this._statements = conditionalParts.previousStatements;
  this._conditional = conditionalParts.previousConditional;

	this._statements.push(new ConditionalStatement(
		conditionalParts.clauses,
		conditionalParts.location,
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
}

module.exports = addToPrototype;