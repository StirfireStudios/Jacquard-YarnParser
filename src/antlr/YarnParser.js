// Generated from YarnParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var YarnParserListener = require('./YarnParserListener').YarnParserListener;
var YarnParserVisitor = require('./YarnParserVisitor').YarnParserVisitor;

var grammarFileName = "YarnParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003>\u0141\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0003\u0002\u0007\u0002",
    "<\n\u0002\f\u0002\u000e\u0002?\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0006\u0003D\n\u0003\r\u0003\u000e\u0003E\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004M\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0007\u0005R\n\u0005\f\u0005\u000e\u0005U\u000b",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0006\u0006[",
    "\n\u0006\r\u0006\u000e\u0006\\\u0003\u0006\u0003\u0006\u0005\u0006a",
    "\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007f\n\u0007\u0003",
    "\b\u0003\b\u0003\b\u0007\bk\n\b\f\b\u000e\bn\u000b\b\u0003\b\u0003\b",
    "\u0003\t\u0006\ts\n\t\r\t\u000e\tt\u0003\t\u0005\tx\n\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0007\u000b\u0084\n\u000b\f\u000b\u000e\u000b\u0087",
    "\u000b\u000b\u0003\f\u0003\f\u0007\f\u008b\n\f\f\f\u000e\f\u008e\u000b",
    "\f\u0003\f\u0007\f\u0091\n\f\f\f\u000e\f\u0094\u000b\f\u0003\f\u0005",
    "\f\u0097\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0007\r\u00a0\n\r\f\r\u000e\r\u00a3\u000b\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00aa\n\u000e\f\u000e",
    "\u000e\u000e\u00ad\u000b\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0007\u000f\u00b3\n\u000f\f\u000f\u000e\u000f\u00b6\u000b\u000f",
    "\u0003\u0010\u0003\u0010\u0007\u0010\u00ba\n\u0010\f\u0010\u000e\u0010",
    "\u00bd\u000b\u0010\u0003\u0010\u0007\u0010\u00c0\n\u0010\f\u0010\u000e",
    "\u0010\u00c3\u000b\u0010\u0003\u0010\u0005\u0010\u00c6\n\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0007\u0011\u00cf\n\u0011\f\u0011\u000e\u0011\u00d2\u000b\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012",
    "\u00d9\n\u0012\f\u0012\u000e\u0012\u00dc\u000b\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00e2\n\u0013\f\u0013\u000e",
    "\u0013\u00e5\u000b\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0005\u0015\u00ed\n\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005",
    "\u0016\u00f6\n\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0006\u0017\u0100\n",
    "\u0017\r\u0017\u000e\u0017\u0101\u0003\u0017\u0005\u0017\u0105\n\u0017",
    "\u0003\u0018\u0003\u0018\u0005\u0018\u0109\n\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u010f\n\u0018\f\u0018\u000e",
    "\u0018\u0112\u000b\u0018\u0005\u0018\u0114\n\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0007\u0019\u011a\n\u0019\f\u0019\u000e",
    "\u0019\u011d\u000b\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u012c\n\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u0132\n\u001b",
    "\f\u001b\u000e\u001b\u0135\u000b\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005",
    "\u001d\u013f\n\u001d\u0003\u001d\u0002\u00034\u001e\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.02468\u0002\u0004\u0003\u00022;\u0004\u0002\u001e(*1\u0002\u0154\u0002",
    "=\u0003\u0002\u0002\u0002\u0004C\u0003\u0002\u0002\u0002\u0006I\u0003",
    "\u0002\u0002\u0002\bN\u0003\u0002\u0002\u0002\n`\u0003\u0002\u0002\u0002",
    "\fe\u0003\u0002\u0002\u0002\u000eg\u0003\u0002\u0002\u0002\u0010w\u0003",
    "\u0002\u0002\u0002\u0012y\u0003\u0002\u0002\u0002\u0014}\u0003\u0002",
    "\u0002\u0002\u0016\u0088\u0003\u0002\u0002\u0002\u0018\u009a\u0003\u0002",
    "\u0002\u0002\u001a\u00a4\u0003\u0002\u0002\u0002\u001c\u00ae\u0003\u0002",
    "\u0002\u0002\u001e\u00b7\u0003\u0002\u0002\u0002 \u00c9\u0003\u0002",
    "\u0002\u0002\"\u00d3\u0003\u0002\u0002\u0002$\u00dd\u0003\u0002\u0002",
    "\u0002&\u00e6\u0003\u0002\u0002\u0002(\u00ea\u0003\u0002\u0002\u0002",
    "*\u00f3\u0003\u0002\u0002\u0002,\u0104\u0003\u0002\u0002\u0002.\u0108",
    "\u0003\u0002\u0002\u00020\u0117\u0003\u0002\u0002\u00022\u011e\u0003",
    "\u0002\u0002\u00024\u012b\u0003\u0002\u0002\u00026\u0136\u0003\u0002",
    "\u0002\u00028\u013e\u0003\u0002\u0002\u0002:<\u0005\u0004\u0003\u0002",
    ";:\u0003\u0002\u0002\u0002<?\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002",
    "\u0002=>\u0003\u0002\u0002\u0002>@\u0003\u0002\u0002\u0002?=\u0003\u0002",
    "\u0002\u0002@A\u0007\u0002\u0002\u0003A\u0003\u0003\u0002\u0002\u0002",
    "BD\u0005\u0006\u0004\u0002CB\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002",
    "\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FG\u0003\u0002",
    "\u0002\u0002GH\u0005\b\u0005\u0002H\u0005\u0003\u0002\u0002\u0002IJ",
    "\u0007\t\u0002\u0002JL\u0007\u000f\u0002\u0002KM\u0007\t\u0002\u0002",
    "LK\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002M\u0007\u0003\u0002",
    "\u0002\u0002NS\u0007\u0010\u0002\u0002OR\u0005\n\u0006\u0002PR\u0005",
    "\u0010\t\u0002QO\u0003\u0002\u0002\u0002QP\u0003\u0002\u0002\u0002R",
    "U\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002",
    "\u0002TV\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002VW\u0007\u0013",
    "\u0002\u0002W\t\u0003\u0002\u0002\u0002X[\u00050\u0019\u0002Y[\u0005",
    ",\u0017\u0002ZX\u0003\u0002\u0002\u0002ZY\u0003\u0002\u0002\u0002[\\",
    "\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002",
    "\u0002]a\u0003\u0002\u0002\u0002^a\u0007\u0011\u0002\u0002_a\u0005\u0016",
    "\f\u0002`Z\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002`_\u0003",
    "\u0002\u0002\u0002a\u000b\u0003\u0002\u0002\u0002bf\u0005\u0014\u000b",
    "\u0002cf\u0005\u001e\u0010\u0002df\u0005\u000e\b\u0002eb\u0003\u0002",
    "\u0002\u0002ec\u0003\u0002\u0002\u0002ed\u0003\u0002\u0002\u0002f\r",
    "\u0003\u0002\u0002\u0002gl\u0007\u0007\u0002\u0002hk\u0005\n\u0006\u0002",
    "ik\u0005\u0010\t\u0002jh\u0003\u0002\u0002\u0002ji\u0003\u0002\u0002",
    "\u0002kn\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002\u0002lm\u0003\u0002",
    "\u0002\u0002mo\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002op\u0007",
    "\b\u0002\u0002p\u000f\u0003\u0002\u0002\u0002qs\u0005\f\u0007\u0002",
    "rq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002",
    "\u0002tu\u0003\u0002\u0002\u0002ux\u0003\u0002\u0002\u0002vx\u0005\u0012",
    "\n\u0002wr\u0003\u0002\u0002\u0002wv\u0003\u0002\u0002\u0002x\u0011",
    "\u0003\u0002\u0002\u0002yz\u0007\u0003\u0002\u0002z{\u0007\t\u0002\u0002",
    "{|\u0007\u0004\u0002\u0002|\u0013\u0003\u0002\u0002\u0002}~\u0007\u0003",
    "\u0002\u0002~\u007f\u0007\t\u0002\u0002\u007f\u0080\u0007\u0018\u0002",
    "\u0002\u0080\u0081\u0007\t\u0002\u0002\u0081\u0085\u0007\u0004\u0002",
    "\u0002\u0082\u0084\u0007\n\u0002\u0002\u0083\u0082\u0003\u0002\u0002",
    "\u0002\u0084\u0087\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002",
    "\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0015\u0003\u0002\u0002",
    "\u0002\u0087\u0085\u0003\u0002\u0002\u0002\u0088\u008c\u0005\u0018\r",
    "\u0002\u0089\u008b\u0005\n\u0006\u0002\u008a\u0089\u0003\u0002\u0002",
    "\u0002\u008b\u008e\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002",
    "\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u0092\u0003\u0002\u0002",
    "\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0091\u0005\u001a\u000e",
    "\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0091\u0094\u0003\u0002\u0002",
    "\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002",
    "\u0002\u0093\u0096\u0003\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002",
    "\u0002\u0095\u0097\u0005\u001c\u000f\u0002\u0096\u0095\u0003\u0002\u0002",
    "\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002",
    "\u0002\u0098\u0099\u0005&\u0014\u0002\u0099\u0017\u0003\u0002\u0002",
    "\u0002\u009a\u009b\u0007\u0005\u0002\u0002\u009b\u009c\u00075\u0002",
    "\u0002\u009c\u009d\u00054\u001b\u0002\u009d\u00a1\u0007\u0006\u0002",
    "\u0002\u009e\u00a0\u0005\n\u0006\u0002\u009f\u009e\u0003\u0002\u0002",
    "\u0002\u00a0\u00a3\u0003\u0002\u0002\u0002\u00a1\u009f\u0003\u0002\u0002",
    "\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u0019\u0003\u0002\u0002",
    "\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007\u0005\u0002",
    "\u0002\u00a5\u00a6\u00077\u0002\u0002\u00a6\u00a7\u00054\u001b\u0002",
    "\u00a7\u00ab\u0007\u0006\u0002\u0002\u00a8\u00aa\u0005\n\u0006\u0002",
    "\u00a9\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ad\u0003\u0002\u0002\u0002",
    "\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002",
    "\u00ac\u001b\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002",
    "\u00ae\u00af\u0007\u0005\u0002\u0002\u00af\u00b0\u00076\u0002\u0002",
    "\u00b0\u00b4\u0007\u0006\u0002\u0002\u00b1\u00b3\u0005\n\u0006\u0002",
    "\u00b2\u00b1\u0003\u0002\u0002\u0002\u00b3\u00b6\u0003\u0002\u0002\u0002",
    "\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002",
    "\u00b5\u001d\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002",
    "\u00b7\u00bb\u0005 \u0011\u0002\u00b8\u00ba\u0005\n\u0006\u0002\u00b9",
    "\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bd\u0003\u0002\u0002\u0002\u00bb",
    "\u00b9\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc",
    "\u00c1\u0003\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002\u00be",
    "\u00c0\u0005\"\u0012\u0002\u00bf\u00be\u0003\u0002\u0002\u0002\u00c0",
    "\u00c3\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1",
    "\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c5\u0003\u0002\u0002\u0002\u00c3",
    "\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c6\u0005$\u0013\u0002\u00c5",
    "\u00c4\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6",
    "\u00c7\u0003\u0002\u0002\u0002\u00c7\u00c8\u0005&\u0014\u0002\u00c8",
    "\u001f\u0003\u0002\u0002\u0002\u00c9\u00ca\u0007\u0005\u0002\u0002\u00ca",
    "\u00cb\u00075\u0002\u0002\u00cb\u00cc\u00054\u001b\u0002\u00cc\u00d0",
    "\u0007\u0006\u0002\u0002\u00cd\u00cf\u0005\f\u0007\u0002\u00ce\u00cd",
    "\u0003\u0002\u0002\u0002\u00cf\u00d2\u0003\u0002\u0002\u0002\u00d0\u00ce",
    "\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1!",
    "\u0003\u0002\u0002\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d3\u00d4",
    "\u0007\u0005\u0002\u0002\u00d4\u00d5\u00077\u0002\u0002\u00d5\u00d6",
    "\u00054\u001b\u0002\u00d6\u00da\u0007\u0006\u0002\u0002\u00d7\u00d9",
    "\u0005\f\u0007\u0002\u00d8\u00d7\u0003\u0002\u0002\u0002\u00d9\u00dc",
    "\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00da\u00db",
    "\u0003\u0002\u0002\u0002\u00db#\u0003\u0002\u0002\u0002\u00dc\u00da",
    "\u0003\u0002\u0002\u0002\u00dd\u00de\u0007\u0005\u0002\u0002\u00de\u00df",
    "\u00076\u0002\u0002\u00df\u00e3\u0007\u0006\u0002\u0002\u00e0\u00e2",
    "\u0005\f\u0007\u0002\u00e1\u00e0\u0003\u0002\u0002\u0002\u00e2\u00e5",
    "\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\u0003\u0002\u0002\u0002\u00e4%\u0003\u0002\u0002\u0002\u00e5\u00e3",
    "\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007\u0005\u0002\u0002\u00e7\u00e8",
    "\u00078\u0002\u0002\u00e8\u00e9\u0007\u0006\u0002\u0002\u00e9\'\u0003",
    "\u0002\u0002\u0002\u00ea\u00ec\u0007\u0005\u0002\u0002\u00eb\u00ed\u0007",
    "3\u0002\u0002\u00ec\u00eb\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003",
    "\u0002\u0002\u0002\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee\u00ef\u0007",
    "<\u0002\u0002\u00ef\u00f0\u00072\u0002\u0002\u00f0\u00f1\u00054\u001b",
    "\u0002\u00f1\u00f2\u0007\u0006\u0002\u0002\u00f2)\u0003\u0002\u0002",
    "\u0002\u00f3\u00f5\u0007\u0005\u0002\u0002\u00f4\u00f6\u00074\u0002",
    "\u0002\u00f5\u00f4\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002",
    "\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f8\u0005.\u0018",
    "\u0002\u00f8\u00f9\u0007\u0006\u0002\u0002\u00f9+\u0003\u0002\u0002",
    "\u0002\u00fa\u0105\u0005(\u0015\u0002\u00fb\u00ff\u0007\u0005\u0002",
    "\u0002\u00fc\u0100\u0007\t\u0002\u0002\u00fd\u0100\u00054\u001b\u0002",
    "\u00fe\u0100\u00052\u001a\u0002\u00ff\u00fc\u0003\u0002\u0002\u0002",
    "\u00ff\u00fd\u0003\u0002\u0002\u0002\u00ff\u00fe\u0003\u0002\u0002\u0002",
    "\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002",
    "\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002",
    "\u0103\u0105\u0007\u0006\u0002\u0002\u0104\u00fa\u0003\u0002\u0002\u0002",
    "\u0104\u00fb\u0003\u0002\u0002\u0002\u0105-\u0003\u0002\u0002\u0002",
    "\u0106\u0109\u0007\t\u0002\u0002\u0107\u0109\u00052\u001a\u0002\u0108",
    "\u0106\u0003\u0002\u0002\u0002\u0108\u0107\u0003\u0002\u0002\u0002\u0109",
    "\u010a\u0003\u0002\u0002\u0002\u010a\u0113\u0007\u001b\u0002\u0002\u010b",
    "\u0110\u00054\u001b\u0002\u010c\u010d\u0007\u001d\u0002\u0002\u010d",
    "\u010f\u00054\u001b\u0002\u010e\u010c\u0003\u0002\u0002\u0002\u010f",
    "\u0112\u0003\u0002\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002\u0110",
    "\u0111\u0003\u0002\u0002\u0002\u0111\u0114\u0003\u0002\u0002\u0002\u0112",
    "\u0110\u0003\u0002\u0002\u0002\u0113\u010b\u0003\u0002\u0002\u0002\u0113",
    "\u0114\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002\u0115",
    "\u0116\u0007\u001c\u0002\u0002\u0116/\u0003\u0002\u0002\u0002\u0117",
    "\u011b\u0007\t\u0002\u0002\u0118\u011a\u0007\n\u0002\u0002\u0119\u0118",
    "\u0003\u0002\u0002\u0002\u011a\u011d\u0003\u0002\u0002\u0002\u011b\u0119",
    "\u0003\u0002\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c1",
    "\u0003\u0002\u0002\u0002\u011d\u011b\u0003\u0002\u0002\u0002\u011e\u011f",
    "\t\u0002\u0002\u0002\u011f3\u0003\u0002\u0002\u0002\u0120\u0121\b\u001b",
    "\u0001\u0002\u0121\u012c\u00058\u001d\u0002\u0122\u012c\u0005.\u0018",
    "\u0002\u0123\u0124\u0007\u001b\u0002\u0002\u0124\u0125\u00054\u001b",
    "\u0002\u0125\u0126\u0007\u001c\u0002\u0002\u0126\u012c\u0003\u0002\u0002",
    "\u0002\u0127\u0128\u0007\u001f\u0002\u0002\u0128\u012c\u00054\u001b",
    "\u0005\u0129\u012a\u0007)\u0002\u0002\u012a\u012c\u00054\u001b\u0004",
    "\u012b\u0120\u0003\u0002\u0002\u0002\u012b\u0122\u0003\u0002\u0002\u0002",
    "\u012b\u0123\u0003\u0002\u0002\u0002\u012b\u0127\u0003\u0002\u0002\u0002",
    "\u012b\u0129\u0003\u0002\u0002\u0002\u012c\u0133\u0003\u0002\u0002\u0002",
    "\u012d\u012e\f\u0003\u0002\u0002\u012e\u012f\u00056\u001c\u0002\u012f",
    "\u0130\u00054\u001b\u0004\u0130\u0132\u0003\u0002\u0002\u0002\u0131",
    "\u012d\u0003\u0002\u0002\u0002\u0132\u0135\u0003\u0002\u0002\u0002\u0133",
    "\u0131\u0003\u0002\u0002\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134",
    "5\u0003\u0002\u0002\u0002\u0135\u0133\u0003\u0002\u0002\u0002\u0136",
    "\u0137\t\u0003\u0002\u0002\u01377\u0003\u0002\u0002\u0002\u0138\u013f",
    "\u0007=\u0002\u0002\u0139\u013f\u0007>\u0002\u0002\u013a\u013f\u0007",
    "<\u0002\u0002\u013b\u013f\u00079\u0002\u0002\u013c\u013f\u0007:\u0002",
    "\u0002\u013d\u013f\u0007;\u0002\u0002\u013e\u0138\u0003\u0002\u0002",
    "\u0002\u013e\u0139\u0003\u0002\u0002\u0002\u013e\u013a\u0003\u0002\u0002",
    "\u0002\u013e\u013b\u0003\u0002\u0002\u0002\u013e\u013c\u0003\u0002\u0002",
    "\u0002\u013e\u013d\u0003\u0002\u0002\u0002\u013f9\u0003\u0002\u0002",
    "\u0002(=ELQSZ\\`ejltw\u0085\u008c\u0092\u0096\u00a1\u00ab\u00b4\u00bb",
    "\u00c1\u00c5\u00d0\u00da\u00e3\u00ec\u00f5\u00ff\u0101\u0104\u0108\u0110",
    "\u0113\u011b\u012b\u0133\u013e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'[['", "']]'", "'<<'", "'>>'", null, "'\u001E'", 
                     null, null, null, null, null, null, "':'", "'---'", 
                     null, null, "'==='", null, null, null, null, "'|'", 
                     null, null, "'('", "')'", "','", "'+'", "'-'", "'*'", 
                     "'/'", "'%'", null, null, null, null, null, null, null, 
                     null, null, null, "'+='", "'-='", "'*='", "'/='", "'%='" ];

