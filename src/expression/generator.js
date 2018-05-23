'use strict';

const YarnParser = require('../antlr/YarnParser').YarnParser;
const Location = require('../parser/location');
const ExpressionTypes = require('./index');

function getExpressionClassFor(node) {
	switch(node.getChild(0).symbol.type) {
		case YarnParser.PLUS:
			return ExpressionTypes.AddOperator;
		case YarnParser.MINUS:
			return ExpressionTypes.SubtractOperator;
		case YarnParser.MULTIPLY:
			return ExpressionTypes.MultiplyOperator;
		case YarnParser.DIVIDE:
			return ExpressionTypes.DivideOperator;
		case YarnParser.MODULO:
			return ExpressionTypes.ModulusOperator;
		case YarnParser.EQ:
			return ExpressionTypes.EqualityOperator;
		case YarnParser.GT:
			return ExpressionTypes.GreaterThanOperator;
		case YarnParser.LT:
			return ExpressionTypes.LessThanOperator;
		case YarnParser.NEQ:
			return ExpressionTypes.NotEqualityOperator;
		case YarnParser.GTE:
			return ExpressionTypes.GreaterThanOrEqualOperator;
		case YarnParser.LTE:
			return ExpressionTypes.LessThanOrEqualOperator;
		case YarnParser.NOT:
			return ExpressionTypes.NotOperator;
		case YarnParser.AND:
			return ExpressionTypes.AndOperator;
		case YarnParser.OR:
			return ExpressionTypes.OrOperator;
		case YarnParser.XOR:
			return ExpressionTypes.XorOperator;
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
	}
}

function generateAssignmentExpression(node, fileID) {
	const location = Location.FromANTLRNode(node);
	location.fileID = fileID;

	if (node.getChildCount() != 3) {
		console.error(`Assignment operator has ${node.getChildCount()} children and not 3!`);
		return null;
	}

	const variable = generateExpression(node.getChild(0));
	const operatorClass = getExpressionClassFor(node.getChild(1));
	const expression = generateExpression(node.getChild(2));

	if (operatorClass == null) {
		console.error(`Could not find operator class!`);
		// are we a left-right operator?
		return null;
	}

	return new operatorClass(variable, expression, location);
}

function generateLeftRightExpression(node, fileID) {
	const location = Location.FromANTLRNode(node);
	location.fileID = fileID;

	if (node.getChildCount() != 3) {
		console.error(`LeftRight operator has ${node.getChildCount()} children and not 3!`);
		return null;
	}

	const left = generateExpression(node.left);
	const operatorClass = getExpressionClassFor(node.getChild(1));
	const right = generateExpression(node.right);

	if (operatorClass == null) {
		console.error(`Could not find operator class!`);
		// are we a left-right operator?
		return null;
	}

	return new operatorClass(left, right, location);
}

function generateRightExpresssion(node, fileID) {
	const location = Location.FromANTLRNode(node);
	location.fileID = fileID;
	if (node.getChildCount() != 2) {
		console.error(`Right operator has ${node.getChildCount()} children and not 2!`);
		return null;
	}

	const expression = generateExpression(node.getChild(1));
	if (node instanceof YarnParser.NegativeExpressionContext) {
		return new ExpressionTypes.NegativeOperator(expression, location);
	} else if (node instanceof YarnParser.NotExpressionContext) {
		return new ExpressionTypes.NotOperator(expression, location);
	} else {
		console.error(`Unknown Expression!`);
		return null;		
	}
}

function generateNumberValue(expressionNode, fileID) {
	const location = Location.FromANTLRNode(expressionNode);
	location.fileID = fileID;
	const numberAsString = expressionNode.getText();
	if (numberAsString.indexOf('.') === -1) {
		const value = parseInt(numberAsString, 10);
		return new ExpressionTypes.IntegerValue(value, location);
	} else {
		const value = parseFloat(numberAsString);
	  return new ExpressionTypes.FloatValue(value, location);
	}
}

