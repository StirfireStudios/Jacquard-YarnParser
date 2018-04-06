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


// Enter a parse tree produced by YarnParser#header_title.
YarnParserListener.prototype.enterHeader_title = function(ctx) {
};

// Exit a parse tree produced by YarnParser#header_title.
YarnParserListener.prototype.exitHeader_title = function(ctx) {
};


// Enter a parse tree produced by YarnParser#header_tag_name.
YarnParserListener.prototype.enterHeader_tag_name = function(ctx) {
};

// Exit a parse tree produced by YarnParser#header_tag_name.
YarnParserListener.prototype.exitHeader_tag_name = function(ctx) {
};


// Enter a parse tree produced by YarnParser#header_tag.
YarnParserListener.prototype.enterHeader_tag = function(ctx) {
};

// Exit a parse tree produced by YarnParser#header_tag.
YarnParserListener.prototype.exitHeader_tag = function(ctx) {
};


// Enter a parse tree produced by YarnParser#header_line.
YarnParserListener.prototype.enterHeader_line = function(ctx) {
};

// Exit a parse tree produced by YarnParser#header_line.
YarnParserListener.prototype.exitHeader_line = function(ctx) {
};


// Enter a parse tree produced by YarnParser#body.
YarnParserListener.prototype.enterBody = function(ctx) {
};

// Exit a parse tree produced by YarnParser#body.
YarnParserListener.prototype.exitBody = function(ctx) {
};


// Enter a parse tree produced by YarnParser#statement.
YarnParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by YarnParser#statement.
YarnParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by YarnParser#shortcut.
YarnParserListener.prototype.enterShortcut = function(ctx) {
};