var symbolicNames = [ null, "OPTION_START", "OPTION_END", "COMMAND_START", 
                      "COMMAND_END", "SHORTCUT_START", "SHORTCUT_END", "TEXT", 
                      "HASHTAG", "WS", "NEWLINE", "COMMENT", "BLOCK_COMMENT", 
                      "SEPARATOR", "BODY_START", "BODY_BLANKLINE", "BODY_WS", 
                      "BODY_END", "BODY_COMMENT", "BODY_BLOCK_COMMENT", 
                      "OPTION_WS", "OPTION_BLOCK_COMMENT", "OPTION_SEPARATOR", 
                      "COMMAND_WS", "COMMAND_BLOCK_COMMENT", "LBRACKET", 
                      "RBRACKET", "COMMA", "PLUS", "MINUS", "MULTIPLY", 
                      "DIVIDE", "MODULO", "EQ", "GT", "LT", "NEQ", "GTE", 
                      "LTE", "NOT", "AND", "OR", "XOR", "ADD_EQUALS", "MINUS_EQUALS", 
                      "MULTIPLY_EQUALS", "DIVIDE_EQUALS", "MODULO_EQUALS", 
                      "KEYWORD_TO", "KEYWORD_SET", "KEYWORD_FUNC", "KEYWORD_IF", 
                      "KEYWORD_ELSE", "KEYWORD_ELSE_IF", "KEYWORD_ENDIF", 
                      "KEYWORD_TRUE", "KEYWORD_FALSE", "KEYWORD_NULL", "VARIABLE", 
                      "NUMBER", "STRING" ];

