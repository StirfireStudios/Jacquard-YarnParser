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
fragment LETTER : [a-zA-Z0-9_$] ;
fragment NOT_SPECIAL_MARKER : '<' ~'<' | '>' ~'>' | '[' ~'[' | ']' ~']' ;

fragment PREPROCESS_INDENT : '\u001D' ;
fragment PREPROCESS_ENDENT : '\u001E' ;

OPTION_START : '[[' ;
OPTION_END : ']]' ;

COMMAND_START : '<<' ;
COMMAND_END : '>>' ;

SHORTCUT_START : '->' ;

TEXT : LETTER (~[:\r\n<>[\]] | NOT_SPECIAL_MARKER)* ;

HASHTAG : '#' TEXT ;

WS : [ \t] -> skip ;
NEWLINE : '\r'? '\n' -> skip;
COMMENT : '//' ~[\r\n]* '\r'? '\n' -> skip ;

SEPARATOR : ':' ;

BODY_START : '---' -> pushMode(Body);

mode Body ;
BODY_BLANKLINE : NEWLINE NEWLINE ;
BODY_WS : [ \t\r\n] -> skip ;
BODY_END : '===' -> popMode ;
BODY_COMMENT : COMMENT -> skip ;
BODY_HASHTAG : HASHTAG -> type(HASHTAG) ;
BODY_TEXT : LETTER (~[\r\n<>[\]] | NOT_SPECIAL_MARKER)* -> type(TEXT) ;

BODY_COMMAND_START : COMMAND_START -> type(COMMAND_START), pushMode(Command) ;
BODY_OPTION_START : OPTION_START -> type(OPTION_START), pushMode(Option);
BODY_SHORTCUT_START : SHORTCUT_START PREPROCESS_INDENT -> type(SHORTCUT_START), pushMode(Shortcut) ;

mode Option ;
BODY_OPTION_END : OPTION_END -> type(OPTION_END), popMode ;
OPTION_WS : [ \t] -> skip ;
OPTION_SEPARATOR : '|' ;
OPTION_TEXT : LETTER (~[\r\n|<>[\]] | NOT_SPECIAL_MARKER)* -> type(TEXT) ;
OPTION_COMMAND_START : COMMAND_START -> type(COMMAND_START), pushMode(Command) ;

mode Shortcut ;
SHORTCUT_START2 : SHORTCUT_START PREPROCESS_INDENT -> type(SHORTCUT_START), pushMode(Shortcut) ;
SHORTCUT_END : PREPROCESS_ENDENT -> popMode ;
SHORTCUT_WS : [ \t\r\n] -> skip;
SHORTCUT_TEXT : LETTER (~[\r\n<>[\]\u001E] | NOT_SPECIAL_MARKER )* -> type(TEXT) ;
SHORTCUT_COMMAND_START : COMMAND_START -> type(COMMAND_START), pushMode(Command) ;

mode Command ;
BODY_COMMAND_END : COMMAND_END -> type(COMMAND_END), popMode ;
COMMAND_WS : [ \t] -> skip ;

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
KEYWORD_SET : S E T ;
KEYWORD_IF : I F ;
KEYWORD_ELSE : E L S E ;
KEYWORD_ELSE_IF : E L S E I F ;
KEYWORD_ENDIF : E N D I F ;
KEYWORD_TRUE : T R U E ;
KEYWORD_FALSE : F A L S E ;
KEYWORD_NULL : N U L L | N I L ;

VARIABLE : '$' LETTER+ ;

NUMBER : '-'? DIGIT+('.'DIGIT+)? ;

STRING : '"' ~[\r\n]* '"' ;

COMMAND_TEXT : LETTER (~[ \t|<>[\](),] | NOT_SPECIAL_MARKER)* -> type(TEXT) ;
