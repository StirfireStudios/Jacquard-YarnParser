// Generated from YarnParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var YarnParserListener = require('./YarnParserListener').YarnParserListener;
var YarnParserVisitor = require('./YarnParserVisitor').YarnParserVisitor;

var grammarFileName = "YarnParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003@\u014c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0003\u0002\u0007\u0002@\n\u0002\f\u0002\u000e\u0002",
    "C\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003H\n\u0003",
    "\r\u0003\u000e\u0003I\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004Q\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0007\u0005V\n\u0005\f\u0005\u000e\u0005Y\u000b\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0006\u0006`\n\u0006\r\u0006",
    "\u000e\u0006a\u0003\u0006\u0003\u0006\u0005\u0006f\n\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007k\n\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\tt\n\t\f\t\u000e\tw\u000b\t",
    "\u0003\t\u0003\t\u0003\n\u0006\n|\n\n\r\n\u000e\n}\u0003\n\u0005\n\u0081",
    "\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u008d\n\f\f\f\u000e\f\u0090",
    "\u000b\f\u0003\r\u0003\r\u0007\r\u0094\n\r\f\r\u000e\r\u0097\u000b\r",
    "\u0003\r\u0007\r\u009a\n\r\f\r\u000e\r\u009d\u000b\r\u0003\r\u0005\r",
    "\u00a0\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0007\u000e\u00a9\n\u000e\f\u000e\u000e\u000e\u00ac",
    "\u000b\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0007\u000f\u00b3\n\u000f\f\u000f\u000e\u000f\u00b6\u000b\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00bc\n\u0010",
    "\f\u0010\u000e\u0010\u00bf\u000b\u0010\u0003\u0011\u0003\u0011\u0007",
    "\u0011\u00c3\n\u0011\f\u0011\u000e\u0011\u00c6\u000b\u0011\u0003\u0011",
    "\u0007\u0011\u00c9\n\u0011\f\u0011\u000e\u0011\u00cc\u000b\u0011\u0003",
    "\u0011\u0005\u0011\u00cf\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00d8\n",
    "\u0012\f\u0012\u000e\u0012\u00db\u000b\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00e2\n\u0013\f\u0013",
    "\u000e\u0013\u00e5\u000b\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0007\u0014\u00eb\n\u0014\f\u0014\u000e\u0014\u00ee\u000b\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0005\u0016\u00f6\n\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0005\u0017\u00ff\n\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0006\u0018\u0109\n\u0018\r\u0018\u000e\u0018",
    "\u010a\u0003\u0018\u0005\u0018\u010e\n\u0018\u0003\u0019\u0003\u0019",
    "\u0005\u0019\u0112\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0007\u0019\u0118\n\u0019\f\u0019\u000e\u0019\u011b\u000b\u0019",
    "\u0005\u0019\u011d\n\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0007\u001a\u0123\n\u001a\f\u001a\u000e\u001a\u0126\u000b\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u0137\n\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0007\u001d\u013d\n\u001d",
    "\f\u001d\u000e\u001d\u0140\u000b\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005",
    "\u001f\u014a\n\u001f\u0003\u001f\u0002\u00038 \u0002\u0004\u0006\b\n",
    "\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02",
    "468:<\u0002\u0005\u0003\u0002/4\u0003\u00024=\u0004\u0002 *,3\u0002",
    "\u015e\u0002A\u0003\u0002\u0002\u0002\u0004G\u0003\u0002\u0002\u0002",
    "\u0006M\u0003\u0002\u0002\u0002\bR\u0003\u0002\u0002\u0002\ne\u0003",
    "\u0002\u0002\u0002\fj\u0003\u0002\u0002\u0002\u000el\u0003\u0002\u0002",
    "\u0002\u0010p\u0003\u0002\u0002\u0002\u0012\u0080\u0003\u0002\u0002",
    "\u0002\u0014\u0082\u0003\u0002\u0002\u0002\u0016\u0086\u0003\u0002\u0002",
    "\u0002\u0018\u0091\u0003\u0002\u0002\u0002\u001a\u00a3\u0003\u0002\u0002",
    "\u0002\u001c\u00ad\u0003\u0002\u0002\u0002\u001e\u00b7\u0003\u0002\u0002",
    "\u0002 \u00c0\u0003\u0002\u0002\u0002\"\u00d2\u0003\u0002\u0002\u0002",
    "$\u00dc\u0003\u0002\u0002\u0002&\u00e6\u0003\u0002\u0002\u0002(\u00ef",
    "\u0003\u0002\u0002\u0002*\u00f3\u0003\u0002\u0002\u0002,\u00fc\u0003",
    "\u0002\u0002\u0002.\u010d\u0003\u0002\u0002\u00020\u0111\u0003\u0002",
    "\u0002\u00022\u0120\u0003\u0002\u0002\u00024\u0127\u0003\u0002\u0002",
    "\u00026\u0129\u0003\u0002\u0002\u00028\u0136\u0003\u0002\u0002\u0002",
    ":\u0141\u0003\u0002\u0002\u0002<\u0149\u0003\u0002\u0002\u0002>@\u0005",
    "\u0004\u0003\u0002?>\u0003\u0002\u0002\u0002@C\u0003\u0002\u0002\u0002",
    "A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BD\u0003\u0002\u0002",
    "\u0002CA\u0003\u0002\u0002\u0002DE\u0007\u0002\u0002\u0003E\u0003\u0003",
    "\u0002\u0002\u0002FH\u0005\u0006\u0004\u0002GF\u0003\u0002\u0002\u0002",
    "HI\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002",
    "\u0002JK\u0003\u0002\u0002\u0002KL\u0005\b\u0005\u0002L\u0005\u0003",
    "\u0002\u0002\u0002MN\u0007\u000b\u0002\u0002NP\u0007\u0011\u0002\u0002",
    "OQ\u0007\u000b\u0002\u0002PO\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002",
    "\u0002Q\u0007\u0003\u0002\u0002\u0002RW\u0007\u0012\u0002\u0002SV\u0005",
    "\n\u0006\u0002TV\u0005\u0012\n\u0002US\u0003\u0002\u0002\u0002UT\u0003",
    "\u0002\u0002\u0002VY\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002",
    "WX\u0003\u0002\u0002\u0002XZ\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002",
    "\u0002Z[\u0007\u0015\u0002\u0002[\t\u0003\u0002\u0002\u0002\\`\u0005",
    "2\u001a\u0002]`\u0005.\u0018\u0002^`\u0005\u000e\b\u0002_\\\u0003\u0002",
    "\u0002\u0002_]\u0003\u0002\u0002\u0002_^\u0003\u0002\u0002\u0002`a\u0003",
    "\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002",
    "bf\u0003\u0002\u0002\u0002cf\u0007\u0013\u0002\u0002df\u0005\u0018\r",
    "\u0002e_\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002ed\u0003\u0002",
    "\u0002\u0002f\u000b\u0003\u0002\u0002\u0002gk\u0005\u0016\f\u0002hk",
    "\u0005 \u0011\u0002ik\u0005\u0010\t\u0002jg\u0003\u0002\u0002\u0002",
    "jh\u0003\u0002\u0002\u0002ji\u0003\u0002\u0002\u0002k\r\u0003\u0002",
    "\u0002\u0002lm\u0007\u0007\u0002\u0002mn\u00058\u001d\u0002no\u0007",
    "\b\u0002\u0002o\u000f\u0003\u0002\u0002\u0002pu\u0007\t\u0002\u0002",
    "qt\u0005\n\u0006\u0002rt\u0005\u0012\n\u0002sq\u0003\u0002\u0002\u0002",
    "sr\u0003\u0002\u0002\u0002tw\u0003\u0002\u0002\u0002us\u0003\u0002\u0002",
    "\u0002uv\u0003\u0002\u0002\u0002vx\u0003\u0002\u0002\u0002wu\u0003\u0002",
    "\u0002\u0002xy\u0007\n\u0002\u0002y\u0011\u0003\u0002\u0002\u0002z|",
    "\u0005\f\u0007\u0002{z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002",
    "}{\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0081\u0003\u0002",
    "\u0002\u0002\u007f\u0081\u0005\u0014\u000b\u0002\u0080{\u0003\u0002",
    "\u0002\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0081\u0013\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u0007\u0003\u0002\u0002\u0083\u0084\u0007\u000b",
    "\u0002\u0002\u0084\u0085\u0007\u0004\u0002\u0002\u0085\u0015\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0007\u0003\u0002\u0002\u0087\u0088\u0007\u000b",
    "\u0002\u0002\u0088\u0089\u0007\u001a\u0002\u0002\u0089\u008a\u0007\u000b",
    "\u0002\u0002\u008a\u008e\u0007\u0004\u0002\u0002\u008b\u008d\u0007\f",
    "\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d\u0090\u0003\u0002",
    "\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002",
    "\u0002\u0002\u008f\u0017\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002",
    "\u0002\u0002\u0091\u0095\u0005\u001a\u000e\u0002\u0092\u0094\u0005\n",
    "\u0006\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0094\u0097\u0003\u0002",
    "\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002",
    "\u0002\u0002\u0096\u009b\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002",
    "\u0002\u0002\u0098\u009a\u0005\u001c\u000f\u0002\u0099\u0098\u0003\u0002",
    "\u0002\u0002\u009a\u009d\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002",
    "\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009f\u0003\u0002",
    "\u0002\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009e\u00a0\u0005\u001e",
    "\u0010\u0002\u009f\u009e\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002",
    "\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a2\u0005(",
    "\u0015\u0002\u00a2\u0019\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007\u0005",
    "\u0002\u0002\u00a4\u00a5\u00077\u0002\u0002\u00a5\u00a6\u00058\u001d",
    "\u0002\u00a6\u00aa\u0007\u0006\u0002\u0002\u00a7\u00a9\u0005\n\u0006",
    "\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002\u00a9\u00ac\u0003\u0002\u0002",
    "\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002",
    "\u0002\u00ab\u001b\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003\u0002\u0002",
    "\u0002\u00ad\u00ae\u0007\u0005\u0002\u0002\u00ae\u00af\u00079\u0002",
    "\u0002\u00af\u00b0\u00058\u001d\u0002\u00b0\u00b4\u0007\u0006\u0002",
    "\u0002\u00b1\u00b3\u0005\n\u0006\u0002\u00b2\u00b1\u0003\u0002\u0002",
    "\u0002\u00b3\u00b6\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002",
    "\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u001d\u0003\u0002\u0002",
    "\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007\u0005\u0002",
    "\u0002\u00b8\u00b9\u00078\u0002\u0002\u00b9\u00bd\u0007\u0006\u0002",
    "\u0002\u00ba\u00bc\u0005\n\u0006\u0002\u00bb\u00ba\u0003\u0002\u0002",
    "\u0002\u00bc\u00bf\u0003\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002",
    "\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u001f\u0003\u0002\u0002",
    "\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00c0\u00c4\u0005\"\u0012",
    "\u0002\u00c1\u00c3\u0005\n\u0006\u0002\u00c2\u00c1\u0003\u0002\u0002",
    "\u0002\u00c3\u00c6\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002",
    "\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u00ca\u0003\u0002\u0002",
    "\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c7\u00c9\u0005$\u0013",
    "\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c9\u00cc\u0003\u0002\u0002",
    "\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002",
    "\u0002\u00cb\u00ce\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002",
    "\u0002\u00cd\u00cf\u0005&\u0014\u0002\u00ce\u00cd\u0003\u0002\u0002",
    "\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002",
    "\u0002\u00d0\u00d1\u0005(\u0015\u0002\u00d1!\u0003\u0002\u0002\u0002",
    "\u00d2\u00d3\u0007\u0005\u0002\u0002\u00d3\u00d4\u00077\u0002\u0002",
    "\u00d4\u00d5\u00058\u001d\u0002\u00d5\u00d9\u0007\u0006\u0002\u0002",
    "\u00d6\u00d8\u0005\f\u0007\u0002\u00d7\u00d6\u0003\u0002\u0002\u0002",
    "\u00d8\u00db\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002",
    "\u00d9\u00da\u0003\u0002\u0002\u0002\u00da#\u0003\u0002\u0002\u0002",
    "\u00db\u00d9\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007\u0005\u0002\u0002",
    "\u00dd\u00de\u00079\u0002\u0002\u00de\u00df\u00058\u001d\u0002\u00df",
    "\u00e3\u0007\u0006\u0002\u0002\u00e0\u00e2\u0005\f\u0007\u0002\u00e1",
    "\u00e0\u0003\u0002\u0002\u0002\u00e2\u00e5\u0003\u0002\u0002\u0002\u00e3",
    "\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4",
    "%\u0003\u0002\u0002\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e6",
    "\u00e7\u0007\u0005\u0002\u0002\u00e7\u00e8\u00078\u0002\u0002\u00e8",
    "\u00ec\u0007\u0006\u0002\u0002\u00e9\u00eb\u0005\f\u0007\u0002\u00ea",
    "\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ee\u0003\u0002\u0002\u0002\u00ec",
    "\u00ea\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed",
    "\'\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef",
    "\u00f0\u0007\u0005\u0002\u0002\u00f0\u00f1\u0007:\u0002\u0002\u00f1",
    "\u00f2\u0007\u0006\u0002\u0002\u00f2)\u0003\u0002\u0002\u0002\u00f3",
    "\u00f5\u0007\u0005\u0002\u0002\u00f4\u00f6\u00075\u0002\u0002\u00f5",
    "\u00f4\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6",
    "\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007>\u0002\u0002\u00f8",
    "\u00f9\u00054\u001b\u0002\u00f9\u00fa\u00058\u001d\u0002\u00fa\u00fb",
    "\u0007\u0006\u0002\u0002\u00fb+\u0003\u0002\u0002\u0002\u00fc\u00fe",
    "\u0007\u0005\u0002\u0002\u00fd\u00ff\u00076\u0002\u0002\u00fe\u00fd",
    "\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff\u0100",
    "\u0003\u0002\u0002\u0002\u0100\u0101\u00050\u0019\u0002\u0101\u0102",
    "\u0007\u0006\u0002\u0002\u0102-\u0003\u0002\u0002\u0002\u0103\u010e",
    "\u0005*\u0016\u0002\u0104\u0108\u0007\u0005\u0002\u0002\u0105\u0109",
    "\u0007\u000b\u0002\u0002\u0106\u0109\u00058\u001d\u0002\u0107\u0109",
    "\u00056\u001c\u0002\u0108\u0105\u0003\u0002\u0002\u0002\u0108\u0106",
    "\u0003\u0002\u0002\u0002\u0108\u0107\u0003\u0002\u0002\u0002\u0109\u010a",
    "\u0003\u0002\u0002\u0002\u010a\u0108\u0003\u0002\u0002\u0002\u010a\u010b",
    "\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002\u0002\u0002\u010c\u010e",
    "\u0007\u0006\u0002\u0002\u010d\u0103\u0003\u0002\u0002\u0002\u010d\u0104",
    "\u0003\u0002\u0002\u0002\u010e/\u0003\u0002\u0002\u0002\u010f\u0112",
    "\u0007\u000b\u0002\u0002\u0110\u0112\u00056\u001c\u0002\u0111\u010f",
    "\u0003\u0002\u0002\u0002\u0111\u0110\u0003\u0002\u0002\u0002\u0112\u0113",
    "\u0003\u0002\u0002\u0002\u0113\u011c\u0007\u001d\u0002\u0002\u0114\u0119",
    "\u00058\u001d\u0002\u0115\u0116\u0007\u001f\u0002\u0002\u0116\u0118",
    "\u00058\u001d\u0002\u0117\u0115\u0003\u0002\u0002\u0002\u0118\u011b",
    "\u0003\u0002\u0002\u0002\u0119\u0117\u0003\u0002\u0002\u0002\u0119\u011a",
    "\u0003\u0002\u0002\u0002\u011a\u011d\u0003\u0002\u0002\u0002\u011b\u0119",
    "\u0003\u0002\u0002\u0002\u011c\u0114\u0003\u0002\u0002\u0002\u011c\u011d",
    "\u0003\u0002\u0002\u0002\u011d\u011e\u0003\u0002\u0002\u0002\u011e\u011f",
    "\u0007\u001e\u0002\u0002\u011f1\u0003\u0002\u0002\u0002\u0120\u0124",
    "\u0007\u000b\u0002\u0002\u0121\u0123\u0007\f\u0002\u0002\u0122\u0121",
    "\u0003\u0002\u0002\u0002\u0123\u0126\u0003\u0002\u0002\u0002\u0124\u0122",
    "\u0003\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u01253",
    "\u0003\u0002\u0002\u0002\u0126\u0124\u0003\u0002\u0002\u0002\u0127\u0128",
    "\t\u0002\u0002\u0002\u01285\u0003\u0002\u0002\u0002\u0129\u012a\t\u0003",
    "\u0002\u0002\u012a7\u0003\u0002\u0002\u0002\u012b\u012c\b\u001d\u0001",
    "\u0002\u012c\u0137\u0005<\u001f\u0002\u012d\u0137\u00050\u0019\u0002",
    "\u012e\u012f\u0007\u001d\u0002\u0002\u012f\u0130\u00058\u001d\u0002",
    "\u0130\u0131\u0007\u001e\u0002\u0002\u0131\u0137\u0003\u0002\u0002\u0002",
    "\u0132\u0133\u0007!\u0002\u0002\u0133\u0137\u00058\u001d\u0005\u0134",
    "\u0135\u0007+\u0002\u0002\u0135\u0137\u00058\u001d\u0004\u0136\u012b",
    "\u0003\u0002\u0002\u0002\u0136\u012d\u0003\u0002\u0002\u0002\u0136\u012e",
    "\u0003\u0002\u0002\u0002\u0136\u0132\u0003\u0002\u0002\u0002\u0136\u0134",
    "\u0003\u0002\u0002\u0002\u0137\u013e\u0003\u0002\u0002\u0002\u0138\u0139",
    "\f\u0003\u0002\u0002\u0139\u013a\u0005:\u001e\u0002\u013a\u013b\u0005",
    "8\u001d\u0004\u013b\u013d\u0003\u0002\u0002\u0002\u013c\u0138\u0003",
    "\u0002\u0002\u0002\u013d\u0140\u0003\u0002\u0002\u0002\u013e\u013c\u0003",
    "\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002\u013f9\u0003",
    "\u0002\u0002\u0002\u0140\u013e\u0003\u0002\u0002\u0002\u0141\u0142\t",
    "\u0004\u0002\u0002\u0142;\u0003\u0002\u0002\u0002\u0143\u014a\u0007",
    "?\u0002\u0002\u0144\u014a\u0007@\u0002\u0002\u0145\u014a\u0007>\u0002",
    "\u0002\u0146\u014a\u0007;\u0002\u0002\u0147\u014a\u0007<\u0002\u0002",
    "\u0148\u014a\u0007=\u0002\u0002\u0149\u0143\u0003\u0002\u0002\u0002",
    "\u0149\u0144\u0003\u0002\u0002\u0002\u0149\u0145\u0003\u0002\u0002\u0002",
    "\u0149\u0146\u0003\u0002\u0002\u0002\u0149\u0147\u0003\u0002\u0002\u0002",
    "\u0149\u0148\u0003\u0002\u0002\u0002\u014a=\u0003\u0002\u0002\u0002",
    "(AIPUW_aejsu}\u0080\u008e\u0095\u009b\u009f\u00aa\u00b4\u00bd\u00c4",
    "\u00ca\u00ce\u00d9\u00e3\u00ec\u00f5\u00fe\u0108\u010a\u010d\u0111\u0119",
    "\u011c\u0124\u0136\u013e\u0149"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'[['", "']]'", "'<<'", "'>>'", "'{'", "'}'", 
                     null, "'\u001E'", null, null, null, null, null, null, 
                     "':'", "'---'", null, null, "'==='", null, null, null, 
                     null, "'|'", null, null, "'('", "')'", "','", "'+'", 
                     "'-'", "'*'", "'/'", "'%'", null, null, null, null, 
                     null, null, null, null, null, null, "'+='", "'-='", 
                     "'*='", "'/='", "'%='" ];

