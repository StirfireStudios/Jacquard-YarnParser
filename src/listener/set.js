'use strict';

const EvaluateStatement = require('../statements/evaluate');
const Location = require('../parser/location');
const expressionGenerator = require('../expression/generator');
const YarnParser = require('../antlr/YarnParser').YarnParser;
const ExpressionTypes = require('../expression');

function getAssignClass(assignNode) {
	switch(assignNode.getChild(0).symbol.type) {
		case YarnParser.ADD_EQUALS:
			return ExpressionTypes.AddAssignOperator;
		case YarnParser.MINUS_EQUALS:
			return ExpressionTypes.SubtractAssignOperator;
		case YarnParser.MULTIPLY_EQUALS:
			return ExpressionTypes.MultiplyAssignOperator;
		case YarnParser.DIVIDE_EQUALS:
			return ExpressionTypes.DivideAssignOperator;
		case YarnParser.MODULO_EQUALS:
			return ExpressionTypes.ModulusAssignOperator;
		case YarnParser.KEYWORD_TO:
			return ExpressionTypes.AssignOperator;
	}
}

function generateAssignExpression(assignNode, variable, expression, location) {
	const classType = getAssignClass(assignNode);
	if (classType == null) {
		console.error("Unknown assignment type");
		return;
	}

	return new classType(variable, expression, location);
}

function generateVariableExpression(varNode) {
	const location = Location.FromANTLRSymbol(varNode.symbol);
	location.fileID = this._fileID;
	return new ExpressionTypes.Variable(varNode.getText().substr(1).trim(), location);
}

function exit(ctx) {
	this._handleCommand = false;
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	const variable = generateVariableExpression.call(this, ctx.getChild(1));
	if (this.variables.indexOf(variable.name) === -1) this.variables.push(variable.name);

	const valueExpression = expressionGenerator(ctx.getChild(3), this._fileID);
	
	const expression = generateAssignExpression(ctx.getChild(2), variable, valueExpression, location);
	valueExpression.functions.forEach(funcName => {
		if (this.functions.indexOf(funcName) === -1) this.functions.push(funcName);
	});
	valueExpression.variables.forEach(varName => {
		if (this.variables.indexOf(varName) === -1) this.variables.push(varName);
	});

	if (expression == null) {
		this.addError(ctx, "unknown assignment type");	
	} else {
		this._statements.push(new EvaluateStatement(expression, false, location));
	}
}

function addToPrototype(prototype) {
  prototype.exitSet_command = exit;
}

module.exports = addToPrototype;