function generateStringExpression(expressionNode, fileID) {
	const location = Location.FromANTLRNode(expressionNode);
	location.fileID = fileID;
	let value = expressionNode.getText();
	if (value.startsWith('"')) value = value.substr(1);
	if (value.endsWith('"')) value = value.substr(0, value.length - 1);
	return new ExpressionTypes.StringValue(value, location);
}

function generateFunctionExpression(expressionNode, fileID, isActual) {
	const location = Location.FromANTLRNode(expressionNode);
	location.fileID = fileID;
	let actual = expressionNode;
	if (!isActual) actual = expressionNode.getChild(0);
	const name = actual.getChild(0).getText();
	const args = [];
	actual.args.forEach((arg) =>{
		args.push(generateExpression(arg));
	});
	return new ExpressionTypes.Function(name, args, location);
}

function generateValueExpression(expressionNode, fileID) {
	if (expressionNode instanceof YarnParser.VariableContext) {
		const location = Location.FromANTLRNode(expressionNode);
		location.fileID = fileID;
		const name = expressionNode.getText().trim().substr(1);
	  return new ExpressionTypes.Variable(name, location);
	} else if (expressionNode instanceof YarnParser.FalseConstantContext) {
		const location = Location.FromANTLRNode(expressionNode);
		location.fileID = fileID;
		return new ExpressionTypes.BooleanValue(false, location);
	} else if (expressionNode instanceof YarnParser.TrueConstantContext) {
		const location = Location.FromANTLRNode(expressionNode);
		location.fileID = fileID;
		return new ExpressionTypes.BooleanValue(true, location);
	} else if (expressionNode instanceof YarnParser.NullConstantContext) {
		const location = Location.FromANTLRNode(expressionNode);
		location.fileID = fileID;
	  return new ExpressionTypes.NullValue(location);
	} else if (expressionNode instanceof YarnParser.StringContext) {
	  return generateStringExpression(expressionNode, fileID);
	} else if (expressionNode instanceof YarnParser.NumberContext) {
	  return generateNumberValue(expressionNode, fileID);
	} else if (expressionNode.getChildCount() > 0) {
		return generateValueExpression(expressionNode.getChild(0));
	} else if (expressionNode.isErrorNode()) {
		return expressionNode;
	} else {
	  console.err("Unknown value expression!");
	}
}

function generateExpression(expressionNode, fileID) {
	if (expressionNode instanceof YarnParser.ValueExpressionContext) {
		return generateValueExpression(expressionNode, fileID);
	} else if (expressionNode instanceof YarnParser.FunctionExpressionContext) {
		return generateFunctionExpression(expressionNode, fileID);
	} else if (expressionNode instanceof YarnParser.Function_callContext) {
		return generateFunctionExpression(expressionNode, fileID, true);
	} else if (expressionNode instanceof YarnParser.GroupedExpressionContext) {
		return generateExpression(expressionNode.getChild(1), fileID);
	} else if (expressionNode instanceof YarnParser.NegativeExpressionContext) {
		return generateRightExpresssion(expressionNode, fileID);
	} else if (expressionNode instanceof YarnParser.NotExpressionContext) {
		return generateRightExpresssion(expressionNode, fileID);
	} else if (expressionNode instanceof YarnParser.AssignmentExpressionContext) {
		return generateAssignmentExpression(expressionNode, fileID);
	} else if (expressionNode instanceof YarnParser.LeftRightExpressionContext) {
		return generateLeftRightExpression(expressionNode, fileID);
	} else if (expressionNode instanceof YarnParser.StringContext) {
		return generateStringExpression(expressionNode, fileID);
	} else if (expressionNode instanceof YarnParser.OperandContext) {
		debugger;
	}
	console.error("UNHANDLED EXPRESSION!");
}

module.exports = generateExpression;