var ruleNames =  [ "dialogue", "node", "header", "body", "statement", "ostatement", 
                   "shortcut_statement", "option_group", "option_link", 
                   "option_with_text", "if_statement", "if_clause", "else_if_clause", 
                   "else_clause", "of_statement", "of_clause", "else_of_clause", 
                   "oelse_clause", "endif_clause", "set_command", "fuction_command", 
                   "command_statement", "function_call", "text", "keyword", 
                   "expression", "operand", "value" ];

function YarnParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

YarnParser.prototype = Object.create(antlr4.Parser.prototype);
YarnParser.prototype.constructor = YarnParser;

Object.defineProperty(YarnParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

YarnParser.EOF = antlr4.Token.EOF;
YarnParser.OPTION_START = 1;
YarnParser.OPTION_END = 2;
YarnParser.COMMAND_START = 3;
YarnParser.COMMAND_END = 4;
YarnParser.SHORTCUT_START = 5;
YarnParser.SHORTCUT_END = 6;
YarnParser.TEXT = 7;
YarnParser.HASHTAG = 8;
YarnParser.WS = 9;
YarnParser.NEWLINE = 10;
YarnParser.COMMENT = 11;
YarnParser.BLOCK_COMMENT = 12;
YarnParser.SEPARATOR = 13;
YarnParser.BODY_START = 14;
YarnParser.BODY_BLANKLINE = 15;
YarnParser.BODY_WS = 16;
YarnParser.BODY_END = 17;
YarnParser.BODY_COMMENT = 18;
YarnParser.BODY_BLOCK_COMMENT = 19;
YarnParser.OPTION_WS = 20;
YarnParser.OPTION_BLOCK_COMMENT = 21;
YarnParser.OPTION_SEPARATOR = 22;
YarnParser.COMMAND_WS = 23;
YarnParser.COMMAND_BLOCK_COMMENT = 24;
YarnParser.LBRACKET = 25;
YarnParser.RBRACKET = 26;
YarnParser.COMMA = 27;
YarnParser.PLUS = 28;
YarnParser.MINUS = 29;
YarnParser.MULTIPLY = 30;
YarnParser.DIVIDE = 31;
YarnParser.MODULO = 32;
YarnParser.EQ = 33;
YarnParser.GT = 34;
YarnParser.LT = 35;
YarnParser.NEQ = 36;
YarnParser.GTE = 37;
YarnParser.LTE = 38;
YarnParser.NOT = 39;
YarnParser.AND = 40;
YarnParser.OR = 41;
YarnParser.XOR = 42;
YarnParser.ADD_EQUALS = 43;
YarnParser.MINUS_EQUALS = 44;
YarnParser.MULTIPLY_EQUALS = 45;
YarnParser.DIVIDE_EQUALS = 46;
YarnParser.MODULO_EQUALS = 47;
YarnParser.KEYWORD_TO = 48;
YarnParser.KEYWORD_SET = 49;
YarnParser.KEYWORD_FUNC = 50;
YarnParser.KEYWORD_IF = 51;
YarnParser.KEYWORD_ELSE = 52;
YarnParser.KEYWORD_ELSE_IF = 53;
YarnParser.KEYWORD_ENDIF = 54;
YarnParser.KEYWORD_TRUE = 55;
YarnParser.KEYWORD_FALSE = 56;
YarnParser.KEYWORD_NULL = 57;
YarnParser.VARIABLE = 58;
YarnParser.NUMBER = 59;
YarnParser.STRING = 60;

YarnParser.RULE_dialogue = 0;
YarnParser.RULE_node = 1;
YarnParser.RULE_header = 2;
YarnParser.RULE_body = 3;
YarnParser.RULE_statement = 4;
YarnParser.RULE_ostatement = 5;
YarnParser.RULE_shortcut_statement = 6;
YarnParser.RULE_option_group = 7;
YarnParser.RULE_option_link = 8;
YarnParser.RULE_option_with_text = 9;
YarnParser.RULE_if_statement = 10;
YarnParser.RULE_if_clause = 11;
YarnParser.RULE_else_if_clause = 12;
YarnParser.RULE_else_clause = 13;
YarnParser.RULE_of_statement = 14;
YarnParser.RULE_of_clause = 15;
YarnParser.RULE_else_of_clause = 16;
YarnParser.RULE_oelse_clause = 17;
YarnParser.RULE_endif_clause = 18;
YarnParser.RULE_set_command = 19;
YarnParser.RULE_fuction_command = 20;
YarnParser.RULE_command_statement = 21;
YarnParser.RULE_function_call = 22;
YarnParser.RULE_text = 23;
YarnParser.RULE_keyword = 24;
YarnParser.RULE_expression = 25;
YarnParser.RULE_operand = 26;
YarnParser.RULE_value = 27;

function DialogueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_dialogue;
    return this;
}

DialogueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DialogueContext.prototype.constructor = DialogueContext;

DialogueContext.prototype.EOF = function() {
    return this.getToken(YarnParser.EOF, 0);
};

DialogueContext.prototype.node = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NodeContext);
    } else {
        return this.getTypedRuleContext(NodeContext,i);
    }
};

DialogueContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterDialogue(this);
	}
};

DialogueContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitDialogue(this);
	}
};

DialogueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitDialogue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.DialogueContext = DialogueContext;

YarnParser.prototype.dialogue = function() {

    var localctx = new DialogueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, YarnParser.RULE_dialogue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.TEXT) {
            this.state = 56;
            this.node();
            this.state = 61;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 62;
        this.match(YarnParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_node;
    return this;
}

NodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NodeContext.prototype.constructor = NodeContext;

NodeContext.prototype.body = function() {
    return this.getTypedRuleContext(BodyContext,0);
};

NodeContext.prototype.header = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HeaderContext);
    } else {
        return this.getTypedRuleContext(HeaderContext,i);
    }
};

NodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterNode(this);
	}
};

NodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitNode(this);
	}
};

NodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitNode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.NodeContext = NodeContext;

YarnParser.prototype.node = function() {

    var localctx = new NodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, YarnParser.RULE_node);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 64;
            this.header();
            this.state = 67; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===YarnParser.TEXT);
        this.state = 69;
        this.body();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_header;
    this.headerName = null; // Token
    this.headerValue = null; // Token
    return this;
}

HeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderContext.prototype.constructor = HeaderContext;

HeaderContext.prototype.SEPARATOR = function() {
    return this.getToken(YarnParser.SEPARATOR, 0);
};

HeaderContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(YarnParser.TEXT);
    } else {
        return this.getToken(YarnParser.TEXT, i);
    }
};


HeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterHeader(this);
	}
};

HeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitHeader(this);
	}
};

HeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.HeaderContext = HeaderContext;

YarnParser.prototype.header = function() {

    var localctx = new HeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, YarnParser.RULE_header);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        localctx.headerName = this.match(YarnParser.TEXT);
        this.state = 72;
        this.match(YarnParser.SEPARATOR);
        this.state = 74;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 73;
            localctx.headerValue = this.match(YarnParser.TEXT);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_body;
    return this;
}

BodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BodyContext.prototype.constructor = BodyContext;

BodyContext.prototype.BODY_START = function() {
    return this.getToken(YarnParser.BODY_START, 0);
};

BodyContext.prototype.BODY_END = function() {
    return this.getToken(YarnParser.BODY_END, 0);
};

BodyContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BodyContext.prototype.option_group = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Option_groupContext);
    } else {
        return this.getTypedRuleContext(Option_groupContext,i);
    }
};

BodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterBody(this);
	}
};

BodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitBody(this);
	}
};

BodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.BodyContext = BodyContext;

YarnParser.prototype.body = function() {

    var localctx = new BodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, YarnParser.RULE_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.match(YarnParser.BODY_START);
        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.OPTION_START) | (1 << YarnParser.COMMAND_START) | (1 << YarnParser.SHORTCUT_START) | (1 << YarnParser.TEXT) | (1 << YarnParser.BODY_BLANKLINE))) !== 0)) {
            this.state = 79;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            switch(la_) {
            case 1:
                this.state = 77;
                this.statement();
                break;

            case 2:
                this.state = 78;
                this.option_group();
                break;

            }
            this.state = 83;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 84;
        this.match(YarnParser.BODY_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;


 
StatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BlankContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlankContext.prototype = Object.create(StatementContext.prototype);
BlankContext.prototype.constructor = BlankContext;

YarnParser.BlankContext = BlankContext;

BlankContext.prototype.BODY_BLANKLINE = function() {
    return this.getToken(YarnParser.BODY_BLANKLINE, 0);
};
BlankContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterBlank(this);
	}
};

BlankContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitBlank(this);
	}
};

BlankContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitBlank(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LineContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LineContext.prototype = Object.create(StatementContext.prototype);
LineContext.prototype.constructor = LineContext;

YarnParser.LineContext = LineContext;

LineContext.prototype.text = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TextContext);
    } else {
        return this.getTypedRuleContext(TextContext,i);
    }
};

LineContext.prototype.command_statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Command_statementContext);
    } else {
        return this.getTypedRuleContext(Command_statementContext,i);
    }
};
LineContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterLine(this);
	}
};

LineContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitLine(this);
	}
};

LineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IfContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IfContext.prototype = Object.create(StatementContext.prototype);
IfContext.prototype.constructor = IfContext;

YarnParser.IfContext = IfContext;

IfContext.prototype.if_statement = function() {
    return this.getTypedRuleContext(If_statementContext,0);
};
IfContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterIf(this);
	}
};

IfContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitIf(this);
	}
};

IfContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitIf(this);
    } else {
        return visitor.visitChildren(this);
    }
};



YarnParser.StatementContext = StatementContext;

YarnParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, YarnParser.RULE_statement);
    try {
        this.state = 94;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            localctx = new LineContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 88; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 88;
            		this._errHandler.sync(this);
            		switch(this._input.LA(1)) {
            		case YarnParser.TEXT:
            		    this.state = 86;
            		    this.text();
            		    break;
            		case YarnParser.COMMAND_START:
            		    this.state = 87;
            		    this.command_statement();
            		    break;
            		default:
            		    throw new antlr4.error.NoViableAltException(this);
            		}
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 90; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            localctx = new BlankContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 92;
            this.match(YarnParser.BODY_BLANKLINE);
            break;

        case 3:
            localctx = new IfContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 93;
            this.if_statement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OstatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_ostatement;
    return this;
}

OstatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OstatementContext.prototype.constructor = OstatementContext;


 
OstatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ShortcutContext(parser, ctx) {
	OstatementContext.call(this, parser);
    OstatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ShortcutContext.prototype = Object.create(OstatementContext.prototype);
ShortcutContext.prototype.constructor = ShortcutContext;

YarnParser.ShortcutContext = ShortcutContext;

ShortcutContext.prototype.shortcut_statement = function() {
    return this.getTypedRuleContext(Shortcut_statementContext,0);
};
ShortcutContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterShortcut(this);
	}
};

ShortcutContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitShortcut(this);
	}
};

ShortcutContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitShortcut(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OptionIfContext(parser, ctx) {
	OstatementContext.call(this, parser);
    OstatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OptionIfContext.prototype = Object.create(OstatementContext.prototype);
OptionIfContext.prototype.constructor = OptionIfContext;

YarnParser.OptionIfContext = OptionIfContext;

OptionIfContext.prototype.of_statement = function() {
    return this.getTypedRuleContext(Of_statementContext,0);
};
OptionIfContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterOptionIf(this);
	}
};

OptionIfContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitOptionIf(this);
	}
};

OptionIfContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitOptionIf(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OptionContext(parser, ctx) {
	OstatementContext.call(this, parser);
    OstatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OptionContext.prototype = Object.create(OstatementContext.prototype);
OptionContext.prototype.constructor = OptionContext;

YarnParser.OptionContext = OptionContext;

OptionContext.prototype.option_with_text = function() {
    return this.getTypedRuleContext(Option_with_textContext,0);
};
OptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterOption(this);
	}
};

OptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitOption(this);
	}
};

OptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitOption(this);
    } else {
        return visitor.visitChildren(this);
    }
};



YarnParser.OstatementContext = OstatementContext;

YarnParser.prototype.ostatement = function() {

    var localctx = new OstatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, YarnParser.RULE_ostatement);
    try {
        this.state = 99;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.OPTION_START:
            localctx = new OptionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 96;
            this.option_with_text();
            break;
        case YarnParser.COMMAND_START:
            localctx = new OptionIfContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 97;
            this.of_statement();
            break;
        case YarnParser.SHORTCUT_START:
            localctx = new ShortcutContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 98;
            this.shortcut_statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Shortcut_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_shortcut_statement;
    return this;
}

Shortcut_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Shortcut_statementContext.prototype.constructor = Shortcut_statementContext;

Shortcut_statementContext.prototype.SHORTCUT_START = function() {
    return this.getToken(YarnParser.SHORTCUT_START, 0);
};

Shortcut_statementContext.prototype.SHORTCUT_END = function() {
    return this.getToken(YarnParser.SHORTCUT_END, 0);
};

Shortcut_statementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Shortcut_statementContext.prototype.option_group = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Option_groupContext);
    } else {
        return this.getTypedRuleContext(Option_groupContext,i);
    }
};

Shortcut_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterShortcut_statement(this);
	}
};

Shortcut_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitShortcut_statement(this);
	}
};

Shortcut_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitShortcut_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Shortcut_statementContext = Shortcut_statementContext;

YarnParser.prototype.shortcut_statement = function() {

    var localctx = new Shortcut_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, YarnParser.RULE_shortcut_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.match(YarnParser.SHORTCUT_START);
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.OPTION_START) | (1 << YarnParser.COMMAND_START) | (1 << YarnParser.SHORTCUT_START) | (1 << YarnParser.TEXT) | (1 << YarnParser.BODY_BLANKLINE))) !== 0)) {
            this.state = 104;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
            switch(la_) {
            case 1:
                this.state = 102;
                this.statement();
                break;

            case 2:
                this.state = 103;
                this.option_group();
                break;

            }
            this.state = 108;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 109;
        this.match(YarnParser.SHORTCUT_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Option_groupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_option_group;
    return this;
}

Option_groupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Option_groupContext.prototype.constructor = Option_groupContext;

Option_groupContext.prototype.option_link = function() {
    return this.getTypedRuleContext(Option_linkContext,0);
};

Option_groupContext.prototype.ostatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OstatementContext);
    } else {
        return this.getTypedRuleContext(OstatementContext,i);
    }
};

Option_groupContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterOption_group(this);
	}
};

Option_groupContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitOption_group(this);
	}
};

Option_groupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitOption_group(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Option_groupContext = Option_groupContext;

YarnParser.prototype.option_group = function() {

    var localctx = new Option_groupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, YarnParser.RULE_option_group);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.state = 112; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 111;
            		this.ostatement();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 114; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            this.state = 116;
            this.option_link();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Option_linkContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_option_link;
    this.link = null; // Token
    return this;
}

Option_linkContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Option_linkContext.prototype.constructor = Option_linkContext;

Option_linkContext.prototype.OPTION_START = function() {
    return this.getToken(YarnParser.OPTION_START, 0);
};

