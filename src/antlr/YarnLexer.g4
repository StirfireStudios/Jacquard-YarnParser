lexer grammar YarnLexer;

fragment A : [aA]; // match either an 'a' or 'A'
fragment B : [bB];
fragment C : [cC];
fragment D : [dD];
fragment E : [eE];
fragment F : [fF];
fragment G : [gG];
fragment H : [hH];
fragment I : [iI];
fragment J : [jJ];
fragment K : [kK];
fragment L : [lL];
fragment M : [mM];
fragment N : [nN];
fragment O : [oO];
fragment P : [pP];
fragment Q : [qQ];
fragment R : [rR];
fragment S : [sS];
fragment T : [tT];
fragment U : [uU];
fragment V : [vV];
fragment W : [wW];
fragment X : [xX];
fragment Y : [yY];
fragment Z : [zZ];

fragment LOWERCASE : [a-z] ;
fragment UPPERCASE : [A-Z] ;
fragment DIGIT : [0-9] ;
fragment LETTER : [a-zA-Z] ;
fragment LETTER_NUMBER : LETTER | NUMBER | [_] ;
fragment NOT_SPECIAL_MARKER : '<' ~'<' | '>' ~'>' | '[' ~'[' | ']' ~']' | '/' ~[*/] ;

OPTION_START : '[[' ;
OPTION_END : ']]' ;

COMMAND_START : '<<' ;
COMMAND_END : '>>' ;

EVAL_START : '{' ;
EVAL_END : '}' ;

SHORTCUT_START : '->' [ \t]* '\u001D' ;
SHORTCUT_END : '\u001E' ;

TEXT : LETTER_NUMBER (~[:\r\n<>[\]] | NOT_SPECIAL_MARKER)* ;

HASHTAG : '#' ~[\r\n]+ ;

WS : [ \t] -> skip ;
NEWLINE : '\r'? '\n' -> skip;
COMMENT : '//' ~[\r\n\u001D\u001E]* -> skip ;
BLOCK_COMMENT : '/*' .*? '*/' -> skip ;

SEPARATOR : ':' ;

VARIABLE : '$' LETTER_NUMBER+ ;
NUMBER : '-'? DIGIT+('.'DIGIT+)? ;
STRING : '"' ~[\r\n]*? '"' ;

BODY_START : '---' WS* NEWLINE -> pushMode(Body);

mode Body ;
BODY_WS : [ \t] -> skip ;
BODY_NEWLINE : NEWLINE -> type(NEWLINE);
BODY_END : '===' -> popMode ;
BODY_COMMENT : COMMENT -> skip ;
BODY_BLOCK_COMMENT : BLOCK_COMMENT -> skip ;
BODY_HASHTAG : HASHTAG -> type(HASHTAG) ;

SET_COMMAND_START : COMMAND_START WS* S E T WS+ -> pushMode(Command) ;
FUNC_COMMAND_START : COMMAND_START WS* F U N C WS+ -> pushMode(Command) ;
IF_COMMAND_START : COMMAND_START WS* I F -> pushMode(Command) ;
ELSEIF_COMMAND_START : COMMAND_START WS* E L S E I F -> pushMode(Command) ;
ELSE_COMMAND : COMMAND_START WS* E L S E WS* COMMAND_END;
ENDIF_COMMAND : COMMAND_START WS* E N D I F WS* COMMAND_END;

BODY_COMMAND_START : COMMAND_START -> type(COMMAND_START), pushMode(Command) ;
BODY_OPTION_START : OPTION_START -> type(OPTION_START), pushMode(Option) ;

BODY_SHORTCUT_START : SHORTCUT_START -> type(SHORTCUT_START) ;
BODY_SHORTCUT_END : SHORTCUT_END -> type(SHORTCUT_END) ;

BODY_EVAL_START : EVAL_START -> type(EVAL_START), pushMode(Command) ;

BODY_TEXT : (~[\r\n \t<>[\]#{}/\u001D\u001E] | NOT_SPECIAL_MARKER) (~[\r\n<>[\]#{}/\u001D\u001E] | NOT_SPECIAL_MARKER)* -> type(TEXT) ;

mode Option ;
BODY_OPTION_END : OPTION_END -> type(OPTION_END), popMode ;
OPTION_WS : [ \t] -> skip ;
OPTION_BLOCK_COMMENT : BLOCK_COMMENT -> skip ;
OPTION_SEPARATOR : '|' ;
OPTION_TEXT : LETTER_NUMBER (~[\r\n|<>[\]/] | NOT_SPECIAL_MARKER)* -> type(TEXT) ;
OPTION_COMMAND_START : COMMAND_START -> type(COMMAND_START), pushMode(Command) ;

mode Command ;
COMMAND_COMMAND_END : COMMAND_END -> type(COMMAND_END), popMode ;
COMMAND_EVAL_END : EVAL_END -> type(EVAL_END), popMode ;
COMMAND_WS : [ \t] -> skip ;
COMMAND_BLOCK_COMMENT : BLOCK_COMMENT -> skip ;
COMMAND_EVAL_START : EVAL_START -> type(EVAL_START), pushMode(Command) ;

LBRACKET : '(' ;
RBRACKET : ')' ;
COMMA : ',' ;
PLUS : '+' ;
MINUS : '-' ;
MULTIPLY : '*' ;
DIVIDE : '/' ;
MODULO : '%' ;
EQ : '==' | I S | E Q;
GT : '>' | G T ;
LT : '<' | L T ;
NEQ : '!=' | N E Q;
GTE : '>=' | G T E;
LTE : '<=' | L T E;
NOT : '!' | N O T;
AND : '&&' | A N D ;
OR : '||' | O R ;
XOR : '^' | X O R ;
ADD_EQUALS : '+=' ;
MINUS_EQUALS : '-=' ;
MULTIPLY_EQUALS : '*=' ;
DIVIDE_EQUALS : '/=' ;
MODULO_EQUALS : '%=' ;

KEYWORD_TO : T O | '=' ;
KEYWORD_TRUE : T R U E ;
KEYWORD_FALSE : F A L S E ;
KEYWORD_NULL : N U L L | N I L ;

COMMAND_VARIABLE : VARIABLE -> type(VARIABLE) ;
COMMAND_NUMBER : NUMBER -> type(NUMBER) ;
COMMAND_STRING : STRING -> type(STRING) ;

COMMAND_TEXT : LETTER (~[\r\n \t<>[\]#{}()/\u001D\u001E])* -> type(TEXT) ;