var symbolicNames = [ null, "OPTION_START", "OPTION_END", "COMMAND_START", 
                      "COMMAND_END", "EVAL_START", "EVAL_END", "SHORTCUT_START", 
                      "SHORTCUT_END", "TEXT", "HASHTAG", "WS", "NEWLINE", 
                      "COMMENT", "BLOCK_COMMENT", "SEPARATOR", "BODY_START", 
                      "BODY_BLANKLINE", "BODY_WS", "BODY_END", "BODY_COMMENT", 
                      "BODY_BLOCK_COMMENT", "OPTION_WS", "OPTION_BLOCK_COMMENT", 
                      "OPTION_SEPARATOR", "COMMAND_WS", "COMMAND_BLOCK_COMMENT", 
                      "LBRACKET", "RBRACKET", "COMMA", "PLUS", "MINUS", 
                      "MULTIPLY", "DIVIDE", "MODULO", "EQ", "GT", "LT", 
                      "NEQ", "GTE", "LTE", "NOT", "AND", "OR", "XOR", "ADD_EQUALS", 
                      "MINUS_EQUALS", "MULTIPLY_EQUALS", "DIVIDE_EQUALS", 
                      "MODULO_EQUALS", "KEYWORD_TO", "KEYWORD_SET", "KEYWORD_FUNC", 
                      "KEYWORD_IF", "KEYWORD_ELSE", "KEYWORD_ELSE_IF", "KEYWORD_ENDIF", 
                      "KEYWORD_TRUE", "KEYWORD_FALSE", "KEYWORD_NULL", "VARIABLE", 
                      "NUMBER", "STRING" ];

