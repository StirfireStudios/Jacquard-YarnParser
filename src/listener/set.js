'use strict';

const EvaluateStatement = require('../statements/evaluate');
const Location = require('../parser/location');
const expressionGenerator = require('../expression/generator');
const YarnParser = require('../antlr/YarnParser').YarnParser;
const ExpressionTypes = require('../expression');
import {recordReference as RecordReference} from './util';

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
	if (ctx.getChildCount() < 4) {
		this.addError(ctx, "Invalid set expression");
		return;
	}
	this._handleCommand = false;
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	const variable = generateVariableExpression.call(this, ctx.getChild(1));
	RecordReference(variable.name, this._nodeData.name, this._nodeData.variables, this.variables);

	const valueExpression = expressionGenerator(ctx.getChild(3), this._fileID);
	//TODO: better fix for this
	if (valueExpression.isErrorNode != null) {
		this.addError(ctx, "error in valueExpression");
	}
	
	const expression = generateAssignExpression(ctx.getChild(2), variable, valueExpression, location);
	valueExpression.functions.forEach(funcName => {
		RecordReference(funcName, this._nodeData.name, this._nodeData.functions, this.functions);
	});
	valueExpression.variables.forEach(varName => {
		RecordReference(varName, this._nodeData.name, this._nodeData.functions, this.functions);
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
