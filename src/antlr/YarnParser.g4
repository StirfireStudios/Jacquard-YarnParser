parser grammar YarnParser;

options { tokenVocab=YarnLexer; }

dialogue : node* EOF;

node : header+ body ;

header : headerName=TEXT SEPARATOR headerValue=TEXT? ;

body : BODY_START (statement | option_group)* BODY_END ;

statement
    : line_statement # line
    | blank_statement # blank
    | if_statement # if
    ;

ostatement
    : option_with_text # option
    | shortcut_statement # option
    | of_statement # optionIf
    ;

option_group : (ostatement+ | option_link) hashtag=HASHTAG*;
option_link : OPTION_START optionNodeName=TEXT OPTION_END ;
option_with_text : OPTION_START optionText=TEXT OPTION_SEPARATOR optionNodeName=TEXT OPTION_END ;

if_statement : if_clause statement* else_if_clause* else_clause? endif_clause hashtag=HASHTAG*;
if_clause : COMMAND_START KEYWORD_IF predicate=expression COMMAND_END statements=statement*;
else_if_clause : COMMAND_START KEYWORD_ELSE_IF predicate=expression COMMAND_END statements=statement* ;
else_clause : COMMAND_START KEYWORD_ELSE COMMAND_END statements=statement*;

of_statement : of_clause statement* else_of_clause* oelse_clause? endif_clause ;
of_clause : COMMAND_START KEYWORD_IF predicate=expression COMMAND_END statements=ostatement*;
else_of_clause : COMMAND_START KEYWORD_ELSE_IF predicate=expression COMMAND_END statements=ostatement* ;
oelse_clause : COMMAND_START KEYWORD_ELSE COMMAND_END statements=ostatement*;

endif_clause : COMMAND_START KEYWORD_ENDIF COMMAND_END ;

shortcut_statement : SHORTCUT_START shortcut_option+ SHORTCUT_END ;
shortcut_option : (TEXT | command_statement) ostatement* ;

set_command : COMMAND_START KEYWORD_SET? VARIABLE KEYWORD_TO expression COMMAND_END ;

command_statement
    : set_command # set
    | COMMAND_START (function_command | TEXT | expression)+ COMMAND_END # command
    ;

function_command : func=TEXT LBRACKET (args+=expression (COMMA args+=expression)*)? RBRACKET ;

line_statement : ((TEXT HASHTAG*) | command_statement)+ ;

blank_statement : BODY_BLANKLINE ;

expression
    : value # valueExpression
    | LBRACKET expression RBRACKET # groupedExpression
    | MINUS expression # negativeExpression
    | NOT expression # notExpression
    | left=expression operand right=expression #opExpression
    | function_command # function
    ;

operand
    : PLUS
    | MINUS
    | MULTIPLY
    | DIVIDE
    | MODULO
    | EQ
    | GT
    | LT
    | NEQ
    | GTE
    | LTE
    | AND
    | OR
    | XOR
    | ADD_EQUALS
    | MINUS_EQUALS
    | MULTIPLY_EQUALS
    | DIVIDE_EQUALS
    | MODULO_EQUALS
    ;

value
    : NUMBER # number
    | STRING # string
    | VARIABLE # variable
    | KEYWORD_TRUE # trueConstant
    | KEYWORD_FALSE # falseConstant
    | KEYWORD_NULL # nullConstant
    ;