var ruleNames =  [ "dialogue", "node", "header", "body", "statement", "ostatement", 
                   "eval_statement", "shortcut_statement", "option_group", 
                   "option_link", "option_with_text", "if_statement", "if_clause", 
                   "else_if_clause", "else_clause", "of_statement", "of_clause", 
                   "else_of_clause", "oelse_clause", "endif_clause", "set_command", 
                   "fuction_command", "command_statement", "function_call", 
                   "text", "set_operands", "keyword", "expression", "operand", 
                   "value" ];

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
YarnParser.EVAL_START = 5;
YarnParser.EVAL_END = 6;
YarnParser.SHORTCUT_START = 7;
YarnParser.SHORTCUT_END = 8;
YarnParser.TEXT = 9;
YarnParser.HASHTAG = 10;
YarnParser.WS = 11;
YarnParser.NEWLINE = 12;
YarnParser.COMMENT = 13;
YarnParser.BLOCK_COMMENT = 14;
YarnParser.SEPARATOR = 15;
YarnParser.BODY_START = 16;
YarnParser.BODY_BLANKLINE = 17;
YarnParser.BODY_WS = 18;
YarnParser.BODY_END = 19;
YarnParser.BODY_COMMENT = 20;
YarnParser.BODY_BLOCK_COMMENT = 21;
YarnParser.OPTION_WS = 22;
YarnParser.OPTION_BLOCK_COMMENT = 23;
YarnParser.OPTION_SEPARATOR = 24;
YarnParser.COMMAND_WS = 25;
YarnParser.COMMAND_BLOCK_COMMENT = 26;
YarnParser.LBRACKET = 27;
YarnParser.RBRACKET = 28;
YarnParser.COMMA = 29;
YarnParser.PLUS = 30;
YarnParser.MINUS = 31;
YarnParser.MULTIPLY = 32;
YarnParser.DIVIDE = 33;
YarnParser.MODULO = 34;
YarnParser.EQ = 35;
YarnParser.GT = 36;
YarnParser.LT = 37;
YarnParser.NEQ = 38;
YarnParser.GTE = 39;
YarnParser.LTE = 40;
YarnParser.NOT = 41;
YarnParser.AND = 42;
YarnParser.OR = 43;
YarnParser.XOR = 44;
YarnParser.ADD_EQUALS = 45;
YarnParser.MINUS_EQUALS = 46;
YarnParser.MULTIPLY_EQUALS = 47;
YarnParser.DIVIDE_EQUALS = 48;
YarnParser.MODULO_EQUALS = 49;
YarnParser.KEYWORD_TO = 50;
YarnParser.KEYWORD_SET = 51;
YarnParser.KEYWORD_FUNC = 52;
YarnParser.KEYWORD_IF = 53;
YarnParser.KEYWORD_ELSE = 54;
YarnParser.KEYWORD_ELSE_IF = 55;
YarnParser.KEYWORD_ENDIF = 56;
YarnParser.KEYWORD_TRUE = 57;
YarnParser.KEYWORD_FALSE = 58;
YarnParser.KEYWORD_NULL = 59;
YarnParser.VARIABLE = 60;
YarnParser.NUMBER = 61;
YarnParser.STRING = 62;

