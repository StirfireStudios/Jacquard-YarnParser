parser grammar YarnParser;

options { tokenVocab=YarnLexer; }

dialogue : node* EOF;

node : header+ body ;

header : headerName=TEXT SEPARATOR headerValue=TEXT? ;

body : BODY_START (option_group | statement)* BODY_END ;

statement
    : if_statement # if
    | NEWLINE NEWLINE # blank
    | (text | command_statement | eval_statement)+? #lineGroup
    | hashtag=HASHTAG+? #hashtag
    | NEWLINE #endOfLine
    ;

ostatement
    : option_with_text NEWLINE? # option
    | of_statement NEWLINE? # optionIf
    | shortcut_statement NEWLINE? # shortcut
    ;

eval_statement : EVAL_START expression EVAL_END ;

shortcut_statement : SHORTCUT_START (option_group | statement)* SHORTCUT_END ;

option_group : (ostatement+ | option_link) ;
option_link : OPTION_START link=TEXT OPTION_END ;
option_with_text : OPTION_START optionText=TEXT hashtag=HASHTAG* OPTION_SEPARATOR link=TEXT OPTION_END hashtag=HASHTAG*;

if_statement : if_clause else_if_clause*? else_clause? endif_clause;
if_clause : IF_COMMAND_START predicate=expression COMMAND_END NEWLINE? (option_group | statement)*?;
else_if_clause : ELSEIF_COMMAND_START predicate=expression COMMAND_END NEWLINE? (option_group | statement)*?;
else_clause : ELSE_COMMAND NEWLINE? (option_group | statement)*?;

of_statement : of_clause else_of_clause*? oelse_clause? endif_clause ;
of_clause : IF_COMMAND_START predicate=expression COMMAND_END NEWLINE? statements=ostatement*?;
else_of_clause : ELSEIF_COMMAND_START predicate=expression COMMAND_END NEWLINE? statements=ostatement*?;
oelse_clause : ELSE_COMMAND NEWLINE? statements=ostatement*?;

endif_clause : ENDIF_COMMAND NEWLINE? ;

set_command : (COMMAND_START | SET_COMMAND_START) VARIABLE set_operands expression COMMAND_END ;

function_command : FUNC_COMMAND_START function_call COMMAND_END ;

command_statement
    : set_command # set
    | function_command # func
    | COMMAND_START (TEXT | expression | keyword | operand | VARIABLE)+? COMMAND_END # command
    ;

function_call : (TEXT | keyword | operand) LBRACKET (args+=expression (COMMA args+=expression)*)? RBRACKET ;

text : TEXT hashtag=HASHTAG*? ;

set_operands
    : KEYWORD_TO
    | ADD_EQUALS
    | MINUS_EQUALS
    | MULTIPLY_EQUALS
    | DIVIDE_EQUALS
    | MODULO_EQUALS
    ;

keyword 
    : KEYWORD_TO
    | KEYWORD_TRUE
    | KEYWORD_FALSE
    | KEYWORD_NULL
    ;

expression
    : value # valueExpression
    | function_call # functionExpression
    | EVAL_START expression EVAL_END # evaluatedExpression
    | LBRACKET expression RBRACKET # groupedExpression
    | MINUS expression # negativeExpression
    | NOT expression # notExpression
    | VARIABLE assignmentOperand expression #assignmentExpression
    | left=expression operand KEYWORD_IF? right=expression #leftRightExpression
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
    ;

assignmentOperand
    : ADD_EQUALS
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
