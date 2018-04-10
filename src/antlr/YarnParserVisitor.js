// Generated from YarnParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by YarnParser.

function YarnParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

YarnParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
YarnParserVisitor.prototype.constructor = YarnParserVisitor;

// Visit a parse tree produced by YarnParser#dialogue.
YarnParserVisitor.prototype.visitDialogue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#node.
YarnParserVisitor.prototype.visitNode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#header.
YarnParserVisitor.prototype.visitHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#body.
YarnParserVisitor.prototype.visitBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#line.
YarnParserVisitor.prototype.visitLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#blank.
YarnParserVisitor.prototype.visitBlank = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#if.
YarnParserVisitor.prototype.visitIf = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#option.
YarnParserVisitor.prototype.visitOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#optionIf.
YarnParserVisitor.prototype.visitOptionIf = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#shortcut.
YarnParserVisitor.prototype.visitShortcut = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#shortcut_statement.
YarnParserVisitor.prototype.visitShortcut_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#option_group.
YarnParserVisitor.prototype.visitOption_group = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#option_link.
YarnParserVisitor.prototype.visitOption_link = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#option_with_text.
YarnParserVisitor.prototype.visitOption_with_text = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#if_statement.
YarnParserVisitor.prototype.visitIf_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#if_clause.
YarnParserVisitor.prototype.visitIf_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#else_if_clause.
YarnParserVisitor.prototype.visitElse_if_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#else_clause.
YarnParserVisitor.prototype.visitElse_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#of_statement.
YarnParserVisitor.prototype.visitOf_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#of_clause.
YarnParserVisitor.prototype.visitOf_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#else_of_clause.
YarnParserVisitor.prototype.visitElse_of_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#oelse_clause.
YarnParserVisitor.prototype.visitOelse_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#endif_clause.
YarnParserVisitor.prototype.visitEndif_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#set_command.
YarnParserVisitor.prototype.visitSet_command = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#set.
YarnParserVisitor.prototype.visitSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#command.
YarnParserVisitor.prototype.visitCommand = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#function_command.
YarnParserVisitor.prototype.visitFunction_command = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#text.
YarnParserVisitor.prototype.visitText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#keyword.
YarnParserVisitor.prototype.visitKeyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#valueExpression.
YarnParserVisitor.prototype.visitValueExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#negativeExpression.
YarnParserVisitor.prototype.visitNegativeExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#notExpression.
YarnParserVisitor.prototype.visitNotExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#opExpression.
YarnParserVisitor.prototype.visitOpExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#functionExpression.
YarnParserVisitor.prototype.visitFunctionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#groupedExpression.
YarnParserVisitor.prototype.visitGroupedExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#operand.
YarnParserVisitor.prototype.visitOperand = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#number.
YarnParserVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#string.
YarnParserVisitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#variable.
YarnParserVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#trueConstant.
YarnParserVisitor.prototype.visitTrueConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#falseConstant.
YarnParserVisitor.prototype.visitFalseConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by YarnParser#nullConstant.
YarnParserVisitor.prototype.visitNullConstant = function(ctx) {
  return this.visitChildren(ctx);
};



exports.YarnParserVisitor = YarnParserVisitor;