Option_linkContext.prototype.OPTION_END = function() {
    return this.getToken(YarnParser.OPTION_END, 0);
};

Option_linkContext.prototype.TEXT = function() {
    return this.getToken(YarnParser.TEXT, 0);
};

Option_linkContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterOption_link(this);
	}
};

Option_linkContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitOption_link(this);
	}
};

Option_linkContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitOption_link(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Option_linkContext = Option_linkContext;

YarnParser.prototype.option_link = function() {

    var localctx = new Option_linkContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, YarnParser.RULE_option_link);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(YarnParser.OPTION_START);
        this.state = 120;
        localctx.link = this.match(YarnParser.TEXT);
        this.state = 121;
        this.match(YarnParser.OPTION_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Option_with_textContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_option_with_text;
    this.link = null; // Token
    this.optionText = null; // Token
    this.hashtag = null; // Token
    return this;
}

Option_with_textContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Option_with_textContext.prototype.constructor = Option_with_textContext;

Option_with_textContext.prototype.OPTION_START = function() {
    return this.getToken(YarnParser.OPTION_START, 0);
};

Option_with_textContext.prototype.OPTION_SEPARATOR = function() {
    return this.getToken(YarnParser.OPTION_SEPARATOR, 0);
};

Option_with_textContext.prototype.OPTION_END = function() {
    return this.getToken(YarnParser.OPTION_END, 0);
};

Option_with_textContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(YarnParser.TEXT);
    } else {
        return this.getToken(YarnParser.TEXT, i);
    }
};


Option_with_textContext.prototype.HASHTAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(YarnParser.HASHTAG);
    } else {
        return this.getToken(YarnParser.HASHTAG, i);
    }
};


Option_with_textContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterOption_with_text(this);
	}
};

Option_with_textContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitOption_with_text(this);
	}
};

Option_with_textContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitOption_with_text(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Option_with_textContext = Option_with_textContext;

YarnParser.prototype.option_with_text = function() {

    var localctx = new Option_with_textContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, YarnParser.RULE_option_with_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.match(YarnParser.OPTION_START);
        this.state = 124;
        localctx.link = this.match(YarnParser.TEXT);
        this.state = 125;
        this.match(YarnParser.OPTION_SEPARATOR);
        this.state = 126;
        localctx.optionText = this.match(YarnParser.TEXT);
        this.state = 127;
        this.match(YarnParser.OPTION_END);
        this.state = 131;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.HASHTAG) {
            this.state = 128;
            localctx.hashtag = this.match(YarnParser.HASHTAG);
            this.state = 133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function If_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_if_statement;
    return this;
}

If_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_statementContext.prototype.constructor = If_statementContext;

If_statementContext.prototype.if_clause = function() {
    return this.getTypedRuleContext(If_clauseContext,0);
};

If_statementContext.prototype.endif_clause = function() {
    return this.getTypedRuleContext(Endif_clauseContext,0);
};

If_statementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

If_statementContext.prototype.else_if_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Else_if_clauseContext);
    } else {
        return this.getTypedRuleContext(Else_if_clauseContext,i);
    }
};

If_statementContext.prototype.else_clause = function() {
    return this.getTypedRuleContext(Else_clauseContext,0);
};

If_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterIf_statement(this);
	}
};

If_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitIf_statement(this);
	}
};

If_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitIf_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.If_statementContext = If_statementContext;

YarnParser.prototype.if_statement = function() {

    var localctx = new If_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, YarnParser.RULE_if_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.if_clause();
        this.state = 138;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 135;
                this.statement(); 
            }
            this.state = 140;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

        this.state = 144;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 141;
                this.else_if_clause(); 
            }
            this.state = 146;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

        this.state = 148;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 147;
            this.else_clause();

        }
        this.state = 150;
        this.endif_clause();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function If_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_if_clause;
    this.predicate = null; // ExpressionContext
    this.statements = null; // StatementContext
    return this;
}

If_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_clauseContext.prototype.constructor = If_clauseContext;

If_clauseContext.prototype.COMMAND_START = function() {
    return this.getToken(YarnParser.COMMAND_START, 0);
};

If_clauseContext.prototype.KEYWORD_IF = function() {
    return this.getToken(YarnParser.KEYWORD_IF, 0);
};

If_clauseContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

If_clauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

If_clauseContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

If_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterIf_clause(this);
	}
};

If_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitIf_clause(this);
	}
};

If_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitIf_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.If_clauseContext = If_clauseContext;

YarnParser.prototype.if_clause = function() {

    var localctx = new If_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, YarnParser.RULE_if_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.match(YarnParser.COMMAND_START);
        this.state = 153;
        this.match(YarnParser.KEYWORD_IF);
        this.state = 154;
        localctx.predicate = this.expression(0);
        this.state = 155;
        this.match(YarnParser.COMMAND_END);
        this.state = 159;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 156;
                localctx.statements = this.statement(); 
            }
            this.state = 161;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Else_if_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_else_if_clause;
    this.predicate = null; // ExpressionContext
    this.statements = null; // StatementContext
    return this;
}

Else_if_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Else_if_clauseContext.prototype.constructor = Else_if_clauseContext;

Else_if_clauseContext.prototype.COMMAND_START = function() {
    return this.getToken(YarnParser.COMMAND_START, 0);
};

Else_if_clauseContext.prototype.KEYWORD_ELSE_IF = function() {
    return this.getToken(YarnParser.KEYWORD_ELSE_IF, 0);
};

Else_if_clauseContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

Else_if_clauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Else_if_clauseContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Else_if_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterElse_if_clause(this);
	}
};

Else_if_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitElse_if_clause(this);
	}
};

Else_if_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitElse_if_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Else_if_clauseContext = Else_if_clauseContext;

YarnParser.prototype.else_if_clause = function() {

    var localctx = new Else_if_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, YarnParser.RULE_else_if_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(YarnParser.COMMAND_START);
        this.state = 163;
        this.match(YarnParser.KEYWORD_ELSE_IF);
        this.state = 164;
        localctx.predicate = this.expression(0);
        this.state = 165;
        this.match(YarnParser.COMMAND_END);
        this.state = 169;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 166;
                localctx.statements = this.statement(); 
            }
            this.state = 171;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Else_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_else_clause;
    this.statements = null; // StatementContext
    return this;
}

Else_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Else_clauseContext.prototype.constructor = Else_clauseContext;

Else_clauseContext.prototype.COMMAND_START = function() {
    return this.getToken(YarnParser.COMMAND_START, 0);
};

Else_clauseContext.prototype.KEYWORD_ELSE = function() {
    return this.getToken(YarnParser.KEYWORD_ELSE, 0);
};

Else_clauseContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

Else_clauseContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Else_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterElse_clause(this);
	}
};

Else_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitElse_clause(this);
	}
};

Else_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitElse_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Else_clauseContext = Else_clauseContext;

YarnParser.prototype.else_clause = function() {

    var localctx = new Else_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, YarnParser.RULE_else_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(YarnParser.COMMAND_START);
        this.state = 173;
        this.match(YarnParser.KEYWORD_ELSE);
        this.state = 174;
        this.match(YarnParser.COMMAND_END);
        this.state = 178;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 175;
                localctx.statements = this.statement(); 
            }
            this.state = 180;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Of_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_of_statement;
    return this;
}

Of_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Of_statementContext.prototype.constructor = Of_statementContext;

Of_statementContext.prototype.of_clause = function() {
    return this.getTypedRuleContext(Of_clauseContext,0);
};

Of_statementContext.prototype.endif_clause = function() {
    return this.getTypedRuleContext(Endif_clauseContext,0);
};

Of_statementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Of_statementContext.prototype.else_of_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Else_of_clauseContext);
    } else {
        return this.getTypedRuleContext(Else_of_clauseContext,i);
    }
};

Of_statementContext.prototype.oelse_clause = function() {
    return this.getTypedRuleContext(Oelse_clauseContext,0);
};

Of_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterOf_statement(this);
	}
};

Of_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitOf_statement(this);
	}
};

Of_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitOf_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Of_statementContext = Of_statementContext;

YarnParser.prototype.of_statement = function() {

    var localctx = new Of_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, YarnParser.RULE_of_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.of_clause();
        this.state = 185;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 182;
                this.statement(); 
            }
            this.state = 187;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
        }

        this.state = 191;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 188;
                this.else_of_clause(); 
            }
            this.state = 193;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
        }

        this.state = 195;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 194;
            this.oelse_clause();

        }
        this.state = 197;
        this.endif_clause();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Of_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_of_clause;
    this.predicate = null; // ExpressionContext
    this.statements = null; // OstatementContext
    return this;
}

Of_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Of_clauseContext.prototype.constructor = Of_clauseContext;

Of_clauseContext.prototype.COMMAND_START = function() {
    return this.getToken(YarnParser.COMMAND_START, 0);
};

Of_clauseContext.prototype.KEYWORD_IF = function() {
    return this.getToken(YarnParser.KEYWORD_IF, 0);
};

Of_clauseContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

Of_clauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Of_clauseContext.prototype.ostatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OstatementContext);
    } else {
        return this.getTypedRuleContext(OstatementContext,i);
    }
};

