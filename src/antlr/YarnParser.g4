parser grammar YarnParser;

options { tokenVocab=YarnLexer; }

dialogue : node* EOF;

node : header+ body ;

header : headerName=TEXT SEPARATOR headerValue=TEXT? ;

body : BODY_START (statement | option_group)* BODY_END ;

statement
    : (text | command_statement)+ # line
    | BODY_BLANKLINE # blank
    | if_statement # if
    ;

ostatement
    : option_with_text # option
    | of_statement # optionIf
    | shortcut_statement # shortcut
    ;

shortcut_statement : SHORTCUT_START (statement | option_group)* SHORTCUT_END ;

option_group : (ostatement+ | option_link) ;
option_link : OPTION_START link=TEXT OPTION_END ;
option_with_text : OPTION_START link=TEXT OPTION_SEPARATOR optionText=TEXT OPTION_END hashtag=HASHTAG* ;

if_statement : if_clause statement* else_if_clause* else_clause? endif_clause ;
if_clause : COMMAND_START KEYWORD_IF predicate=expression COMMAND_END statements=statement*;
else_if_clause : COMMAND_START KEYWORD_ELSE_IF predicate=expression COMMAND_END statements=statement* ;
else_clause : COMMAND_START KEYWORD_ELSE COMMAND_END statements=statement*;

of_statement : of_clause statement* else_of_clause* oelse_clause? endif_clause ;
of_clause : COMMAND_START KEYWORD_IF predicate=expression COMMAND_END statements=ostatement*;
else_of_clause : COMMAND_START KEYWORD_ELSE_IF predicate=expression COMMAND_END statements=ostatement* ;
oelse_clause : COMMAND_START KEYWORD_ELSE COMMAND_END statements=ostatement*;

endif_clause : COMMAND_START KEYWORD_ENDIF COMMAND_END ;

set_command : COMMAND_START KEYWORD_SET? VARIABLE KEYWORD_TO expression COMMAND_END ;

command_statement
    : set_command # set
    | COMMAND_START (TEXT | expression | keyword)+ COMMAND_END # command
    ;

function_command : func=TEXT LBRACKET (args+=expression (COMMA args+=expression)*)? RBRACKET ;

text : TEXT hashtag=HASHTAG* ;

keyword 
    : KEYWORD_TO
    | KEYWORD_SET
    | KEYWORD_IF
    | KEYWORD_ELSE
    | KEYWORD_ELSE_IF
    | KEYWORD_ENDIF
    | KEYWORD_TRUE
    | KEYWORD_FALSE
    | KEYWORD_NULL
    ;

expression
    : value # valueExpression
    | function_command # functionExpression
    | LBRACKET expression RBRACKET # groupedExpression
    | MINUS expression # negativeExpression
    | NOT expression # notExpression
    | left=expression operand right=expression #opExpression
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