// Generated from YarnParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by YarnParser.
function YarnParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

YarnParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
YarnParserListener.prototype.constructor = YarnParserListener;

// Enter a parse tree produced by YarnParser#dialogue.
YarnParserListener.prototype.enterDialogue = function(ctx) {
};

// Exit a parse tree produced by YarnParser#dialogue.
YarnParserListener.prototype.exitDialogue = function(ctx) {
};


// Enter a parse tree produced by YarnParser#node.
YarnParserListener.prototype.enterNode = function(ctx) {
};

// Exit a parse tree produced by YarnParser#node.
YarnParserListener.prototype.exitNode = function(ctx) {
};


// Enter a parse tree produced by YarnParser#header.
YarnParserListener.prototype.enterHeader = function(ctx) {
};

// Exit a parse tree produced by YarnParser#header.
YarnParserListener.prototype.exitHeader = function(ctx) {
};


// Enter a parse tree produced by YarnParser#body.
YarnParserListener.prototype.enterBody = function(ctx) {
};

// Exit a parse tree produced by YarnParser#body.
YarnParserListener.prototype.exitBody = function(ctx) {
};


// Enter a parse tree produced by YarnParser#if.
YarnParserListener.prototype.enterIf = function(ctx) {
};

// Exit a parse tree produced by YarnParser#if.
YarnParserListener.prototype.exitIf = function(ctx) {
};


// Enter a parse tree produced by YarnParser#blank.
YarnParserListener.prototype.enterBlank = function(ctx) {
};

// Exit a parse tree produced by YarnParser#blank.
YarnParserListener.prototype.exitBlank = function(ctx) {
};


// Enter a parse tree produced by YarnParser#lineGroup.
YarnParserListener.prototype.enterLineGroup = function(ctx) {
};

// Exit a parse tree produced by YarnParser#lineGroup.
YarnParserListener.prototype.exitLineGroup = function(ctx) {
};


// Enter a parse tree produced by YarnParser#hashtag.
YarnParserListener.prototype.enterHashtag = function(ctx) {
};

// Exit a parse tree produced by YarnParser#hashtag.
YarnParserListener.prototype.exitHashtag = function(ctx) {
};


// Enter a parse tree produced by YarnParser#endOfLine.
YarnParserListener.prototype.enterEndOfLine = function(ctx) {
};

// Exit a parse tree produced by YarnParser#endOfLine.
YarnParserListener.prototype.exitEndOfLine = function(ctx) {
};


// Enter a parse tree produced by YarnParser#option.
YarnParserListener.prototype.enterOption = function(ctx) {
};

// Exit a parse tree produced by YarnParser#option.
YarnParserListener.prototype.exitOption = function(ctx) {
};


// Enter a parse tree produced by YarnParser#optionIf.
YarnParserListener.prototype.enterOptionIf = function(ctx) {
};

// Exit a parse tree produced by YarnParser#optionIf.
YarnParserListener.prototype.exitOptionIf = function(ctx) {
};


// Enter a parse tree produced by YarnParser#shortcut.
YarnParserListener.prototype.enterShortcut = function(ctx) {
};

// Exit a parse tree produced by YarnParser#shortcut.
YarnParserListener.prototype.exitShortcut = function(ctx) {
};


// Enter a parse tree produced by YarnParser#eval_statement.
YarnParserListener.prototype.enterEval_statement = function(ctx) {
};

// Exit a parse tree produced by YarnParser#eval_statement.
YarnParserListener.prototype.exitEval_statement = function(ctx) {
};


// Enter a parse tree produced by YarnParser#shortcut_statement.
YarnParserListener.prototype.enterShortcut_statement = function(ctx) {
};

// Exit a parse tree produced by YarnParser#shortcut_statement.
YarnParserListener.prototype.exitShortcut_statement = function(ctx) {
};


// Enter a parse tree produced by YarnParser#option_group.
YarnParserListener.prototype.enterOption_group = function(ctx) {
};

// Exit a parse tree produced by YarnParser#option_group.
YarnParserListener.prototype.exitOption_group = function(ctx) {
};


// Enter a parse tree produced by YarnParser#option_link.
YarnParserListener.prototype.enterOption_link = function(ctx) {
};

// Exit a parse tree produced by YarnParser#option_link.
YarnParserListener.prototype.exitOption_link = function(ctx) {
};


// Enter a parse tree produced by YarnParser#option_with_text.
YarnParserListener.prototype.enterOption_with_text = function(ctx) {
};