YarnParser.RULE_dialogue = 0;
YarnParser.RULE_node = 1;
YarnParser.RULE_header = 2;
YarnParser.RULE_body = 3;
YarnParser.RULE_statement = 4;
YarnParser.RULE_ostatement = 5;
YarnParser.RULE_eval_statement = 6;
YarnParser.RULE_shortcut_statement = 7;
YarnParser.RULE_option_group = 8;
YarnParser.RULE_option_link = 9;
YarnParser.RULE_option_with_text = 10;
YarnParser.RULE_if_statement = 11;
YarnParser.RULE_if_clause = 12;
YarnParser.RULE_else_if_clause = 13;
YarnParser.RULE_else_clause = 14;
YarnParser.RULE_of_statement = 15;
YarnParser.RULE_of_clause = 16;
YarnParser.RULE_else_of_clause = 17;
YarnParser.RULE_oelse_clause = 18;
YarnParser.RULE_endif_clause = 19;
YarnParser.RULE_set_command = 20;
YarnParser.RULE_fuction_command = 21;
YarnParser.RULE_command_statement = 22;
YarnParser.RULE_function_call = 23;
YarnParser.RULE_text = 24;
YarnParser.RULE_set_operands = 25;
YarnParser.RULE_keyword = 26;
YarnParser.RULE_expression = 27;
YarnParser.RULE_operand = 28;
YarnParser.RULE_value = 29;

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
        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.TEXT) {
            this.state = 60;
            this.node();
            this.state = 65;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 66;
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
        this.state = 69; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 68;
            this.header();
            this.state = 71; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===YarnParser.TEXT);
        this.state = 73;
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
        this.state = 75;
        localctx.headerName = this.match(YarnParser.TEXT);
        this.state = 76;
        this.match(YarnParser.SEPARATOR);
        this.state = 78;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 77;
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
        this.state = 80;
        this.match(YarnParser.BODY_START);
        this.state = 85;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.OPTION_START) | (1 << YarnParser.COMMAND_START) | (1 << YarnParser.EVAL_START) | (1 << YarnParser.SHORTCUT_START) | (1 << YarnParser.TEXT) | (1 << YarnParser.BODY_BLANKLINE))) !== 0)) {
            this.state = 83;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            switch(la_) {
            case 1:
                this.state = 81;
                this.statement();
                break;

            case 2:
                this.state = 82;
                this.option_group();
                break;

            }
            this.state = 87;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 88;
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

LineContext.prototype.eval_statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Eval_statementContext);
    } else {
        return this.getTypedRuleContext(Eval_statementContext,i);
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
        this.state = 99;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            localctx = new LineContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 93; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 93;
            		this._errHandler.sync(this);
            		switch(this._input.LA(1)) {
            		case YarnParser.TEXT:
            		    this.state = 90;
            		    this.text();
            		    break;
            		case YarnParser.COMMAND_START:
            		    this.state = 91;
            		    this.command_statement();
            		    break;
            		case YarnParser.EVAL_START:
            		    this.state = 92;
            		    this.eval_statement();
            		    break;
            		default:
            		    throw new antlr4.error.NoViableAltException(this);
            		}
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 95; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            localctx = new BlankContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 97;
            this.match(YarnParser.BODY_BLANKLINE);
            break;

        case 3:
            localctx = new IfContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 98;
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
        this.state = 104;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.OPTION_START:
            localctx = new OptionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 101;
            this.option_with_text();
            break;
        case YarnParser.COMMAND_START:
            localctx = new OptionIfContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 102;
            this.of_statement();
            break;
        case YarnParser.SHORTCUT_START:
            localctx = new ShortcutContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 103;
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

function Eval_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_eval_statement;
    return this;
}