Of_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterOf_clause(this);
	}
};

Of_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitOf_clause(this);
	}
};

Of_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitOf_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Of_clauseContext = Of_clauseContext;

YarnParser.prototype.of_clause = function() {

    var localctx = new Of_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, YarnParser.RULE_of_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(YarnParser.COMMAND_START);
        this.state = 200;
        this.match(YarnParser.KEYWORD_IF);
        this.state = 201;
        localctx.predicate = this.expression(0);
        this.state = 202;
        this.match(YarnParser.COMMAND_END);
        this.state = 206;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 203;
                localctx.statements = this.ostatement(); 
            }
            this.state = 208;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Else_of_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_else_of_clause;
    this.predicate = null; // ExpressionContext
    this.statements = null; // OstatementContext
    return this;
}

Else_of_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Else_of_clauseContext.prototype.constructor = Else_of_clauseContext;

Else_of_clauseContext.prototype.COMMAND_START = function() {
    return this.getToken(YarnParser.COMMAND_START, 0);
};

Else_of_clauseContext.prototype.KEYWORD_ELSE_IF = function() {
    return this.getToken(YarnParser.KEYWORD_ELSE_IF, 0);
};

Else_of_clauseContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

Else_of_clauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Else_of_clauseContext.prototype.ostatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OstatementContext);
    } else {
        return this.getTypedRuleContext(OstatementContext,i);
    }
};

Else_of_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterElse_of_clause(this);
	}
};

Else_of_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitElse_of_clause(this);
	}
};

Else_of_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitElse_of_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Else_of_clauseContext = Else_of_clauseContext;

YarnParser.prototype.else_of_clause = function() {

    var localctx = new Else_of_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, YarnParser.RULE_else_of_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.match(YarnParser.COMMAND_START);
        this.state = 210;
        this.match(YarnParser.KEYWORD_ELSE_IF);
        this.state = 211;
        localctx.predicate = this.expression(0);
        this.state = 212;
        this.match(YarnParser.COMMAND_END);
        this.state = 216;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 213;
                localctx.statements = this.ostatement(); 
            }
            this.state = 218;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Oelse_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_oelse_clause;
    this.statements = null; // OstatementContext
    return this;
}

Oelse_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Oelse_clauseContext.prototype.constructor = Oelse_clauseContext;

Oelse_clauseContext.prototype.COMMAND_START = function() {
    return this.getToken(YarnParser.COMMAND_START, 0);
};

Oelse_clauseContext.prototype.KEYWORD_ELSE = function() {
    return this.getToken(YarnParser.KEYWORD_ELSE, 0);
};

Oelse_clauseContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

Oelse_clauseContext.prototype.ostatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OstatementContext);
    } else {
        return this.getTypedRuleContext(OstatementContext,i);
    }
};

Oelse_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterOelse_clause(this);
	}
};

Oelse_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitOelse_clause(this);
	}
};

Oelse_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitOelse_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Oelse_clauseContext = Oelse_clauseContext;

YarnParser.prototype.oelse_clause = function() {

    var localctx = new Oelse_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, YarnParser.RULE_oelse_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.match(YarnParser.COMMAND_START);
        this.state = 220;
        this.match(YarnParser.KEYWORD_ELSE);
        this.state = 221;
        this.match(YarnParser.COMMAND_END);
        this.state = 225;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 222;
                localctx.statements = this.ostatement(); 
            }
            this.state = 227;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Endif_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_endif_clause;
    return this;
}

Endif_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Endif_clauseContext.prototype.constructor = Endif_clauseContext;

Endif_clauseContext.prototype.COMMAND_START = function() {
    return this.getToken(YarnParser.COMMAND_START, 0);
};

Endif_clauseContext.prototype.KEYWORD_ENDIF = function() {
    return this.getToken(YarnParser.KEYWORD_ENDIF, 0);
};

Endif_clauseContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

Endif_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterEndif_clause(this);
	}
};

Endif_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitEndif_clause(this);
	}
};

Endif_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitEndif_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Endif_clauseContext = Endif_clauseContext;

YarnParser.prototype.endif_clause = function() {

    var localctx = new Endif_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, YarnParser.RULE_endif_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
        this.match(YarnParser.COMMAND_START);
        this.state = 229;
        this.match(YarnParser.KEYWORD_ENDIF);
        this.state = 230;
        this.match(YarnParser.COMMAND_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Set_commandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_set_command;
    return this;
}

Set_commandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Set_commandContext.prototype.constructor = Set_commandContext;

Set_commandContext.prototype.COMMAND_START = function() {
    return this.getToken(YarnParser.COMMAND_START, 0);
};

Set_commandContext.prototype.VARIABLE = function() {
    return this.getToken(YarnParser.VARIABLE, 0);
};

Set_commandContext.prototype.KEYWORD_TO = function() {
    return this.getToken(YarnParser.KEYWORD_TO, 0);
};

Set_commandContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Set_commandContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

Set_commandContext.prototype.KEYWORD_SET = function() {
    return this.getToken(YarnParser.KEYWORD_SET, 0);
};

Set_commandContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterSet_command(this);
	}
};

Set_commandContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitSet_command(this);
	}
};

Set_commandContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitSet_command(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Set_commandContext = Set_commandContext;

YarnParser.prototype.set_command = function() {

    var localctx = new Set_commandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, YarnParser.RULE_set_command);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.match(YarnParser.COMMAND_START);
        this.state = 234;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.KEYWORD_SET) {
            this.state = 233;
            this.match(YarnParser.KEYWORD_SET);
        }

        this.state = 236;
        this.match(YarnParser.VARIABLE);
        this.state = 237;
        this.match(YarnParser.KEYWORD_TO);
        this.state = 238;
        this.expression(0);
        this.state = 239;
        this.match(YarnParser.COMMAND_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Fuction_commandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_fuction_command;
    return this;
}

Fuction_commandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Fuction_commandContext.prototype.constructor = Fuction_commandContext;

Fuction_commandContext.prototype.COMMAND_START = function() {
    return this.getToken(YarnParser.COMMAND_START, 0);
};

Fuction_commandContext.prototype.function_call = function() {
    return this.getTypedRuleContext(Function_callContext,0);
};

Fuction_commandContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

Fuction_commandContext.prototype.KEYWORD_FUNC = function() {
    return this.getToken(YarnParser.KEYWORD_FUNC, 0);
};

Fuction_commandContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterFuction_command(this);
	}
};

Fuction_commandContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitFuction_command(this);
	}
};

Fuction_commandContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitFuction_command(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Fuction_commandContext = Fuction_commandContext;

YarnParser.prototype.fuction_command = function() {

    var localctx = new Fuction_commandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, YarnParser.RULE_fuction_command);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.match(YarnParser.COMMAND_START);
        this.state = 243;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        if(la_===1) {
            this.state = 242;
            this.match(YarnParser.KEYWORD_FUNC);

        }
        this.state = 245;
        this.function_call();
        this.state = 246;
        this.match(YarnParser.COMMAND_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Command_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_command_statement;
    return this;
}

Command_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Command_statementContext.prototype.constructor = Command_statementContext;


 
Command_statementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SetContext(parser, ctx) {
	Command_statementContext.call(this, parser);
    Command_statementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetContext.prototype = Object.create(Command_statementContext.prototype);
SetContext.prototype.constructor = SetContext;

YarnParser.SetContext = SetContext;

SetContext.prototype.set_command = function() {
    return this.getTypedRuleContext(Set_commandContext,0);
};
SetContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterSet(this);
	}
};

SetContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitSet(this);
	}
};

SetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitSet(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CommandContext(parser, ctx) {
	Command_statementContext.call(this, parser);
    Command_statementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CommandContext.prototype = Object.create(Command_statementContext.prototype);
CommandContext.prototype.constructor = CommandContext;

YarnParser.CommandContext = CommandContext;

CommandContext.prototype.COMMAND_START = function() {
    return this.getToken(YarnParser.COMMAND_START, 0);
};

CommandContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

CommandContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(YarnParser.TEXT);
    } else {
        return this.getToken(YarnParser.TEXT, i);
    }
};


CommandContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

CommandContext.prototype.keyword = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(KeywordContext);
    } else {
        return this.getTypedRuleContext(KeywordContext,i);
    }
};
CommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterCommand(this);
	}
};

CommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitCommand(this);
	}
};

CommandContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitCommand(this);
    } else {
        return visitor.visitChildren(this);
    }
};



YarnParser.Command_statementContext = Command_statementContext;