// Exit a parse tree produced by YarnParser#shortcut.
YarnParserListener.prototype.exitShortcut = function(ctx) {
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


// Enter a parse tree produced by YarnParser#set_statement.
YarnParserListener.prototype.enterSet_statement = function(ctx) {
};

// Exit a parse tree produced by YarnParser#set_statement.
YarnParserListener.prototype.exitSet_statement = function(ctx) {
};


// Enter a parse tree produced by YarnParser#option_statement.
YarnParserListener.prototype.enterOption_statement = function(ctx) {
};

// Exit a parse tree produced by YarnParser#option_statement.
YarnParserListener.prototype.exitOption_statement = function(ctx) {
};


// Enter a parse tree produced by YarnParser#func_call.
YarnParserListener.prototype.enterFunc_call = function(ctx) {
};

// Exit a parse tree produced by YarnParser#func_call.
YarnParserListener.prototype.exitFunc_call = function(ctx) {
};


// Enter a parse tree produced by YarnParser#func_call_statement.
YarnParserListener.prototype.enterFunc_call_statement = function(ctx) {
};

// Exit a parse tree produced by YarnParser#func_call_statement.
YarnParserListener.prototype.exitFunc_call_statement = function(ctx) {
};


// Enter a parse tree produced by YarnParser#action_statement.
YarnParserListener.prototype.enterAction_statement = function(ctx) {
};

// Exit a parse tree produced by YarnParser#action_statement.
YarnParserListener.prototype.exitAction_statement = function(ctx) {
};


// Enter a parse tree produced by YarnParser#text.
YarnParserListener.prototype.enterText = function(ctx) {
};

// Exit a parse tree produced by YarnParser#text.
YarnParserListener.prototype.exitText = function(ctx) {
};


// Enter a parse tree produced by YarnParser#line_statement.
YarnParserListener.prototype.enterLine_statement = function(ctx) {
};

// Exit a parse tree produced by YarnParser#line_statement.
YarnParserListener.prototype.exitLine_statement = function(ctx) {
};


// Enter a parse tree produced by YarnParser#blank_statement.
YarnParserListener.prototype.enterBlank_statement = function(ctx) {
};

// Exit a parse tree produced by YarnParser#blank_statement.
YarnParserListener.prototype.exitBlank_statement = function(ctx) {
};


// Enter a parse tree produced by YarnParser#hashtag_block.
YarnParserListener.prototype.enterHashtag_block = function(ctx) {
};

// Exit a parse tree produced by YarnParser#hashtag_block.
YarnParserListener.prototype.exitHashtag_block = function(ctx) {
};


// Enter a parse tree produced by YarnParser#hashtag.
YarnParserListener.prototype.enterHashtag = function(ctx) {
};

// Exit a parse tree produced by YarnParser#hashtag.
YarnParserListener.prototype.exitHashtag = function(ctx) {
};


// Enter a parse tree produced by YarnParser#expParens.
YarnParserListener.prototype.enterExpParens = function(ctx) {
};

// Exit a parse tree produced by YarnParser#expParens.
YarnParserListener.prototype.exitExpParens = function(ctx) {
};


// Enter a parse tree produced by YarnParser#expMultDivMod.
YarnParserListener.prototype.enterExpMultDivMod = function(ctx) {
};

// Exit a parse tree produced by YarnParser#expMultDivMod.
YarnParserListener.prototype.exitExpMultDivMod = function(ctx) {
};


// Enter a parse tree produced by YarnParser#expMultDivModEquals.
YarnParserListener.prototype.enterExpMultDivModEquals = function(ctx) {
};

// Exit a parse tree produced by YarnParser#expMultDivModEquals.
YarnParserListener.prototype.exitExpMultDivModEquals = function(ctx) {
};


// Enter a parse tree produced by YarnParser#expComparison.
YarnParserListener.prototype.enterExpComparison = function(ctx) {
};

// Exit a parse tree produced by YarnParser#expComparison.
YarnParserListener.prototype.exitExpComparison = function(ctx) {
};


// Enter a parse tree produced by YarnParser#expNegative.
YarnParserListener.prototype.enterExpNegative = function(ctx) {
};

// Exit a parse tree produced by YarnParser#expNegative.
YarnParserListener.prototype.exitExpNegative = function(ctx) {
};


// Enter a parse tree produced by YarnParser#expAndOrXor.
YarnParserListener.prototype.enterExpAndOrXor = function(ctx) {
};

// Exit a parse tree produced by YarnParser#expAndOrXor.
YarnParserListener.prototype.exitExpAndOrXor = function(ctx) {
};


// Enter a parse tree produced by YarnParser#expPlusMinusEquals.
YarnParserListener.prototype.enterExpPlusMinusEquals = function(ctx) {
};

// Exit a parse tree produced by YarnParser#expPlusMinusEquals.
YarnParserListener.prototype.exitExpPlusMinusEquals = function(ctx) {
};


// Enter a parse tree produced by YarnParser#expAddSub.
YarnParserListener.prototype.enterExpAddSub = function(ctx) {
};

// Exit a parse tree produced by YarnParser#expAddSub.
YarnParserListener.prototype.exitExpAddSub = function(ctx) {
};


// Enter a parse tree produced by YarnParser#expNot.
YarnParserListener.prototype.enterExpNot = function(ctx) {
};

// Exit a parse tree produced by YarnParser#expNot.
YarnParserListener.prototype.exitExpNot = function(ctx) {
};


// Enter a parse tree produced by YarnParser#expValue.
YarnParserListener.prototype.enterExpValue = function(ctx) {
};

// Exit a parse tree produced by YarnParser#expValue.
YarnParserListener.prototype.exitExpValue = function(ctx) {
};


// Enter a parse tree produced by YarnParser#expEquality.
YarnParserListener.prototype.enterExpEquality = function(ctx) {
};

// Exit a parse tree produced by YarnParser#expEquality.
YarnParserListener.prototype.exitExpEquality = function(ctx) {
};


// Enter a parse tree produced by YarnParser#valueNumber.
YarnParserListener.prototype.enterValueNumber = function(ctx) {
};

// Exit a parse tree produced by YarnParser#valueNumber.
YarnParserListener.prototype.exitValueNumber = function(ctx) {
};


// Enter a parse tree produced by YarnParser#valueTrue.
YarnParserListener.prototype.enterValueTrue = function(ctx) {
};

// Exit a parse tree produced by YarnParser#valueTrue.
YarnParserListener.prototype.exitValueTrue = function(ctx) {
};


// Enter a parse tree produced by YarnParser#valueFalse.
YarnParserListener.prototype.enterValueFalse = function(ctx) {
};

// Exit a parse tree produced by YarnParser#valueFalse.
YarnParserListener.prototype.exitValueFalse = function(ctx) {
};


// Enter a parse tree produced by YarnParser#valueVar.
YarnParserListener.prototype.enterValueVar = function(ctx) {
};

// Exit a parse tree produced by YarnParser#valueVar.
YarnParserListener.prototype.exitValueVar = function(ctx) {
};


// Enter a parse tree produced by YarnParser#valueString.
YarnParserListener.prototype.enterValueString = function(ctx) {
};

// Exit a parse tree produced by YarnParser#valueString.
YarnParserListener.prototype.exitValueString = function(ctx) {
};


// Enter a parse tree produced by YarnParser#valueFunc.
YarnParserListener.prototype.enterValueFunc = function(ctx) {
};

// Exit a parse tree produced by YarnParser#valueFunc.
YarnParserListener.prototype.exitValueFunc = function(ctx) {
};


// Enter a parse tree produced by YarnParser#valueNull.
YarnParserListener.prototype.enterValueNull = function(ctx) {
};

// Exit a parse tree produced by YarnParser#valueNull.
YarnParserListener.prototype.exitValueNull = function(ctx) {
};


// Enter a parse tree produced by YarnParser#variable.
YarnParserListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by YarnParser#variable.
YarnParserListener.prototype.exitVariable = function(ctx) {
};



exports.YarnParserListener = YarnParserListener;