Eval_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Eval_statementContext.prototype.constructor = Eval_statementContext;

Eval_statementContext.prototype.EVAL_START = function() {
    return this.getToken(YarnParser.EVAL_START, 0);
};

Eval_statementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Eval_statementContext.prototype.EVAL_END = function() {
    return this.getToken(YarnParser.EVAL_END, 0);
};

Eval_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterEval_statement(this);
	}
};

Eval_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitEval_statement(this);
	}
};

Eval_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitEval_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Eval_statementContext = Eval_statementContext;

YarnParser.prototype.eval_statement = function() {

    var localctx = new Eval_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, YarnParser.RULE_eval_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(YarnParser.EVAL_START);
        this.state = 107;
        this.expression(0);
        this.state = 108;
        this.match(YarnParser.EVAL_END);
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
    this.enterRule(localctx, 14, YarnParser.RULE_shortcut_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.match(YarnParser.SHORTCUT_START);
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.OPTION_START) | (1 << YarnParser.COMMAND_START) | (1 << YarnParser.EVAL_START) | (1 << YarnParser.SHORTCUT_START) | (1 << YarnParser.TEXT) | (1 << YarnParser.BODY_BLANKLINE))) !== 0)) {
            this.state = 113;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
            switch(la_) {
            case 1:
                this.state = 111;
                this.statement();
                break;

            case 2:
                this.state = 112;
                this.option_group();
                break;

            }
            this.state = 117;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 118;
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
    this.enterRule(localctx, 16, YarnParser.RULE_option_group);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.state = 121; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 120;
            		this.ostatement();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 123; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            this.state = 125;
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
    this.enterRule(localctx, 18, YarnParser.RULE_option_link);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(YarnParser.OPTION_START);
        this.state = 129;
        localctx.link = this.match(YarnParser.TEXT);
        this.state = 130;
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
    this.enterRule(localctx, 20, YarnParser.RULE_option_with_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(YarnParser.OPTION_START);
        this.state = 133;
        localctx.link = this.match(YarnParser.TEXT);
        this.state = 134;
        this.match(YarnParser.OPTION_SEPARATOR);
        this.state = 135;
        localctx.optionText = this.match(YarnParser.TEXT);
        this.state = 136;
        this.match(YarnParser.OPTION_END);
        this.state = 140;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.HASHTAG) {
            this.state = 137;
            localctx.hashtag = this.match(YarnParser.HASHTAG);
            this.state = 142;
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
    this.enterRule(localctx, 22, YarnParser.RULE_if_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.if_clause();
        this.state = 147;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 144;
                this.statement(); 
            }
            this.state = 149;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

        this.state = 153;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 150;
                this.else_if_clause(); 
            }
            this.state = 155;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

        this.state = 157;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 156;
            this.else_clause();

        }
        this.state = 159;
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
    this.enterRule(localctx, 24, YarnParser.RULE_if_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(YarnParser.COMMAND_START);
        this.state = 162;
        this.match(YarnParser.KEYWORD_IF);
        this.state = 163;
        localctx.predicate = this.expression(0);
        this.state = 164;
        this.match(YarnParser.COMMAND_END);
        this.state = 168;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 165;
                localctx.statements = this.statement(); 
            }
            this.state = 170;
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
    this.enterRule(localctx, 26, YarnParser.RULE_else_if_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.match(YarnParser.COMMAND_START);
        this.state = 172;
        this.match(YarnParser.KEYWORD_ELSE_IF);
        this.state = 173;
        localctx.predicate = this.expression(0);
        this.state = 174;
        this.match(YarnParser.COMMAND_END);
        this.state = 178;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 175;
                localctx.statements = this.statement(); 
            }
            this.state = 180;
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
    this.enterRule(localctx, 28, YarnParser.RULE_else_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(YarnParser.COMMAND_START);
        this.state = 182;
        this.match(YarnParser.KEYWORD_ELSE);
        this.state = 183;
        this.match(YarnParser.COMMAND_END);
        this.state = 187;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 184;
                localctx.statements = this.statement(); 
            }
            this.state = 189;
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
    this.enterRule(localctx, 30, YarnParser.RULE_of_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.of_clause();
        this.state = 194;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 191;
                this.statement(); 
            }
            this.state = 196;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
        }

        this.state = 200;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 197;
                this.else_of_clause(); 
            }
            this.state = 202;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
        }

        this.state = 204;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 203;
            this.oelse_clause();

        }
        this.state = 206;
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
    this.enterRule(localctx, 32, YarnParser.RULE_of_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.match(YarnParser.COMMAND_START);
        this.state = 209;
        this.match(YarnParser.KEYWORD_IF);
        this.state = 210;
        localctx.predicate = this.expression(0);
        this.state = 211;
        this.match(YarnParser.COMMAND_END);
        this.state = 215;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 212;
                localctx.statements = this.ostatement(); 
            }
            this.state = 217;
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
    this.enterRule(localctx, 34, YarnParser.RULE_else_of_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this.match(YarnParser.COMMAND_START);
        this.state = 219;
        this.match(YarnParser.KEYWORD_ELSE_IF);
        this.state = 220;
        localctx.predicate = this.expression(0);
        this.state = 221;
        this.match(YarnParser.COMMAND_END);
        this.state = 225;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 222;
                localctx.statements = this.ostatement(); 
            }
            this.state = 227;
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
    this.enterRule(localctx, 36, YarnParser.RULE_oelse_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
        this.match(YarnParser.COMMAND_START);
        this.state = 229;
        this.match(YarnParser.KEYWORD_ELSE);
        this.state = 230;
        this.match(YarnParser.COMMAND_END);
        this.state = 234;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 231;
                localctx.statements = this.ostatement(); 
            }
            this.state = 236;
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
    this.enterRule(localctx, 38, YarnParser.RULE_endif_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.match(YarnParser.COMMAND_START);
        this.state = 238;
        this.match(YarnParser.KEYWORD_ENDIF);
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

Set_commandContext.prototype.set_operands = function() {
    return this.getTypedRuleContext(Set_operandsContext,0);
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
    this.enterRule(localctx, 40, YarnParser.RULE_set_command);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.match(YarnParser.COMMAND_START);
        this.state = 243;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.KEYWORD_SET) {
            this.state = 242;
            this.match(YarnParser.KEYWORD_SET);
        }

        this.state = 245;
        this.match(YarnParser.VARIABLE);
        this.state = 246;
        this.set_operands();
        this.state = 247;
        this.expression(0);
        this.state = 248;
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
    this.enterRule(localctx, 42, YarnParser.RULE_fuction_command);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        this.match(YarnParser.COMMAND_START);
        this.state = 252;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        if(la_===1) {
            this.state = 251;
            this.match(YarnParser.KEYWORD_FUNC);

        }
        this.state = 254;
        this.function_call();
        this.state = 255;
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
    this.enterRule(localctx, 44, YarnParser.RULE_command_statement);
    var _la = 0; // Token type
    try {
        this.state = 267;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            localctx = new SetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 257;
            this.set_command();
            break;

        case 2:
            localctx = new CommandContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 258;
            this.match(YarnParser.COMMAND_START);
            this.state = 262; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 262;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 259;
                    this.match(YarnParser.TEXT);
                    break;

                case 2:
                    this.state = 260;
                    this.expression(0);
                    break;

                case 3:
                    this.state = 261;
                    this.keyword();
                    break;

                }
                this.state = 264; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.TEXT) | (1 << YarnParser.LBRACKET) | (1 << YarnParser.MINUS))) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (YarnParser.NOT - 41)) | (1 << (YarnParser.KEYWORD_TO - 41)) | (1 << (YarnParser.KEYWORD_SET - 41)) | (1 << (YarnParser.KEYWORD_FUNC - 41)) | (1 << (YarnParser.KEYWORD_IF - 41)) | (1 << (YarnParser.KEYWORD_ELSE - 41)) | (1 << (YarnParser.KEYWORD_ELSE_IF - 41)) | (1 << (YarnParser.KEYWORD_ENDIF - 41)) | (1 << (YarnParser.KEYWORD_TRUE - 41)) | (1 << (YarnParser.KEYWORD_FALSE - 41)) | (1 << (YarnParser.KEYWORD_NULL - 41)) | (1 << (YarnParser.VARIABLE - 41)) | (1 << (YarnParser.NUMBER - 41)) | (1 << (YarnParser.STRING - 41)))) !== 0));
            this.state = 266;
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
    this.enterRule(localctx, 46, YarnParser.RULE_function_call);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.TEXT:
            this.state = 269;
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
            this.state = 270;
            this.keyword();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 273;
        this.match(YarnParser.LBRACKET);
        this.state = 282;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.TEXT) | (1 << YarnParser.LBRACKET) | (1 << YarnParser.MINUS))) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (YarnParser.NOT - 41)) | (1 << (YarnParser.KEYWORD_TO - 41)) | (1 << (YarnParser.KEYWORD_SET - 41)) | (1 << (YarnParser.KEYWORD_FUNC - 41)) | (1 << (YarnParser.KEYWORD_IF - 41)) | (1 << (YarnParser.KEYWORD_ELSE - 41)) | (1 << (YarnParser.KEYWORD_ELSE_IF - 41)) | (1 << (YarnParser.KEYWORD_ENDIF - 41)) | (1 << (YarnParser.KEYWORD_TRUE - 41)) | (1 << (YarnParser.KEYWORD_FALSE - 41)) | (1 << (YarnParser.KEYWORD_NULL - 41)) | (1 << (YarnParser.VARIABLE - 41)) | (1 << (YarnParser.NUMBER - 41)) | (1 << (YarnParser.STRING - 41)))) !== 0)) {
            this.state = 274;
            localctx._expression = this.expression(0);
            localctx.args.push(localctx._expression);
            this.state = 279;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===YarnParser.COMMA) {
                this.state = 275;
                this.match(YarnParser.COMMA);
                this.state = 276;
                localctx._expression = this.expression(0);
                localctx.args.push(localctx._expression);
                this.state = 281;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 284;
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
    this.enterRule(localctx, 48, YarnParser.RULE_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.match(YarnParser.TEXT);
        this.state = 290;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.HASHTAG) {
            this.state = 287;
            localctx.hashtag = this.match(YarnParser.HASHTAG);
            this.state = 292;
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

function Set_operandsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_set_operands;
    return this;
}

Set_operandsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Set_operandsContext.prototype.constructor = Set_operandsContext;

Set_operandsContext.prototype.KEYWORD_TO = function() {
    return this.getToken(YarnParser.KEYWORD_TO, 0);
};

Set_operandsContext.prototype.ADD_EQUALS = function() {
    return this.getToken(YarnParser.ADD_EQUALS, 0);
};

Set_operandsContext.prototype.MINUS_EQUALS = function() {
    return this.getToken(YarnParser.MINUS_EQUALS, 0);
};

Set_operandsContext.prototype.MULTIPLY_EQUALS = function() {
    return this.getToken(YarnParser.MULTIPLY_EQUALS, 0);
};

Set_operandsContext.prototype.DIVIDE_EQUALS = function() {
    return this.getToken(YarnParser.DIVIDE_EQUALS, 0);
};

Set_operandsContext.prototype.MODULO_EQUALS = function() {
    return this.getToken(YarnParser.MODULO_EQUALS, 0);
};

Set_operandsContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterSet_operands(this);
	}
};

