// Grammar file for the Yarn lexer

lexer grammar YarnLexer;

// Fragments so we can have mIxEdCaSe

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

fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;

// ----------------------
// Default mode
// handles headers and pushes into body mode

BODY_ENTER : '---' -> pushMode(Body) ;

// the two predetermined and important headers
HEADER_TITLE : 'title:' -> pushMode(Title) ;
HEADER_TAGS : 'tags:' -> pushMode(Tags) ;
// the catchall for all other headers, anything except spaces ending in a :
HEADER_NAME : ~(':' | ' ' | '\n')+ ;

HEADER_SEPARATOR : ':' -> pushMode(HeaderText);

// this should allow normal "programming style" strings
STRING : '"' .*? '"';
// format for identifiers used in numerous places
ID : (([a-zA-Z0-9])|('_'))+ ;

NEWLINE : [\n]+ ;

UNKNOWN : . ;

// ----------------------
// Title mode
// for handling the title of the node
// pops when it hits the end of the line
// A title is allowed to be anything up to the newline
mode Title;
TITLE_TEXT : ~'\n'+ ;
TITLE_TAG_END : '\n' -> popMode;

// ----------------------
// Tag mode
// for handling the tags of the node
// pops when it hits the end of the line
// currently this is just the same as the Header Text
// but will likely change so better to set it up now
mode Tags;
TAG_TEXT : ~('\n' | ',')+ ;
TAG_DELIMIT : ',' ;
HEADER_TAG_END : '\n' -> popMode;

// ----------------------
// Header Text mode
// for grabbing all the non-title/tag header text
// pops when it hits the end of a line
mode HeaderText;
HEADER_TEXT : ~('\n')+;
HEADER_END : '\n' -> popMode;

// ----------------------
// Body mode
// for handling normal dialogue lines and moving between modes

mode Body;

BLANK_STATEMENT : ('\n\n') ;
WS_IN_BODY : (' ' | '\t' | '\n')+ -> skip ; // skip spaces, tabs, newlines
COMMENT : '//' .*? '\n' -> skip ;

BODY_CLOSE : '===' -> popMode ;

TEXT_STRING : '"' .*? '"' ;

SHORTCUT_ENTER : '->' ' '* ;

INDENT : '\u001D';
DEDENT : '\u001E';

COMMAND_IF : COMMAND_OPEN KEYWORD_IF -> pushMode(Command) ;
//COMMAND_ELSE : COMMAND_OPEN KEYWORD_ELSE -> pushMode(Command) ;
COMMAND_ELSE : COMMAND_OPEN KEYWORD_ELSE COMMAND_CLOSE | '<<' E L S E '>>' ;
COMMAND_ELSE_IF : COMMAND_OPEN KEYWORD_ELSE_IF -> pushMode(Command) ;
COMMAND_ENDIF : COMMAND_OPEN E N D I F '>>' ;
COMMAND_SET : COMMAND_OPEN KEYWORD_SET -> pushMode(Command) ;
COMMAND_FUNC : COMMAND_OPEN ID '(' -> pushMode(Command) ;

ACTION_CMD : COMMAND_OPEN -> more, pushMode(Action) ;

COMMAND_OPEN : '<<' ' '* ;

OPTION_ENTER : '[[' -> pushMode(Option) ;

HASHTAG : '#' TEXT ;

BODY_GOBBLE : . -> more, pushMode(Text);

// ----------------------
// Text mode
// for handling the raw lines of dialogue
// goes until it hits a hashtag, or an indent/dedent and then pops
// is zero or more as it will always have the first symbol passed by BODY_GOBBLE
mode Text;

TEXT : ( ~('\n'|'\u001D'|'\u001E'|'#'|'<') | '<' ~'<' )* -> popMode;

//JUNK : ( ~'*' | ( '*'+ ~[/*]) )* '*'* ;

// ----------------------
// Command mode
// for handling branching and expression

mode Command;

COMMAND_WS : (' ' | '\n' | '\t')+ -> skip ; // skip spaces, tabs, newlines

COMMAND_CLOSE : '>>' -> popMode ;

COMMAND_STRING : STRING ;

// adding a space after the keywords to get around the issue of
//<<iffy>> being detected as an if statement
KEYWORD_IF : I F ' ' ;
KEYWORD_ELSE : E L S E ' ' ;
KEYWORD_ELSE_IF : E L S E I F ' ' ;
//KEYWORD_FUNC : F U N C ;
KEYWORD_SET : S E T ' ' ;

KEYWORD_TRUE  : T R U E ;
KEYWORD_FALSE : F A L S E;

KEYWORD_NULL : N U L L | N I L ;

KEYWORD_TO : T O | '=' ;
// All the operators YarnSpinner currently supports
OPERATOR_LOGICAL_LESS_THAN_EQUALS : '<=' | L T E ;
OPERATOR_LOGICAL_GREATER_THAN_EQUALS : '>=' | G T E ;
OPERATOR_LOGICAL_EQUALS : '==' | I S | E Q ;
OPERATOR_LOGICAL_LESS : '<' | L T ;
OPERATOR_LOGICAL_GREATER : '>' | G T  ;
OPERATOR_LOGICAL_NOT_EQUALS : '!=' | N E Q ;
OPERATOR_LOGICAL_AND : A N D | '&&' ;
OPERATOR_LOGICAL_OR : O R | '||' ;
OPERATOR_LOGICAL_XOR : X O R | '^' ;
OPERATOR_LOGICAL_NOT : N O T | '!' ;
OPERATOR_MATHS_ADDITION_EQUALS : '+=' ;
OPERATOR_MATHS_SUBTRACTION_EQUALS : '-=' ;
OPERATOR_MATHS_MULTIPLICATION_EQUALS : '*=' ;
OPERATOR_MATHS_MODULUS_EQUALS : '%=' ;
OPERATOR_MATHS_DIVISION_EQUALS : '/=' ;
OPERATOR_MATHS_ADDITION : '+' ;
OPERATOR_MATHS_SUBTRACTION : '-' ;
OPERATOR_MATHS_MULTIPLICATION : '*' ;
OPERATOR_MATHS_DIVISION : '/' ;
OPERATOR_MATHS_MODULUS : '%' ;

LPAREN : '(' ;
RPAREN : ')' ;
COMMA : ',' ;

VAR_ID : '$' ID ;

// this should allow for 1, 1.1, and .1 all fine
BODY_NUMBER : '-'? DIGIT+('.'DIGIT+)? ;
fragment DIGIT : [0-9] ;

FUNC_ID : ID ;

COMMAND_UNKNOWN : . ;

// ----------------------
// Action mode
// handles the <<anything you want>> command
mode Action;
ACTION : '>>' -> popMode ;
IGNORE : . -> more ;

//ACTION_TEXT : ID ;

//WS_IN_COMMAND : (' ' | '\n' | '\t') -> skip ; // skip spaces, tabs, newlines

// ----------------------
// Option mode
// For handling options
// pops when hits ]]

mode Option;

OPTION_SEPARATOR: '|' -> pushMode(OptionLink) ;
OPTION_TEXT : ~('|'|']')+ ;
OPTION_CLOSE: ']]' -> popMode ;

mode OptionLink;
OPTION_LINK : ~(']')+ -> popMode ;