// Exit a parse tree produced by YarnParser#option_with_text.
YarnParserListener.prototype.exitOption_with_text = function(ctx) {
};


// Enter a parse tree produced by YarnParser#if_statement.
YarnParserListener.prototype.enterIf_statement = function(ctx) {
};

// Exit a parse tree produced by YarnParser#if_statement.
YarnParserListener.prototype.exitIf_statement = function(ctx) {
};


// Enter a parse tree produced by YarnParser#if_clause.
YarnParserListener.prototype.enterIf_clause = function(ctx) {
};

// Exit a parse tree produced by YarnParser#if_clause.
YarnParserListener.prototype.exitIf_clause = function(ctx) {
};


// Enter a parse tree produced by YarnParser#else_if_clause.
YarnParserListener.prototype.enterElse_if_clause = function(ctx) {
};

// Exit a parse tree produced by YarnParser#else_if_clause.
YarnParserListener.prototype.exitElse_if_clause = function(ctx) {
};


// Enter a parse tree produced by YarnParser#else_clause.
YarnParserListener.prototype.enterElse_clause = function(ctx) {
};

// Exit a parse tree produced by YarnParser#else_clause.
YarnParserListener.prototype.exitElse_clause = function(ctx) {
};


// Enter a parse tree produced by YarnParser#of_statement.
YarnParserListener.prototype.enterOf_statement = function(ctx) {
};

// Exit a parse tree produced by YarnParser#of_statement.
YarnParserListener.prototype.exitOf_statement = function(ctx) {
};


// Enter a parse tree produced by YarnParser#of_clause.
YarnParserListener.prototype.enterOf_clause = function(ctx) {
};

// Exit a parse tree produced by YarnParser#of_clause.
YarnParserListener.prototype.exitOf_clause = function(ctx) {
};


// Enter a parse tree produced by YarnParser#else_of_clause.
YarnParserListener.prototype.enterElse_of_clause = function(ctx) {
};

// Exit a parse tree produced by YarnParser#else_of_clause.
YarnParserListener.prototype.exitElse_of_clause = function(ctx) {
};


// Enter a parse tree produced by YarnParser#oelse_clause.
YarnParserListener.prototype.enterOelse_clause = function(ctx) {
};

// Exit a parse tree produced by YarnParser#oelse_clause.
YarnParserListener.prototype.exitOelse_clause = function(ctx) {
};


// Enter a parse tree produced by YarnParser#endif_clause.
YarnParserListener.prototype.enterEndif_clause = function(ctx) {
};

// Exit a parse tree produced by YarnParser#endif_clause.
YarnParserListener.prototype.exitEndif_clause = function(ctx) {
};


// Enter a parse tree produced by YarnParser#set_command.
YarnParserListener.prototype.enterSet_command = function(ctx) {
};

// Exit a parse tree produced by YarnParser#set_command.
YarnParserListener.prototype.exitSet_command = function(ctx) {
};


// Enter a parse tree produced by YarnParser#function_command.
YarnParserListener.prototype.enterFunction_command = function(ctx) {
};

// Exit a parse tree produced by YarnParser#function_command.
YarnParserListener.prototype.exitFunction_command = function(ctx) {
};


// Enter a parse tree produced by YarnParser#set.
YarnParserListener.prototype.enterSet = function(ctx) {
};

// Exit a parse tree produced by YarnParser#set.
YarnParserListener.prototype.exitSet = function(ctx) {
};


// Enter a parse tree produced by YarnParser#func.
YarnParserListener.prototype.enterFunc = function(ctx) {
};

// Exit a parse tree produced by YarnParser#func.
YarnParserListener.prototype.exitFunc = function(ctx) {
};


// Enter a parse tree produced by YarnParser#command.
YarnParserListener.prototype.enterCommand = function(ctx) {
};

// Exit a parse tree produced by YarnParser#command.
YarnParserListener.prototype.exitCommand = function(ctx) {
};


// Enter a parse tree produced by YarnParser#function_call.
YarnParserListener.prototype.enterFunction_call = function(ctx) {
};

// Exit a parse tree produced by YarnParser#function_call.
YarnParserListener.prototype.exitFunction_call = function(ctx) {
};


// Enter a parse tree produced by YarnParser#text.
YarnParserListener.prototype.enterText = function(ctx) {
};

// Exit a parse tree produced by YarnParser#text.
YarnParserListener.prototype.exitText = function(ctx) {
};