YarnParser.prototype.command_statement = function() {

    var localctx = new Command_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, YarnParser.RULE_command_statement);
    var _la = 0; // Token type
    try {
        this.state = 258;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            localctx = new SetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 248;
            this.set_command();
            break;

        case 2:
            localctx = new CommandContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 249;
            this.match(YarnParser.COMMAND_START);
            this.state = 253; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 253;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 250;
                    this.match(YarnParser.TEXT);
                    break;

                case 2:
                    this.state = 251;
                    this.expression(0);
                    break;

                case 3:
                    this.state = 252;
                    this.keyword();
                    break;

                }
                this.state = 255; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.TEXT) | (1 << YarnParser.LBRACKET) | (1 << YarnParser.MINUS))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (YarnParser.NOT - 39)) | (1 << (YarnParser.KEYWORD_TO - 39)) | (1 << (YarnParser.KEYWORD_SET - 39)) | (1 << (YarnParser.KEYWORD_FUNC - 39)) | (1 << (YarnParser.KEYWORD_IF - 39)) | (1 << (YarnParser.KEYWORD_ELSE - 39)) | (1 << (YarnParser.KEYWORD_ELSE_IF - 39)) | (1 << (YarnParser.KEYWORD_ENDIF - 39)) | (1 << (YarnParser.KEYWORD_TRUE - 39)) | (1 << (YarnParser.KEYWORD_FALSE - 39)) | (1 << (YarnParser.KEYWORD_NULL - 39)) | (1 << (YarnParser.VARIABLE - 39)) | (1 << (YarnParser.NUMBER - 39)) | (1 << (YarnParser.STRING - 39)))) !== 0));
            this.state = 257;
            this.match(YarnParser.COMMAND_END);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Function_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_function_call;
    this._expression = null; // ExpressionContext
    this.args = []; // of ExpressionContexts
    return this;
}

Function_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_callContext.prototype.constructor = Function_callContext;

Function_callContext.prototype.LBRACKET = function() {
    return this.getToken(YarnParser.LBRACKET, 0);
};

Function_callContext.prototype.RBRACKET = function() {
    return this.getToken(YarnParser.RBRACKET, 0);
};

Function_callContext.prototype.TEXT = function() {
    return this.getToken(YarnParser.TEXT, 0);
};

Function_callContext.prototype.keyword = function() {
    return this.getTypedRuleContext(KeywordContext,0);
};

Function_callContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Function_callContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(YarnParser.COMMA);
    } else {
        return this.getToken(YarnParser.COMMA, i);
    }
};


Function_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterFunction_call(this);
	}
};

Function_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitFunction_call(this);
	}
};

Function_callContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitFunction_call(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Function_callContext = Function_callContext;

YarnParser.prototype.function_call = function() {

    var localctx = new Function_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, YarnParser.RULE_function_call);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.TEXT:
            this.state = 260;
            this.match(YarnParser.TEXT);
            break;
        case YarnParser.KEYWORD_TO:
        case YarnParser.KEYWORD_SET:
        case YarnParser.KEYWORD_FUNC:
        case YarnParser.KEYWORD_IF:
        case YarnParser.KEYWORD_ELSE:
        case YarnParser.KEYWORD_ELSE_IF:
        case YarnParser.KEYWORD_ENDIF:
        case YarnParser.KEYWORD_TRUE:
        case YarnParser.KEYWORD_FALSE:
        case YarnParser.KEYWORD_NULL:
            this.state = 261;
            this.keyword();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 264;
        this.match(YarnParser.LBRACKET);
        this.state = 273;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.TEXT) | (1 << YarnParser.LBRACKET) | (1 << YarnParser.MINUS))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (YarnParser.NOT - 39)) | (1 << (YarnParser.KEYWORD_TO - 39)) | (1 << (YarnParser.KEYWORD_SET - 39)) | (1 << (YarnParser.KEYWORD_FUNC - 39)) | (1 << (YarnParser.KEYWORD_IF - 39)) | (1 << (YarnParser.KEYWORD_ELSE - 39)) | (1 << (YarnParser.KEYWORD_ELSE_IF - 39)) | (1 << (YarnParser.KEYWORD_ENDIF - 39)) | (1 << (YarnParser.KEYWORD_TRUE - 39)) | (1 << (YarnParser.KEYWORD_FALSE - 39)) | (1 << (YarnParser.KEYWORD_NULL - 39)) | (1 << (YarnParser.VARIABLE - 39)) | (1 << (YarnParser.NUMBER - 39)) | (1 << (YarnParser.STRING - 39)))) !== 0)) {
            this.state = 265;
            localctx._expression = this.expression(0);
            localctx.args.push(localctx._expression);
            this.state = 270;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===YarnParser.COMMA) {
                this.state = 266;
                this.match(YarnParser.COMMA);
                this.state = 267;
                localctx._expression = this.expression(0);
                localctx.args.push(localctx._expression);
                this.state = 272;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 275;
        this.match(YarnParser.RBRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_text;
    this.hashtag = null; // Token
    return this;
}

TextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextContext.prototype.constructor = TextContext;

TextContext.prototype.TEXT = function() {
    return this.getToken(YarnParser.TEXT, 0);
};

TextContext.prototype.HASHTAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(YarnParser.HASHTAG);
    } else {
        return this.getToken(YarnParser.HASHTAG, i);
    }
};


TextContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterText(this);
	}
};

TextContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitText(this);
	}
};

TextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitText(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.TextContext = TextContext;

YarnParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, YarnParser.RULE_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this.match(YarnParser.TEXT);
        this.state = 281;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.HASHTAG) {
            this.state = 278;
            localctx.hashtag = this.match(YarnParser.HASHTAG);
            this.state = 283;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function KeywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_keyword;
    return this;
}

KeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;

KeywordContext.prototype.KEYWORD_TO = function() {
    return this.getToken(YarnParser.KEYWORD_TO, 0);
};

KeywordContext.prototype.KEYWORD_SET = function() {
    return this.getToken(YarnParser.KEYWORD_SET, 0);
};

KeywordContext.prototype.KEYWORD_FUNC = function() {
    return this.getToken(YarnParser.KEYWORD_FUNC, 0);
};

KeywordContext.prototype.KEYWORD_IF = function() {
    return this.getToken(YarnParser.KEYWORD_IF, 0);
};

KeywordContext.prototype.KEYWORD_ELSE = function() {
    return this.getToken(YarnParser.KEYWORD_ELSE, 0);
};

KeywordContext.prototype.KEYWORD_ELSE_IF = function() {
    return this.getToken(YarnParser.KEYWORD_ELSE_IF, 0);
};

KeywordContext.prototype.KEYWORD_ENDIF = function() {
    return this.getToken(YarnParser.KEYWORD_ENDIF, 0);
};

KeywordContext.prototype.KEYWORD_TRUE = function() {
    return this.getToken(YarnParser.KEYWORD_TRUE, 0);
};

KeywordContext.prototype.KEYWORD_FALSE = function() {
    return this.getToken(YarnParser.KEYWORD_FALSE, 0);
};

KeywordContext.prototype.KEYWORD_NULL = function() {
    return this.getToken(YarnParser.KEYWORD_NULL, 0);
};

KeywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterKeyword(this);
	}
};

KeywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitKeyword(this);
	}
};

KeywordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitKeyword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.KeywordContext = KeywordContext;

YarnParser.prototype.keyword = function() {

    var localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, YarnParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        _la = this._input.LA(1);
        if(!(((((_la - 48)) & ~0x1f) == 0 && ((1 << (_la - 48)) & ((1 << (YarnParser.KEYWORD_TO - 48)) | (1 << (YarnParser.KEYWORD_SET - 48)) | (1 << (YarnParser.KEYWORD_FUNC - 48)) | (1 << (YarnParser.KEYWORD_IF - 48)) | (1 << (YarnParser.KEYWORD_ELSE - 48)) | (1 << (YarnParser.KEYWORD_ELSE_IF - 48)) | (1 << (YarnParser.KEYWORD_ENDIF - 48)) | (1 << (YarnParser.KEYWORD_TRUE - 48)) | (1 << (YarnParser.KEYWORD_FALSE - 48)) | (1 << (YarnParser.KEYWORD_NULL - 48)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ValueExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValueExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ValueExpressionContext.prototype.constructor = ValueExpressionContext;

YarnParser.ValueExpressionContext = ValueExpressionContext;

ValueExpressionContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
ValueExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterValueExpression(this);
	}
};

ValueExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitValueExpression(this);
	}
};

ValueExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitValueExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegativeExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegativeExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NegativeExpressionContext.prototype.constructor = NegativeExpressionContext;

YarnParser.NegativeExpressionContext = NegativeExpressionContext;

NegativeExpressionContext.prototype.MINUS = function() {
    return this.getToken(YarnParser.MINUS, 0);
};

NegativeExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
NegativeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterNegativeExpression(this);
	}
};

NegativeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitNegativeExpression(this);
	}
};

NegativeExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitNegativeExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NotExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NotExpressionContext.prototype.constructor = NotExpressionContext;

YarnParser.NotExpressionContext = NotExpressionContext;

NotExpressionContext.prototype.NOT = function() {
    return this.getToken(YarnParser.NOT, 0);
};

NotExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
NotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterNotExpression(this);
	}
};

NotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitNotExpression(this);
	}
};

NotExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitNotExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OpExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OpExpressionContext.prototype = Object.create(ExpressionContext.prototype);
OpExpressionContext.prototype.constructor = OpExpressionContext;

YarnParser.OpExpressionContext = OpExpressionContext;

OpExpressionContext.prototype.operand = function() {
    return this.getTypedRuleContext(OperandContext,0);
};

OpExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
OpExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterOpExpression(this);
	}
};

OpExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitOpExpression(this);
	}
};

OpExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitOpExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FunctionExpressionContext.prototype.constructor = FunctionExpressionContext;

YarnParser.FunctionExpressionContext = FunctionExpressionContext;

FunctionExpressionContext.prototype.function_call = function() {
    return this.getTypedRuleContext(Function_callContext,0);
};
FunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitFunctionExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GroupedExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GroupedExpressionContext.prototype = Object.create(ExpressionContext.prototype);
GroupedExpressionContext.prototype.constructor = GroupedExpressionContext;

YarnParser.GroupedExpressionContext = GroupedExpressionContext;

GroupedExpressionContext.prototype.LBRACKET = function() {
    return this.getToken(YarnParser.LBRACKET, 0);
};

GroupedExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

GroupedExpressionContext.prototype.RBRACKET = function() {
    return this.getToken(YarnParser.RBRACKET, 0);
};
GroupedExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterGroupedExpression(this);
	}
};

GroupedExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitGroupedExpression(this);
	}
};

GroupedExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitGroupedExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



YarnParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 50;
    this.enterRecursionRule(localctx, 50, YarnParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 297;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ValueExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 287;
            this.value();
            break;

        case 2:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 288;
            this.function_call();
            break;

        case 3:
            localctx = new GroupedExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 289;
            this.match(YarnParser.LBRACKET);
            this.state = 290;
            this.expression(0);
            this.state = 291;
            this.match(YarnParser.RBRACKET);
            break;

        case 4:
            localctx = new NegativeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 293;
            this.match(YarnParser.MINUS);
            this.state = 294;
            this.expression(3);
            break;

        case 5:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 295;
            this.match(YarnParser.NOT);
            this.state = 296;
            this.expression(2);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 305;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new OpExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                localctx.left = _prevctx;
                this.pushNewRecursionContext(localctx, _startState, YarnParser.RULE_expression);
                this.state = 299;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 300;
                this.operand();
                this.state = 301;
                localctx.right = this.expression(2); 
            }
            this.state = 307;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function OperandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_operand;
    return this;
}

OperandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperandContext.prototype.constructor = OperandContext;

OperandContext.prototype.PLUS = function() {
    return this.getToken(YarnParser.PLUS, 0);
};

OperandContext.prototype.MINUS = function() {
    return this.getToken(YarnParser.MINUS, 0);
};

OperandContext.prototype.MULTIPLY = function() {
    return this.getToken(YarnParser.MULTIPLY, 0);
};

OperandContext.prototype.DIVIDE = function() {
    return this.getToken(YarnParser.DIVIDE, 0);
};

OperandContext.prototype.MODULO = function() {
    return this.getToken(YarnParser.MODULO, 0);
};

OperandContext.prototype.EQ = function() {
    return this.getToken(YarnParser.EQ, 0);
};

OperandContext.prototype.GT = function() {
    return this.getToken(YarnParser.GT, 0);
};

OperandContext.prototype.LT = function() {
    return this.getToken(YarnParser.LT, 0);
};

OperandContext.prototype.NEQ = function() {
    return this.getToken(YarnParser.NEQ, 0);
};

OperandContext.prototype.GTE = function() {
    return this.getToken(YarnParser.GTE, 0);
};

OperandContext.prototype.LTE = function() {
    return this.getToken(YarnParser.LTE, 0);
};

OperandContext.prototype.AND = function() {
    return this.getToken(YarnParser.AND, 0);
};

OperandContext.prototype.OR = function() {
    return this.getToken(YarnParser.OR, 0);
};

OperandContext.prototype.XOR = function() {
    return this.getToken(YarnParser.XOR, 0);
};

OperandContext.prototype.ADD_EQUALS = function() {
    return this.getToken(YarnParser.ADD_EQUALS, 0);
};

OperandContext.prototype.MINUS_EQUALS = function() {
    return this.getToken(YarnParser.MINUS_EQUALS, 0);
};

OperandContext.prototype.MULTIPLY_EQUALS = function() {
    return this.getToken(YarnParser.MULTIPLY_EQUALS, 0);
};

OperandContext.prototype.DIVIDE_EQUALS = function() {
    return this.getToken(YarnParser.DIVIDE_EQUALS, 0);
};

OperandContext.prototype.MODULO_EQUALS = function() {
    return this.getToken(YarnParser.MODULO_EQUALS, 0);
};

OperandContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterOperand(this);
	}
};

OperandContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitOperand(this);
	}
};

OperandContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitOperand(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.OperandContext = OperandContext;

YarnParser.prototype.operand = function() {

    var localctx = new OperandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, YarnParser.RULE_operand);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        _la = this._input.LA(1);
        if(!(((((_la - 28)) & ~0x1f) == 0 && ((1 << (_la - 28)) & ((1 << (YarnParser.PLUS - 28)) | (1 << (YarnParser.MINUS - 28)) | (1 << (YarnParser.MULTIPLY - 28)) | (1 << (YarnParser.DIVIDE - 28)) | (1 << (YarnParser.MODULO - 28)) | (1 << (YarnParser.EQ - 28)) | (1 << (YarnParser.GT - 28)) | (1 << (YarnParser.LT - 28)) | (1 << (YarnParser.NEQ - 28)) | (1 << (YarnParser.GTE - 28)) | (1 << (YarnParser.LTE - 28)) | (1 << (YarnParser.AND - 28)) | (1 << (YarnParser.OR - 28)) | (1 << (YarnParser.XOR - 28)) | (1 << (YarnParser.ADD_EQUALS - 28)) | (1 << (YarnParser.MINUS_EQUALS - 28)) | (1 << (YarnParser.MULTIPLY_EQUALS - 28)) | (1 << (YarnParser.DIVIDE_EQUALS - 28)) | (1 << (YarnParser.MODULO_EQUALS - 28)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;


 
ValueContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NumberContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberContext.prototype = Object.create(ValueContext.prototype);
NumberContext.prototype.constructor = NumberContext;

YarnParser.NumberContext = NumberContext;

NumberContext.prototype.NUMBER = function() {
    return this.getToken(YarnParser.NUMBER, 0);
};
NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringContext.prototype = Object.create(ValueContext.prototype);
StringContext.prototype.constructor = StringContext;

YarnParser.StringContext = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(YarnParser.STRING, 0);
};
StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitString(this);
	}
};

StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VariableContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableContext.prototype = Object.create(ValueContext.prototype);
VariableContext.prototype.constructor = VariableContext;

YarnParser.VariableContext = VariableContext;

VariableContext.prototype.VARIABLE = function() {
    return this.getToken(YarnParser.VARIABLE, 0);
};
VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FalseConstantContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FalseConstantContext.prototype = Object.create(ValueContext.prototype);
FalseConstantContext.prototype.constructor = FalseConstantContext;

YarnParser.FalseConstantContext = FalseConstantContext;

FalseConstantContext.prototype.KEYWORD_FALSE = function() {
    return this.getToken(YarnParser.KEYWORD_FALSE, 0);
};
FalseConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterFalseConstant(this);
	}
};

FalseConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitFalseConstant(this);
	}
};

FalseConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitFalseConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TrueConstantContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TrueConstantContext.prototype = Object.create(ValueContext.prototype);
TrueConstantContext.prototype.constructor = TrueConstantContext;

YarnParser.TrueConstantContext = TrueConstantContext;

TrueConstantContext.prototype.KEYWORD_TRUE = function() {
    return this.getToken(YarnParser.KEYWORD_TRUE, 0);
};
TrueConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterTrueConstant(this);
	}
};

TrueConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitTrueConstant(this);
	}
};

TrueConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitTrueConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NullConstantContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NullConstantContext.prototype = Object.create(ValueContext.prototype);
NullConstantContext.prototype.constructor = NullConstantContext;

YarnParser.NullConstantContext = NullConstantContext;

NullConstantContext.prototype.KEYWORD_NULL = function() {
    return this.getToken(YarnParser.KEYWORD_NULL, 0);
};
NullConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterNullConstant(this);
	}
};

NullConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitNullConstant(this);
	}
};

NullConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitNullConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};



YarnParser.ValueContext = ValueContext;

YarnParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, YarnParser.RULE_value);
    try {
        this.state = 316;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.NUMBER:
            localctx = new NumberContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 310;
            this.match(YarnParser.NUMBER);
            break;
        case YarnParser.STRING:
            localctx = new StringContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 311;
            this.match(YarnParser.STRING);
            break;
        case YarnParser.VARIABLE:
            localctx = new VariableContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 312;
            this.match(YarnParser.VARIABLE);
            break;
        case YarnParser.KEYWORD_TRUE:
            localctx = new TrueConstantContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 313;
            this.match(YarnParser.KEYWORD_TRUE);
            break;
        case YarnParser.KEYWORD_FALSE:
            localctx = new FalseConstantContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 314;
            this.match(YarnParser.KEYWORD_FALSE);
            break;
        case YarnParser.KEYWORD_NULL:
            localctx = new NullConstantContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 315;
            this.match(YarnParser.KEYWORD_NULL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


YarnParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 25:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

YarnParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.YarnParser = YarnParser;
