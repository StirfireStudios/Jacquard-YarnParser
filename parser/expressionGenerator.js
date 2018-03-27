'use strict';

const antlr4 = require('antlr4')

const types = require('../expressionTypes');
const YarnParser = require('../antlr/YarnParser').YarnParser;

function operatorForNode(node) {
	switch(node.symbol.type) {
		case YarnParser.OPERATOR_LOGICAL_LESS_THAN_EQUALS:
			return types.Operators.LessThanOrEqual;
		case YarnParser.OPERATOR_LOGICAL_GREATER_THAN_EQUALS:
			return types.Operators.GreaterThanOrEqual;
		case YarnParser.OPERATOR_LOGICAL_EQUALS:
			return types.Operators.Equal;
    case YarnParser.OPERATOR_LOGICAL_LESS:
			return types.Operators.LessThan;
    case YarnParser.OPERATOR_LOGICAL_GREATER:
			return types.Operators.GreaterThan;
    case YarnParser.OPERATOR_LOGICAL_NOT_EQUALS:
      return types.Operators.NotEqual;
    case YarnParser.OPERATOR_LOGICAL_AND:
      return types.Operators.And;
    case YarnParser.OPERATOR_LOGICAL_OR:
      return types.Operators.Or;
    case YarnParser.OPERATOR_LOGICAL_XOR:
      return types.Operators.Xor;
    case YarnParser.OPERATOR_LOGICAL_NOT:
      return types.Operators.Not;
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
    case YarnParser.OPERATOR_MATHS_ADDITION:
      return types.Operators.Add;
    case YarnParser.OPERATOR_MATHS_SUBTRACTION:
      return types.Operators.Subtract;
    case YarnParser.OPERATOR_MATHS_MULTIPLICATION:
      return types.Operators.GreaterThan;
    case YarnParser.OPERATOR_MATHS_DIVISION:
      return types.Operators.Divide;
    case YarnParser.OPERATOR_MATHS_MODULUS:
      return types.Operators.Modulus;
  }
  return types.Operators.Unknown;
}

function generateAssignExpression(expressionNode, variable) {
  return {
    type: types.Operation,
    operator: types.Operators.Assign,
    variable: variable,
    expression: generateExpression(expressionNode)
  };
}

function generateNumberValue(expressionNode) {
  const expression = {type: types.Static}
  const numberAsString = expressionNode.getText();
  if (numberAsString.indexOf('.') === -1) {
    expression.valueType = types.StaticTypes.Integer;
    expression.value = parseInt(numberAsString, 10);
  } else {
    expression.valueType = types.StaticTypes.Float;
    expression.value = parseFloat(numberAsString);
  }

  return expression;
}

function generateFunctionExpression(expressionNode) {
  const expression = {type: types.Function}
  expression.name = expressionNode.getChild(0).getText();
  expression.arguments = [];
  for(let i = 1; i < expressionNode.children.length; i++) {
    const subNode = expressionNode.getChild(i);
    if (subNode.getChildCount() == 0) continue;
    expression.arguments.push(generateExpression(subNode));
  }
  return expression;
}


function generateValueExpression(expressionNode) {
  if (expressionNode instanceof YarnParser.VariableContext) {
    return { type: types.Variable, variable: expressionNode.getChild(0).getText().trim() }
  } else if (expressionNode instanceof YarnParser.ValueFuncContext) {
    return generateFunctionExpression(expressionNode.getChild(0));
  } else if (expressionNode instanceof YarnParser.ExpValueContext) {
    return generateValueExpression(expressionNode.getChild(0));
  } else if (expressionNode instanceof YarnParser.ValueVarContext) {
    return generateValueExpression(expressionNode.getChild(0));
  } else if (expressionNode instanceof YarnParser.ValueNumberContext) {
    return generateNumberValue(expressionNode.getChild(0));
  } else if (expressionNode instanceof YarnParser.ValueFalseContext) {
    return {type: types.Static, valueType: types.StaticTypes.Boolean, value: false};
  } else if (expressionNode instanceof YarnParser.ValueTrueContext) {
    return {type: types.Static, valueType: types.StaticTypes.Boolean, value: true};
  } else if (expressionNode instanceof YarnParser.ValueNullContext) {
    return {type: types.Static, valueType: types.StaticTypes.Null};
  } else {
    console.log(expressionNode);
  }
}

function generateParensExpression(expressionNode) {
  return generateExpression(expressionNode.getChild(1));
}

function generateOperatorExpression(expressionNode) {
  return {
    type: types.Operation,
    operator: operatorForNode(expressionNode.getChild(1)),
    expressions: [
      generateExpression(expressionNode.getChild(0)), 
      generateExpression(expressionNode.getChild(2))
    ]
  }
}

function generateExpression(expressionNode, variable) {
  if (variable !== undefined) return generateAssignExpression(expressionNode, variable);
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