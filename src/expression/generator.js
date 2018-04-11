'use strict';

const YarnParser = require('../antlr/YarnParser').YarnParser;
const Location = require('../parser/location');
const ExpressionTypes = require('./index');

function generateOperatorExpression(node) {
	const location = Location.FromANTLRNode(node);
	const operatorSymbol = node.getChild(1).symbol;

	const leftExpression = generateExpression(node.getChild(0));
	const rightExpression = generateExpression(node.getChild(2));

	// Two sided operators
	switch(operatorSymbol.type) {
		case YarnParser.OPERATOR_LOGICAL_LESS_THAN_EQUALS:
			return new ExpressionTypes.LessThanOrEqualOperator(leftExpression, rightExpression, location);
		case YarnParser.OPERATOR_LOGICAL_GREATER_THAN_EQUALS:
			return new ExpressionTypes.GreaterThanOrEqualOperator(leftExpression, rightExpression, location);
		case YarnParser.OPERATOR_LOGICAL_EQUALS:
			return new ExpressionTypes.EqualityOperator(leftExpression, rightExpression, location);
    case YarnParser.OPERATOR_LOGICAL_LESS:
			return new ExpressionTypes.LessThanOperator(leftExpression, rightExpression, location);
    case YarnParser.OPERATOR_LOGICAL_GREATER:
			return new ExpressionTypes.GreaterThanOperator(leftExpression, rightExpression, location);
    case YarnParser.OPERATOR_LOGICAL_NOT_EQUALS:
			return new ExpressionTypes.NotEqualityOperator(leftExpression, rightExpression, location);
    case YarnParser.OPERATOR_LOGICAL_AND:
			return new ExpressionTypes.AndOperator(leftExpression, rightExpression, location);
    case YarnParser.OPERATOR_LOGICAL_OR:
			return new ExpressionTypes.OrOperator(leftExpression, rightExpression, location);
    case YarnParser.OPERATOR_LOGICAL_XOR:
			return new ExpressionTypes.XorOperator(leftExpression, rightExpression, location);
    case YarnParser.OPERATOR_MATHS_ADDITION:
      return new ExpressionTypes.AddOperator(leftExpression, rightExpression, location);
    case YarnParser.OPERATOR_MATHS_SUBTRACTION:
      return new ExpressionTypes.SubtractOperator(leftExpression, rightExpression, location);
    case YarnParser.OPERATOR_MATHS_MULTIPLICATION:
      return new ExpressionTypes.MultiplyOperator(leftExpression, rightExpression, location);
    case YarnParser.OPERATOR_MATHS_DIVISION:
      return new ExpressionTypes.DivideOperator(leftExpression, rightExpression, location);
    case YarnParser.OPERATOR_MATHS_MODULUS:
      return new ExpressionTypes.ModulusOperator(leftExpression, rightExpression, location);
	}

	// assignment operators
	switch(operatorSymbol) {
		case YarnParser.OPERATOR_MATHS_ADDITION_EQUALS:
			return types.Operators.AddAssign;
		case YarnParser.OPERATOR_MATHS_SUBTRACTION_EQUALS:
			return types.Operators.SubtractAssign;
		case YarnParser.OPERATOR_MATHS_MULTIPLICATION_EQUALS:
			return types.Operators.MultiplyAssign;
		case YarnParser.OPERATOR_MATHS_MODULUS_EQUALS:
			return types.Operators.ModulusAssign;
		case YarnParser.OPERATOR_MATHS_DIVISION_EQUALS:
			return types.Operators.DivideAssign;
	}

	// one sided operators
	switch(operatorSymbol) {
		case YarnParser.OPERATOR_LOGICAL_NOT:
			return new ExpressionTypes.NotOperator(rightExpression, location);
	}

	console.error("uhoh!");
	return null;
}

function generateNumberValue(expressionNode) {
	const location = Location.FromANTLRSymbol(expressionNode.symbol);
	const numberAsString = expressionNode.getText();
	if (numberAsString.indexOf('.') === -1) {
		const value = parseInt(numberAsString, 10);
		return new ExpressionTypes.IntegerValue(value, location);
	} else {
		const value = parseFloat(numberAsString);
	  return new ExpressionTypes.FloatValue(value, location);
	}
}

function generateStringExpression(expressionNode) {
	const location = Location.FromANTLRNode(expressionNode);
	let value = expressionNode.getText();
	if (value.startsWith('"')) value = value.substr(1);
	if (value.endsWith('"')) value = value.substr(0, value.length - 1);
	return new ExpressionTypes.StringValue(value, location);
}

function generateFunctionExpression(expressionNode) {
	const location = Location.FromANTLRNode(expressionNode);
	const name = expressionNode.getChild(0).getText();
	const args = [];
	for(let i = 1; i < expressionNode.children.length; i++) {
	  const subNode = expressionNode.getChild(i);
	  if (subNode.getChildCount() == 0) continue;
	  args.push(generateExpression(subNode));
	}
	return new ExpressionTypes(name, args, location);
}

function generateValueExpression(expressionNode) {
	if (expressionNode instanceof YarnParser.VariableContext) {
		const location = Location.FromANTLRNode(expressionNode);
		const name = expressionNode.getChild(0).getText().trim().substr(1);
	  return new ExpressionTypes.Variable(name, location);
	} else if (expressionNode instanceof YarnParser.ValueStringContext) {
	  return generateStringExpression(expressionNode.getChild(0));
	} else if (expressionNode instanceof YarnParser.ValueFuncContext) {
	  return generateFunctionExpression(expressionNode.getChild(0));
	} else if (expressionNode instanceof YarnParser.ExpValueContext) {
	  return generateValueExpression(expressionNode.getChild(0));
	} else if (expressionNode instanceof YarnParser.ValueVarContext) {
	  return generateValueExpression(expressionNode.getChild(0));
	} else if (expressionNode instanceof YarnParser.ValueNumberContext) {
	  return generateNumberValue(expressionNode.getChild(0));
	} else if (expressionNode instanceof YarnParser.ValueFalseContext) {
		const location = Location.FromANTLRNode(expressionNode);
		return new ExpressionTypes.BooleanValue(false, location);
	} else if (expressionNode instanceof YarnParser.ValueTrueContext) {
		const location = Location.FromANTLRNode(expressionNode);
		return new ExpressionTypes.BooleanValue(true, location);
	} else if (expressionNode instanceof YarnParser.ValueNullContext) {
		const location = Location.FromANTLRNode(expressionNode);
	  return new ExpressionTypes.NullValue(location);
	} else {
	  console.log(expressionNode);
	}
}

function generateParensExpression(expressionNode) {
	return generateExpression(expressionNode.getChild(1));
}

function generateExpression(expressionNode, variable) {
	if (variable !== undefined) {
		const location = Location.FromANTLRNode(expressionNode);
		const expression = generateExpression(expressionNode)
		return new ExpressionTypes.AssignmentOperator(variable, expression, location);
	}
	if (expressionNode.children.length === 1) {
	  return generateValueExpression(expressionNode);
	} else if (expressionNode.children.length === 3) {
	  if (expressionNode.getChild(1).getChildCount() == 0) {
			return generateOperatorExpression(expressionNode);
		} else if (expressionNode instanceof YarnParser.ExpParensContext) {
			return generateParensExpression(expressionNode);
		} else {
			console.error("UNHANDLED EXPRESSION!");
		}
	}
}

module.exports = generateExpression;