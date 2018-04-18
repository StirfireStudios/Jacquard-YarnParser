parser grammar YarnParser;

options { tokenVocab=YarnLexer; }

dialogue : node* EOF;

node : header+ body ;

header : headerName=TEXT SEPARATOR headerValue=TEXT? ;

body : BODY_START (option_group | statement)* BODY_END ;

statement
    : if_statement NEWLINE? # if
    | NEWLINE # blank
    | (text | command_statement | eval_statement)+? NEWLINE? # line
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
option_with_text : OPTION_START link=TEXT OPTION_SEPARATOR optionText=TEXT OPTION_END hashtag=HASHTAG*;

if_statement : if_clause else_if_clause*? else_clause? endif_clause;
if_clause : COMMAND_START KEYWORD_IF predicate=expression COMMAND_END NEWLINE? statements=statement*?;
else_if_clause : COMMAND_START KEYWORD_ELSE_IF predicate=expression COMMAND_END NEWLINE? statements=statement*?;
else_clause : COMMAND_START KEYWORD_ELSE COMMAND_END NEWLINE? statements=statement*?;

of_statement : of_clause else_of_clause*? oelse_clause? endif_clause ;
of_clause : COMMAND_START KEYWORD_IF predicate=expression COMMAND_END NEWLINE? statements=ostatement*?;
else_of_clause : COMMAND_START KEYWORD_ELSE_IF predicate=expression COMMAND_END NEWLINE? statements=ostatement*?;
oelse_clause : COMMAND_START KEYWORD_ELSE COMMAND_END NEWLINE? statements=ostatement*?;

endif_clause : COMMAND_START KEYWORD_ENDIF COMMAND_END NEWLINE? ;

set_command : COMMAND_START KEYWORD_SET? VARIABLE set_operands expression COMMAND_END ;

function_command : COMMAND_START KEYWORD_FUNC? function_call COMMAND_END ;

command_statement
    : set_command # set
    | function_command # func
    | COMMAND_START 
        (TEXT | EVAL_START expression EVAL_END | keyword_start | VARIABLE) 
        (TEXT | EVAL_START expression EVAL_END | keyword | VARIABLE)* 
        COMMAND_END # command
    ;

function_call : (TEXT | keyword) LBRACKET (args+=expression (COMMA args+=expression)*)? RBRACKET ;

text : TEXT hashtag=HASHTAG* ;

set_operands
    : KEYWORD_TO
    | ADD_EQUALS
    | MINUS_EQUALS
    | MULTIPLY_EQUALS
    | DIVIDE_EQUALS
    | MODULO_EQUALS
    ;

keyword_start
    : KEYWORD_TO
    | KEYWORD_SET
    | KEYWORD_FUNC
    | KEYWORD_TRUE
    | KEYWORD_FALSE
    | KEYWORD_NULL
    ;

keyword 
    : KEYWORD_TO
    | KEYWORD_SET
    | KEYWORD_FUNC
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
    | function_call # functionExpression
    | LBRACKET expression RBRACKET # groupedExpression
    | MINUS expression # negativeExpression
    | NOT expression # notExpression
    | VARIABLE assignmentOperand expression #assignmentExpression
    | left=expression operand right=expression #leftRightExpression
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