Set_operandsContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitSet_operands(this);
	}
};

Set_operandsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof YarnParserVisitor ) {
        return visitor.visitSet_operands(this);
    } else {
        return visitor.visitChildren(this);
    }
};




YarnParser.Set_operandsContext = Set_operandsContext;

YarnParser.prototype.set_operands = function() {

    var localctx = new Set_operandsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, YarnParser.RULE_set_operands);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        _la = this._input.LA(1);
        if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (YarnParser.ADD_EQUALS - 45)) | (1 << (YarnParser.MINUS_EQUALS - 45)) | (1 << (YarnParser.MULTIPLY_EQUALS - 45)) | (1 << (YarnParser.DIVIDE_EQUALS - 45)) | (1 << (YarnParser.MODULO_EQUALS - 45)) | (1 << (YarnParser.KEYWORD_TO - 45)))) !== 0))) {
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
    this.enterRule(localctx, 52, YarnParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        _la = this._input.LA(1);
        if(!(((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (YarnParser.KEYWORD_TO - 50)) | (1 << (YarnParser.KEYWORD_SET - 50)) | (1 << (YarnParser.KEYWORD_FUNC - 50)) | (1 << (YarnParser.KEYWORD_IF - 50)) | (1 << (YarnParser.KEYWORD_ELSE - 50)) | (1 << (YarnParser.KEYWORD_ELSE_IF - 50)) | (1 << (YarnParser.KEYWORD_ENDIF - 50)) | (1 << (YarnParser.KEYWORD_TRUE - 50)) | (1 << (YarnParser.KEYWORD_FALSE - 50)) | (1 << (YarnParser.KEYWORD_NULL - 50)))) !== 0))) {
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
    var _startState = 54;
    this.enterRecursionRule(localctx, 54, YarnParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ValueExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 298;
            this.value();
            break;

        case 2:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 299;
            this.function_call();
            break;

        case 3:
            localctx = new GroupedExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 300;
            this.match(YarnParser.LBRACKET);
            this.state = 301;
            this.expression(0);
            this.state = 302;
            this.match(YarnParser.RBRACKET);
            break;

        case 4:
            localctx = new NegativeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 304;
            this.match(YarnParser.MINUS);
            this.state = 305;
            this.expression(3);
            break;

        case 5:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 306;
            this.match(YarnParser.NOT);
            this.state = 307;
            this.expression(2);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 316;
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
                this.state = 310;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 311;
                this.operand();
                this.state = 312;
                localctx.right = this.expression(2); 
            }
            this.state = 318;
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
    this.enterRule(localctx, 56, YarnParser.RULE_operand);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        _la = this._input.LA(1);
        if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (YarnParser.PLUS - 30)) | (1 << (YarnParser.MINUS - 30)) | (1 << (YarnParser.MULTIPLY - 30)) | (1 << (YarnParser.DIVIDE - 30)) | (1 << (YarnParser.MODULO - 30)) | (1 << (YarnParser.EQ - 30)) | (1 << (YarnParser.GT - 30)) | (1 << (YarnParser.LT - 30)) | (1 << (YarnParser.NEQ - 30)) | (1 << (YarnParser.GTE - 30)) | (1 << (YarnParser.LTE - 30)) | (1 << (YarnParser.AND - 30)) | (1 << (YarnParser.OR - 30)) | (1 << (YarnParser.XOR - 30)) | (1 << (YarnParser.ADD_EQUALS - 30)) | (1 << (YarnParser.MINUS_EQUALS - 30)) | (1 << (YarnParser.MULTIPLY_EQUALS - 30)) | (1 << (YarnParser.DIVIDE_EQUALS - 30)) | (1 << (YarnParser.MODULO_EQUALS - 30)))) !== 0))) {
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
    this.enterRule(localctx, 58, YarnParser.RULE_value);
    try {
        this.state = 327;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.NUMBER:
            localctx = new NumberContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 321;
            this.match(YarnParser.NUMBER);
            break;
        case YarnParser.STRING:
            localctx = new StringContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 322;
            this.match(YarnParser.STRING);
            break;
        case YarnParser.VARIABLE:
            localctx = new VariableContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 323;
            this.match(YarnParser.VARIABLE);
            break;
        case YarnParser.KEYWORD_TRUE:
            localctx = new TrueConstantContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 324;
            this.match(YarnParser.KEYWORD_TRUE);
            break;
        case YarnParser.KEYWORD_FALSE:
            localctx = new FalseConstantContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 325;
            this.match(YarnParser.KEYWORD_FALSE);
            break;
        case YarnParser.KEYWORD_NULL:
            localctx = new NullConstantContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 326;
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
	case 27:
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