// Enter a parse tree produced by YarnParser#set_operands.
YarnParserListener.prototype.enterSet_operands = function(ctx) {
};

// Exit a parse tree produced by YarnParser#set_operands.
YarnParserListener.prototype.exitSet_operands = function(ctx) {
};


// Enter a parse tree produced by YarnParser#keyword.
YarnParserListener.prototype.enterKeyword = function(ctx) {
};

// Exit a parse tree produced by YarnParser#keyword.
YarnParserListener.prototype.exitKeyword = function(ctx) {
};


// Enter a parse tree produced by YarnParser#valueExpression.
YarnParserListener.prototype.enterValueExpression = function(ctx) {
};

// Exit a parse tree produced by YarnParser#valueExpression.
YarnParserListener.prototype.exitValueExpression = function(ctx) {
};


// Enter a parse tree produced by YarnParser#negativeExpression.
YarnParserListener.prototype.enterNegativeExpression = function(ctx) {
};

// Exit a parse tree produced by YarnParser#negativeExpression.
YarnParserListener.prototype.exitNegativeExpression = function(ctx) {
};


// Enter a parse tree produced by YarnParser#evaluatedExpression.
YarnParserListener.prototype.enterEvaluatedExpression = function(ctx) {
};

// Exit a parse tree produced by YarnParser#evaluatedExpression.
YarnParserListener.prototype.exitEvaluatedExpression = function(ctx) {
};


// Enter a parse tree produced by YarnParser#assignmentExpression.
YarnParserListener.prototype.enterAssignmentExpression = function(ctx) {
};

// Exit a parse tree produced by YarnParser#assignmentExpression.
YarnParserListener.prototype.exitAssignmentExpression = function(ctx) {
};


// Enter a parse tree produced by YarnParser#notExpression.
YarnParserListener.prototype.enterNotExpression = function(ctx) {
};

// Exit a parse tree produced by YarnParser#notExpression.
YarnParserListener.prototype.exitNotExpression = function(ctx) {
};


// Enter a parse tree produced by YarnParser#leftRightExpression.
YarnParserListener.prototype.enterLeftRightExpression = function(ctx) {
};

// Exit a parse tree produced by YarnParser#leftRightExpression.
YarnParserListener.prototype.exitLeftRightExpression = function(ctx) {
};


// Enter a parse tree produced by YarnParser#functionExpression.
YarnParserListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by YarnParser#functionExpression.
YarnParserListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by YarnParser#groupedExpression.
YarnParserListener.prototype.enterGroupedExpression = function(ctx) {
};

// Exit a parse tree produced by YarnParser#groupedExpression.
YarnParserListener.prototype.exitGroupedExpression = function(ctx) {
};


// Enter a parse tree produced by YarnParser#operand.
YarnParserListener.prototype.enterOperand = function(ctx) {
};

// Exit a parse tree produced by YarnParser#operand.
YarnParserListener.prototype.exitOperand = function(ctx) {
};


// Enter a parse tree produced by YarnParser#assignmentOperand.
YarnParserListener.prototype.enterAssignmentOperand = function(ctx) {
};

// Exit a parse tree produced by YarnParser#assignmentOperand.
YarnParserListener.prototype.exitAssignmentOperand = function(ctx) {
};


// Enter a parse tree produced by YarnParser#number.
YarnParserListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by YarnParser#number.
YarnParserListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by YarnParser#string.
YarnParserListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by YarnParser#string.
YarnParserListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by YarnParser#variable.
YarnParserListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by YarnParser#variable.
YarnParserListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by YarnParser#trueConstant.
YarnParserListener.prototype.enterTrueConstant = function(ctx) {
};

// Exit a parse tree produced by YarnParser#trueConstant.
YarnParserListener.prototype.exitTrueConstant = function(ctx) {
};


// Enter a parse tree produced by YarnParser#falseConstant.
YarnParserListener.prototype.enterFalseConstant = function(ctx) {
};

// Exit a parse tree produced by YarnParser#falseConstant.
YarnParserListener.prototype.exitFalseConstant = function(ctx) {
};


// Enter a parse tree produced by YarnParser#nullConstant.
YarnParserListener.prototype.enterNullConstant = function(ctx) {
};

// Exit a parse tree produced by YarnParser#nullConstant.
YarnParserListener.prototype.exitNullConstant = function(ctx) {
};



exports.YarnParserListener = YarnParserListener;