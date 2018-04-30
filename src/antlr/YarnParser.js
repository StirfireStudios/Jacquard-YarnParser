// Generated from YarnParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var YarnParserListener = require('./YarnParserListener').YarnParserListener;
var grammarFileName = "YarnParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003?\u0166\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0003\u0002\u0007\u0002B\n\u0002\f\u0002\u000e",
    "\u0002E\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003",
    "J\n\u0003\r\u0003\u000e\u0003K\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004S\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u0005X\n\u0005\f\u0005\u000e\u0005[\u000b\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0005\u0006a\n\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0006\u0006g\n\u0006\r\u0006\u000e",
    "\u0006h\u0003\u0006\u0005\u0006l\n\u0006\u0005\u0006n\n\u0006\u0003",
    "\u0007\u0003\u0007\u0005\u0007r\n\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007v\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007z\n\u0007\u0005\u0007",
    "|\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007",
    "\t\u0085\n\t\f\t\u000e\t\u0088\u000b\t\u0003\t\u0003\t\u0003\n\u0006",
    "\n\u008d\n\n\r\n\u000e\n\u008e\u0003\n\u0005\n\u0092\n\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0007\f\u009e\n\f\f\f\u000e\f\u00a1\u000b\f\u0003\r",
    "\u0003\r\u0007\r\u00a5\n\r\f\r\u000e\r\u00a8\u000b\r\u0003\r\u0005\r",
    "\u00ab\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u00b3\n\u000e\u0003\u000e\u0003\u000e\u0007\u000e",
    "\u00b7\n\u000e\f\u000e\u000e\u000e\u00ba\u000b\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00c0\n\u000f\u0003\u000f",
    "\u0003\u000f\u0007\u000f\u00c4\n\u000f\f\u000f\u000e\u000f\u00c7\u000b",
    "\u000f\u0003\u0010\u0003\u0010\u0005\u0010\u00cb\n\u0010\u0003\u0010",
    "\u0003\u0010\u0007\u0010\u00cf\n\u0010\f\u0010\u000e\u0010\u00d2\u000b",
    "\u0010\u0003\u0011\u0003\u0011\u0007\u0011\u00d6\n\u0011\f\u0011\u000e",
    "\u0011\u00d9\u000b\u0011\u0003\u0011\u0005\u0011\u00dc\n\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u00e4\n\u0012\u0003\u0012\u0007\u0012\u00e7\n\u0012\f\u0012\u000e",
    "\u0012\u00ea\u000b\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u00f0\n\u0013\u0003\u0013\u0007\u0013\u00f3\n\u0013\f\u0013",
    "\u000e\u0013\u00f6\u000b\u0013\u0003\u0014\u0003\u0014\u0005\u0014\u00fa",
    "\n\u0014\u0003\u0014\u0007\u0014\u00fd\n\u0014\f\u0014\u000e\u0014\u0100",
    "\u000b\u0014\u0003\u0015\u0003\u0015\u0005\u0015\u0104\n\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0006",
    "\u0018\u0118\n\u0018\r\u0018\u000e\u0018\u0119\u0003\u0018\u0005\u0018",
    "\u011d\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u0122",
    "\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019",
    "\u0128\n\u0019\f\u0019\u000e\u0019\u012b\u000b\u0019\u0005\u0019\u012d",
    "\n\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0007\u001a",
    "\u0133\n\u001a\f\u001a\u000e\u001a\u0136\u000b\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u014f\n\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0007\u001d\u0155\n",
    "\u001d\f\u001d\u000e\u001d\u0158\u000b\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0005",
    " \u0164\n \u0003 \fh\u00a6\u00b8\u00c5\u00d0\u00d7\u00e8\u00f4\u00fe",
    "\u0119\u00038!\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>\u0002\u0007\u0004\u0002\u0005",
    "\u0005\u001a\u001a\u0003\u00027<\u0003\u0002<?\u0004\u0002(246\u0003",
    "\u00027;\u0002\u0188\u0002C\u0003\u0002\u0002\u0002\u0004I\u0003\u0002",
    "\u0002\u0002\u0006O\u0003\u0002\u0002\u0002\bT\u0003\u0002\u0002\u0002",
    "\nm\u0003\u0002\u0002\u0002\f{\u0003\u0002\u0002\u0002\u000e}\u0003",
    "\u0002\u0002\u0002\u0010\u0081\u0003\u0002\u0002\u0002\u0012\u0091\u0003",
    "\u0002\u0002\u0002\u0014\u0093\u0003\u0002\u0002\u0002\u0016\u0097\u0003",
    "\u0002\u0002\u0002\u0018\u00a2\u0003\u0002\u0002\u0002\u001a\u00ae\u0003",
    "\u0002\u0002\u0002\u001c\u00bb\u0003\u0002\u0002\u0002\u001e\u00c8\u0003",
    "\u0002\u0002\u0002 \u00d3\u0003\u0002\u0002\u0002\"\u00df\u0003\u0002",
    "\u0002\u0002$\u00eb\u0003\u0002\u0002\u0002&\u00f7\u0003\u0002\u0002",
    "\u0002(\u0101\u0003\u0002\u0002\u0002*\u0105\u0003\u0002\u0002\u0002",
    ",\u010b\u0003\u0002\u0002\u0002.\u011c\u0003\u0002\u0002\u00020\u0121",
    "\u0003\u0002\u0002\u00022\u0130\u0003\u0002\u0002\u00024\u0137\u0003",
    "\u0002\u0002\u00026\u0139\u0003\u0002\u0002\u00028\u014e\u0003\u0002",
    "\u0002\u0002:\u0159\u0003\u0002\u0002\u0002<\u015b\u0003\u0002\u0002",
    "\u0002>\u0163\u0003\u0002\u0002\u0002@B\u0005\u0004\u0003\u0002A@\u0003",
    "\u0002\u0002\u0002BE\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002",
    "CD\u0003\u0002\u0002\u0002DF\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002",
    "\u0002FG\u0007\u0002\u0002\u0003G\u0003\u0003\u0002\u0002\u0002HJ\u0005",
    "\u0006\u0004\u0002IH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002",
    "KI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002",
    "\u0002MN\u0005\b\u0005\u0002N\u0005\u0003\u0002\u0002\u0002OP\u0007",
    "\u000b\u0002\u0002PR\u0007\u0011\u0002\u0002QS\u0007\u000b\u0002\u0002",
    "RQ\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002S\u0007\u0003\u0002",
    "\u0002\u0002TY\u0007\u0015\u0002\u0002UX\u0005\u0012\n\u0002VX\u0005",
    "\n\u0006\u0002WU\u0003\u0002\u0002\u0002WV\u0003\u0002\u0002\u0002X",
    "[\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002",
    "\u0002Z\\\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002\\]\u0007",
    "\u0017\u0002\u0002]\t\u0003\u0002\u0002\u0002^`\u0005\u0018\r\u0002",
    "_a\u0007\u000e\u0002\u0002`_\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002",
    "\u0002an\u0003\u0002\u0002\u0002bn\u0007\u000e\u0002\u0002cg\u00052",
    "\u001a\u0002dg\u0005.\u0018\u0002eg\u0005\u000e\b\u0002fc\u0003\u0002",
    "\u0002\u0002fd\u0003\u0002\u0002\u0002fe\u0003\u0002\u0002\u0002gh\u0003",
    "\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002",
    "ik\u0003\u0002\u0002\u0002jl\u0007\u000e\u0002\u0002kj\u0003\u0002\u0002",
    "\u0002kl\u0003\u0002\u0002\u0002ln\u0003\u0002\u0002\u0002m^\u0003\u0002",
    "\u0002\u0002mb\u0003\u0002\u0002\u0002mf\u0003\u0002\u0002\u0002n\u000b",
    "\u0003\u0002\u0002\u0002oq\u0005\u0016\f\u0002pr\u0007\u000e\u0002\u0002",
    "qp\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002r|\u0003\u0002\u0002",
    "\u0002su\u0005 \u0011\u0002tv\u0007\u000e\u0002\u0002ut\u0003\u0002",
    "\u0002\u0002uv\u0003\u0002\u0002\u0002v|\u0003\u0002\u0002\u0002wy\u0005",
    "\u0010\t\u0002xz\u0007\u000e\u0002\u0002yx\u0003\u0002\u0002\u0002y",
    "z\u0003\u0002\u0002\u0002z|\u0003\u0002\u0002\u0002{o\u0003\u0002\u0002",
    "\u0002{s\u0003\u0002\u0002\u0002{w\u0003\u0002\u0002\u0002|\r\u0003",
    "\u0002\u0002\u0002}~\u0007\u0007\u0002\u0002~\u007f\u00058\u001d\u0002",
    "\u007f\u0080\u0007\b\u0002\u0002\u0080\u000f\u0003\u0002\u0002\u0002",
    "\u0081\u0086\u0007\t\u0002\u0002\u0082\u0085\u0005\u0012\n\u0002\u0083",
    "\u0085\u0005\n\u0006\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084",
    "\u0083\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086",
    "\u0084\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087",
    "\u0089\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0089",
    "\u008a\u0007\n\u0002\u0002\u008a\u0011\u0003\u0002\u0002\u0002\u008b",
    "\u008d\u0005\f\u0007\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d",
    "\u008e\u0003\u0002\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e",
    "\u008f\u0003\u0002\u0002\u0002\u008f\u0092\u0003\u0002\u0002\u0002\u0090",
    "\u0092\u0005\u0014\u000b\u0002\u0091\u008c\u0003\u0002\u0002\u0002\u0091",
    "\u0090\u0003\u0002\u0002\u0002\u0092\u0013\u0003\u0002\u0002\u0002\u0093",
    "\u0094\u0007\u0003\u0002\u0002\u0094\u0095\u0007\u000b\u0002\u0002\u0095",
    "\u0096\u0007\u0004\u0002\u0002\u0096\u0015\u0003\u0002\u0002\u0002\u0097",
    "\u0098\u0007\u0003\u0002\u0002\u0098\u0099\u0007\u000b\u0002\u0002\u0099",
    "\u009a\u0007\"\u0002\u0002\u009a\u009b\u0007\u000b\u0002\u0002\u009b",
    "\u009f\u0007\u0004\u0002\u0002\u009c\u009e\u0007\f\u0002\u0002\u009d",
    "\u009c\u0003\u0002\u0002\u0002\u009e\u00a1\u0003\u0002\u0002\u0002\u009f",
    "\u009d\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0",
    "\u0017\u0003\u0002\u0002\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a2",
    "\u00a6\u0005\u001a\u000e\u0002\u00a3\u00a5\u0005\u001c\u000f\u0002\u00a4",
    "\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a8\u0003\u0002\u0002\u0002\u00a6",
    "\u00a7\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a7",
    "\u00aa\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a9",
    "\u00ab\u0005\u001e\u0010\u0002\u00aa\u00a9\u0003\u0002\u0002\u0002\u00aa",
    "\u00ab\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac",
    "\u00ad\u0005(\u0015\u0002\u00ad\u0019\u0003\u0002\u0002\u0002\u00ae",
    "\u00af\u0007\u001c\u0002\u0002\u00af\u00b0\u00058\u001d\u0002\u00b0",
    "\u00b2\u0007\u0006\u0002\u0002\u00b1\u00b3\u0007\u000e\u0002\u0002\u00b2",
    "\u00b1\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3",
    "\u00b8\u0003\u0002\u0002\u0002\u00b4\u00b7\u0005\u0012\n\u0002\u00b5",
    "\u00b7\u0005\n\u0006\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6",
    "\u00b5\u0003\u0002\u0002\u0002\u00b7\u00ba\u0003\u0002\u0002\u0002\u00b8",
    "\u00b9\u0003\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b9",
    "\u001b\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb",
    "\u00bc\u0007\u001d\u0002\u0002\u00bc\u00bd\u00058\u001d\u0002\u00bd",
    "\u00bf\u0007\u0006\u0002\u0002\u00be\u00c0\u0007\u000e\u0002\u0002\u00bf",
    "\u00be\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0",
    "\u00c5\u0003\u0002\u0002\u0002\u00c1\u00c4\u0005\u0012\n\u0002\u00c2",
    "\u00c4\u0005\n\u0006\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c3",
    "\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c7\u0003\u0002\u0002\u0002\u00c5",
    "\u00c6\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c6",
    "\u001d\u0003\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c8",
    "\u00ca\u0007\u001e\u0002\u0002\u00c9\u00cb\u0007\u000e\u0002\u0002\u00ca",
    "\u00c9\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb",
    "\u00d0\u0003\u0002\u0002\u0002\u00cc\u00cf\u0005\u0012\n\u0002\u00cd",
    "\u00cf\u0005\n\u0006\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00ce",
    "\u00cd\u0003\u0002\u0002\u0002\u00cf\u00d2\u0003\u0002\u0002\u0002\u00d0",
    "\u00d1\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d1",
    "\u001f\u0003\u0002\u0002\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d3",
    "\u00d7\u0005\"\u0012\u0002\u00d4\u00d6\u0005$\u0013\u0002\u00d5\u00d4",
    "\u0003\u0002\u0002\u0002\u00d6\u00d9\u0003\u0002\u0002\u0002\u00d7\u00d8",
    "\u0003\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d8\u00db",
    "\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002\u00da\u00dc",
    "\u0005&\u0014\u0002\u00db\u00da\u0003\u0002\u0002\u0002\u00db\u00dc",
    "\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00de",
    "\u0005(\u0015\u0002\u00de!\u0003\u0002\u0002\u0002\u00df\u00e0\u0007",
    "\u001c\u0002\u0002\u00e0\u00e1\u00058\u001d\u0002\u00e1\u00e3\u0007",
    "\u0006\u0002\u0002\u00e2\u00e4\u0007\u000e\u0002\u0002\u00e3\u00e2\u0003",
    "\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e8\u0003",
    "\u0002\u0002\u0002\u00e5\u00e7\u0005\f\u0007\u0002\u00e6\u00e5\u0003",
    "\u0002\u0002\u0002\u00e7\u00ea\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003",
    "\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e9#\u0003",
    "\u0002\u0002\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002\u00eb\u00ec\u0007",
    "\u001d\u0002\u0002\u00ec\u00ed\u00058\u001d\u0002\u00ed\u00ef\u0007",
    "\u0006\u0002\u0002\u00ee\u00f0\u0007\u000e\u0002\u0002\u00ef\u00ee\u0003",
    "\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0\u00f4\u0003",
    "\u0002\u0002\u0002\u00f1\u00f3\u0005\f\u0007\u0002\u00f2\u00f1\u0003",
    "\u0002\u0002\u0002\u00f3\u00f6\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003",
    "\u0002\u0002\u0002\u00f4\u00f2\u0003\u0002\u0002\u0002\u00f5%\u0003",
    "\u0002\u0002\u0002\u00f6\u00f4\u0003\u0002\u0002\u0002\u00f7\u00f9\u0007",
    "\u001e\u0002\u0002\u00f8\u00fa\u0007\u000e\u0002\u0002\u00f9\u00f8\u0003",
    "\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa\u00fe\u0003",
    "\u0002\u0002\u0002\u00fb\u00fd\u0005\f\u0007\u0002\u00fc\u00fb\u0003",
    "\u0002\u0002\u0002\u00fd\u0100\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003",
    "\u0002\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u00ff\'\u0003",
    "\u0002\u0002\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0101\u0103\u0007",
    "\u001f\u0002\u0002\u0102\u0104\u0007\u000e\u0002\u0002\u0103\u0102\u0003",
    "\u0002\u0002\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104)\u0003",
    "\u0002\u0002\u0002\u0105\u0106\t\u0002\u0002\u0002\u0106\u0107\u0007",
    "\u0012\u0002\u0002\u0107\u0108\u00054\u001b\u0002\u0108\u0109\u0005",
    "8\u001d\u0002\u0109\u010a\u0007\u0006\u0002\u0002\u010a+\u0003\u0002",
    "\u0002\u0002\u010b\u010c\u0007\u001b\u0002\u0002\u010c\u010d\u00050",
    "\u0019\u0002\u010d\u010e\u0007\u0006\u0002\u0002\u010e-\u0003\u0002",
    "\u0002\u0002\u010f\u011d\u0005*\u0016\u0002\u0110\u011d\u0005,\u0017",
    "\u0002\u0111\u0117\u0007\u0005\u0002\u0002\u0112\u0118\u0007\u000b\u0002",
    "\u0002\u0113\u0118\u00058\u001d\u0002\u0114\u0118\u00056\u001c\u0002",
    "\u0115\u0118\u0005:\u001e\u0002\u0116\u0118\u0007\u0012\u0002\u0002",
    "\u0117\u0112\u0003\u0002\u0002\u0002\u0117\u0113\u0003\u0002\u0002\u0002",
    "\u0117\u0114\u0003\u0002\u0002\u0002\u0117\u0115\u0003\u0002\u0002\u0002",
    "\u0117\u0116\u0003\u0002\u0002\u0002\u0118\u0119\u0003\u0002\u0002\u0002",
    "\u0119\u011a\u0003\u0002\u0002\u0002\u0119\u0117\u0003\u0002\u0002\u0002",
    "\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u011d\u0007\u0006\u0002\u0002",
    "\u011c\u010f\u0003\u0002\u0002\u0002\u011c\u0110\u0003\u0002\u0002\u0002",
    "\u011c\u0111\u0003\u0002\u0002\u0002\u011d/\u0003\u0002\u0002\u0002",
    "\u011e\u0122\u0007\u000b\u0002\u0002\u011f\u0122\u00056\u001c\u0002",
    "\u0120\u0122\u0005:\u001e\u0002\u0121\u011e\u0003\u0002\u0002\u0002",
    "\u0121\u011f\u0003\u0002\u0002\u0002\u0121\u0120\u0003\u0002\u0002\u0002",
    "\u0122\u0123\u0003\u0002\u0002\u0002\u0123\u012c\u0007%\u0002\u0002",
    "\u0124\u0129\u00058\u001d\u0002\u0125\u0126\u0007\'\u0002\u0002\u0126",
    "\u0128\u00058\u001d\u0002\u0127\u0125\u0003\u0002\u0002\u0002\u0128",
    "\u012b\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002\u0129",
    "\u012a\u0003\u0002\u0002\u0002\u012a\u012d\u0003\u0002\u0002\u0002\u012b",
    "\u0129\u0003\u0002\u0002\u0002\u012c\u0124\u0003\u0002\u0002\u0002\u012c",
    "\u012d\u0003\u0002\u0002\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e",
    "\u012f\u0007&\u0002\u0002\u012f1\u0003\u0002\u0002\u0002\u0130\u0134",
    "\u0007\u000b\u0002\u0002\u0131\u0133\u0007\f\u0002\u0002\u0132\u0131",
    "\u0003\u0002\u0002\u0002\u0133\u0136\u0003\u0002\u0002\u0002\u0134\u0132",
    "\u0003\u0002\u0002\u0002\u0134\u0135\u0003\u0002\u0002\u0002\u01353",
    "\u0003\u0002\u0002\u0002\u0136\u0134\u0003\u0002\u0002\u0002\u0137\u0138",
    "\t\u0003\u0002\u0002\u01385\u0003\u0002\u0002\u0002\u0139\u013a\t\u0004",
    "\u0002\u0002\u013a7\u0003\u0002\u0002\u0002\u013b\u013c\b\u001d\u0001",
    "\u0002\u013c\u014f\u0005> \u0002\u013d\u014f\u00050\u0019\u0002\u013e",
    "\u013f\u0007\u0007\u0002\u0002\u013f\u0140\u00058\u001d\u0002\u0140",
    "\u0141\u0007\b\u0002\u0002\u0141\u014f\u0003\u0002\u0002\u0002\u0142",
    "\u0143\u0007%\u0002\u0002\u0143\u0144\u00058\u001d\u0002\u0144\u0145",
    "\u0007&\u0002\u0002\u0145\u014f\u0003\u0002\u0002\u0002\u0146\u0147",
    "\u0007)\u0002\u0002\u0147\u014f\u00058\u001d\u0006\u0148\u0149\u0007",
    "3\u0002\u0002\u0149\u014f\u00058\u001d\u0005\u014a\u014b\u0007\u0012",
    "\u0002\u0002\u014b\u014c\u0005<\u001f\u0002\u014c\u014d\u00058\u001d",
    "\u0004\u014d\u014f\u0003\u0002\u0002\u0002\u014e\u013b\u0003\u0002\u0002",
    "\u0002\u014e\u013d\u0003\u0002\u0002\u0002\u014e\u013e\u0003\u0002\u0002",
    "\u0002\u014e\u0142\u0003\u0002\u0002\u0002\u014e\u0146\u0003\u0002\u0002",
    "\u0002\u014e\u0148\u0003\u0002\u0002\u0002\u014e\u014a\u0003\u0002\u0002",
    "\u0002\u014f\u0156\u0003\u0002\u0002\u0002\u0150\u0151\f\u0003\u0002",
    "\u0002\u0151\u0152\u0005:\u001e\u0002\u0152\u0153\u00058\u001d\u0004",
    "\u0153\u0155\u0003\u0002\u0002\u0002\u0154\u0150\u0003\u0002\u0002\u0002",
    "\u0155\u0158\u0003\u0002\u0002\u0002\u0156\u0154\u0003\u0002\u0002\u0002",
    "\u0156\u0157\u0003\u0002\u0002\u0002\u01579\u0003\u0002\u0002\u0002",
    "\u0158\u0156\u0003\u0002\u0002\u0002\u0159\u015a\t\u0005\u0002\u0002",
    "\u015a;\u0003\u0002\u0002\u0002\u015b\u015c\t\u0006\u0002\u0002\u015c",
    "=\u0003\u0002\u0002\u0002\u015d\u0164\u0007\u0013\u0002\u0002\u015e",
    "\u0164\u0007\u0014\u0002\u0002\u015f\u0164\u0007\u0012\u0002\u0002\u0160",
    "\u0164\u0007=\u0002\u0002\u0161\u0164\u0007>\u0002\u0002\u0162\u0164",
    "\u0007?\u0002\u0002\u0163\u015d\u0003\u0002\u0002\u0002\u0163\u015e",
    "\u0003\u0002\u0002\u0002\u0163\u015f\u0003\u0002\u0002\u0002\u0163\u0160",
    "\u0003\u0002\u0002\u0002\u0163\u0161\u0003\u0002\u0002\u0002\u0163\u0162",
    "\u0003\u0002\u0002\u0002\u0164?\u0003\u0002\u0002\u00023CKRWY`fhkmq",
    "uy{\u0084\u0086\u008e\u0091\u009f\u00a6\u00aa\u00b2\u00b6\u00b8\u00bf",
    "\u00c3\u00c5\u00ca\u00ce\u00d0\u00d7\u00db\u00e3\u00e8\u00ef\u00f4\u00f9",
    "\u00fe\u0103\u0117\u0119\u011c\u0121\u0129\u012c\u0134\u014e\u0156\u0163"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'[['", "']]'", "'<<'", "'>>'", "'{'", "'}'", 
                     null, "'\u001E'", null, null, null, null, null, null, 
                     "':'", null, null, null, null, null, "'==='", null, 
                     null, null, null, null, null, null, null, null, null, 
                     "'|'", null, null, "'('", "')'", "','", "'+'", "'-'", 
                     "'*'", "'/'", "'%'", null, null, null, null, null, 
                     null, null, null, null, null, "'+='", "'-='", "'*='", 
                     "'/='", "'%='" ];

var symbolicNames = [ null, "OPTION_START", "OPTION_END", "COMMAND_START", 
                      "COMMAND_END", "EVAL_START", "EVAL_END", "SHORTCUT_START", 
                      "SHORTCUT_END", "TEXT", "HASHTAG", "WS", "NEWLINE", 
                      "COMMENT", "BLOCK_COMMENT", "SEPARATOR", "VARIABLE", 
                      "NUMBER", "STRING", "BODY_START", "BODY_WS", "BODY_END", 
                      "BODY_COMMENT", "BODY_BLOCK_COMMENT", "SET_COMMAND_START", 
                      "FUNC_COMMAND_START", "IF_COMMAND_START", "ELSEIF_COMMAND_START", 
                      "ELSE_COMMAND", "ENDIF_COMMAND", "OPTION_WS", "OPTION_BLOCK_COMMENT", 
                      "OPTION_SEPARATOR", "COMMAND_WS", "COMMAND_BLOCK_COMMENT", 
                      "LBRACKET", "RBRACKET", "COMMA", "PLUS", "MINUS", 
                      "MULTIPLY", "DIVIDE", "MODULO", "EQ", "GT", "LT", 
                      "NEQ", "GTE", "LTE", "NOT", "AND", "OR", "XOR", "ADD_EQUALS", 
                      "MINUS_EQUALS", "MULTIPLY_EQUALS", "DIVIDE_EQUALS", 
                      "MODULO_EQUALS", "KEYWORD_TO", "KEYWORD_TRUE", "KEYWORD_FALSE", 
                      "KEYWORD_NULL" ];

var ruleNames =  [ "dialogue", "node", "header", "body", "statement", "ostatement", 
                   "eval_statement", "shortcut_statement", "option_group", 
                   "option_link", "option_with_text", "if_statement", "if_clause", 
                   "else_if_clause", "else_clause", "of_statement", "of_clause", 
                   "else_of_clause", "oelse_clause", "endif_clause", "set_command", 
                   "function_command", "command_statement", "function_call", 
                   "text", "set_operands", "keyword", "expression", "operand", 
                   "assignmentOperand", "value" ];

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
YarnParser.VARIABLE = 16;
YarnParser.NUMBER = 17;
YarnParser.STRING = 18;
YarnParser.BODY_START = 19;
YarnParser.BODY_WS = 20;
YarnParser.BODY_END = 21;
YarnParser.BODY_COMMENT = 22;
YarnParser.BODY_BLOCK_COMMENT = 23;
YarnParser.SET_COMMAND_START = 24;
YarnParser.FUNC_COMMAND_START = 25;
YarnParser.IF_COMMAND_START = 26;
YarnParser.ELSEIF_COMMAND_START = 27;
YarnParser.ELSE_COMMAND = 28;
YarnParser.ENDIF_COMMAND = 29;
YarnParser.OPTION_WS = 30;
YarnParser.OPTION_BLOCK_COMMENT = 31;
YarnParser.OPTION_SEPARATOR = 32;
YarnParser.COMMAND_WS = 33;
YarnParser.COMMAND_BLOCK_COMMENT = 34;
YarnParser.LBRACKET = 35;
YarnParser.RBRACKET = 36;
YarnParser.COMMA = 37;
YarnParser.PLUS = 38;
YarnParser.MINUS = 39;
YarnParser.MULTIPLY = 40;
YarnParser.DIVIDE = 41;
YarnParser.MODULO = 42;
YarnParser.EQ = 43;
YarnParser.GT = 44;
YarnParser.LT = 45;
YarnParser.NEQ = 46;
YarnParser.GTE = 47;
YarnParser.LTE = 48;
YarnParser.NOT = 49;
YarnParser.AND = 50;
YarnParser.OR = 51;
YarnParser.XOR = 52;
YarnParser.ADD_EQUALS = 53;
YarnParser.MINUS_EQUALS = 54;
YarnParser.MULTIPLY_EQUALS = 55;
YarnParser.DIVIDE_EQUALS = 56;
YarnParser.MODULO_EQUALS = 57;
YarnParser.KEYWORD_TO = 58;
YarnParser.KEYWORD_TRUE = 59;
YarnParser.KEYWORD_FALSE = 60;
YarnParser.KEYWORD_NULL = 61;

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
YarnParser.RULE_function_command = 21;
YarnParser.RULE_command_statement = 22;
YarnParser.RULE_function_call = 23;
YarnParser.RULE_text = 24;
YarnParser.RULE_set_operands = 25;
YarnParser.RULE_keyword = 26;
YarnParser.RULE_expression = 27;
YarnParser.RULE_operand = 28;
YarnParser.RULE_assignmentOperand = 29;
YarnParser.RULE_value = 30;

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




YarnParser.DialogueContext = DialogueContext;

YarnParser.prototype.dialogue = function() {

    var localctx = new DialogueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, YarnParser.RULE_dialogue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.TEXT) {
            this.state = 62;
            this.node();
            this.state = 67;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 68;
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




YarnParser.NodeContext = NodeContext;

YarnParser.prototype.node = function() {

    var localctx = new NodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, YarnParser.RULE_node);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 70;
            this.header();
            this.state = 73; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===YarnParser.TEXT);
        this.state = 75;
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




YarnParser.HeaderContext = HeaderContext;

YarnParser.prototype.header = function() {

    var localctx = new HeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, YarnParser.RULE_header);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        localctx.headerName = this.match(YarnParser.TEXT);
        this.state = 78;
        this.match(YarnParser.SEPARATOR);
        this.state = 80;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 79;
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




YarnParser.BodyContext = BodyContext;

YarnParser.prototype.body = function() {

    var localctx = new BodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, YarnParser.RULE_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(YarnParser.BODY_START);
        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.OPTION_START) | (1 << YarnParser.COMMAND_START) | (1 << YarnParser.EVAL_START) | (1 << YarnParser.SHORTCUT_START) | (1 << YarnParser.TEXT) | (1 << YarnParser.NEWLINE) | (1 << YarnParser.SET_COMMAND_START) | (1 << YarnParser.FUNC_COMMAND_START) | (1 << YarnParser.IF_COMMAND_START))) !== 0)) {
            this.state = 85;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            switch(la_) {
            case 1:
                this.state = 83;
                this.option_group();
                break;

            case 2:
                this.state = 84;
                this.statement();
                break;

            }
            this.state = 89;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 90;
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

BlankContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
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


function PartContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PartContext.prototype = Object.create(StatementContext.prototype);
PartContext.prototype.constructor = PartContext;

YarnParser.PartContext = PartContext;

PartContext.prototype.text = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TextContext);
    } else {
        return this.getTypedRuleContext(TextContext,i);
    }
};

PartContext.prototype.command_statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Command_statementContext);
    } else {
        return this.getTypedRuleContext(Command_statementContext,i);
    }
};

PartContext.prototype.eval_statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Eval_statementContext);
    } else {
        return this.getTypedRuleContext(Eval_statementContext,i);
    }
};

PartContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
};
PartContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterPart(this);
	}
};

PartContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitPart(this);
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

IfContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
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



YarnParser.StatementContext = StatementContext;

YarnParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, YarnParser.RULE_statement);
    try {
        this.state = 107;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.IF_COMMAND_START:
            localctx = new IfContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 92;
            this.if_statement();
            this.state = 94;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
            if(la_===1) {
                this.state = 93;
                this.match(YarnParser.NEWLINE);

            }
            break;
        case YarnParser.NEWLINE:
            localctx = new BlankContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 96;
            this.match(YarnParser.NEWLINE);
            break;
        case YarnParser.COMMAND_START:
        case YarnParser.EVAL_START:
        case YarnParser.TEXT:
        case YarnParser.SET_COMMAND_START:
        case YarnParser.FUNC_COMMAND_START:
            localctx = new PartContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 100; 
            this._errHandler.sync(this);
            var _alt = 1+1;
            do {
            	switch (_alt) {
            	case 1+1:
            		this.state = 100;
            		this._errHandler.sync(this);
            		switch(this._input.LA(1)) {
            		case YarnParser.TEXT:
            		    this.state = 97;
            		    this.text();
            		    break;
            		case YarnParser.COMMAND_START:
            		case YarnParser.SET_COMMAND_START:
            		case YarnParser.FUNC_COMMAND_START:
            		    this.state = 98;
            		    this.command_statement();
            		    break;
            		case YarnParser.EVAL_START:
            		    this.state = 99;
            		    this.eval_statement();
            		    break;
            		default:
            		    throw new antlr4.error.NoViableAltException(this);
            		}
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 102; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
            } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 105;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
            if(la_===1) {
                this.state = 104;
                this.match(YarnParser.NEWLINE);

            }
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

ShortcutContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
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

OptionIfContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
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

OptionContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
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



YarnParser.OstatementContext = OstatementContext;

YarnParser.prototype.ostatement = function() {

    var localctx = new OstatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, YarnParser.RULE_ostatement);
    try {
        this.state = 121;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.OPTION_START:
            localctx = new OptionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 109;
            this.option_with_text();
            this.state = 111;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            if(la_===1) {
                this.state = 110;
                this.match(YarnParser.NEWLINE);

            }
            break;
        case YarnParser.IF_COMMAND_START:
            localctx = new OptionIfContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 113;
            this.of_statement();
            this.state = 115;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
            if(la_===1) {
                this.state = 114;
                this.match(YarnParser.NEWLINE);

            }
            break;
        case YarnParser.SHORTCUT_START:
            localctx = new ShortcutContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 117;
            this.shortcut_statement();
            this.state = 119;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
            if(la_===1) {
                this.state = 118;
                this.match(YarnParser.NEWLINE);

            }
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




YarnParser.Eval_statementContext = Eval_statementContext;

YarnParser.prototype.eval_statement = function() {

    var localctx = new Eval_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, YarnParser.RULE_eval_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.match(YarnParser.EVAL_START);
        this.state = 124;
        this.expression(0);
        this.state = 125;
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




YarnParser.Shortcut_statementContext = Shortcut_statementContext;

YarnParser.prototype.shortcut_statement = function() {

    var localctx = new Shortcut_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, YarnParser.RULE_shortcut_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(YarnParser.SHORTCUT_START);
        this.state = 132;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.OPTION_START) | (1 << YarnParser.COMMAND_START) | (1 << YarnParser.EVAL_START) | (1 << YarnParser.SHORTCUT_START) | (1 << YarnParser.TEXT) | (1 << YarnParser.NEWLINE) | (1 << YarnParser.SET_COMMAND_START) | (1 << YarnParser.FUNC_COMMAND_START) | (1 << YarnParser.IF_COMMAND_START))) !== 0)) {
            this.state = 130;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
            switch(la_) {
            case 1:
                this.state = 128;
                this.option_group();
                break;

            case 2:
                this.state = 129;
                this.statement();
                break;

            }
            this.state = 134;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 135;
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




YarnParser.Option_groupContext = Option_groupContext;

YarnParser.prototype.option_group = function() {

    var localctx = new Option_groupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, YarnParser.RULE_option_group);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.state = 138; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 137;
            		this.ostatement();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 140; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            this.state = 142;
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




YarnParser.Option_linkContext = Option_linkContext;

YarnParser.prototype.option_link = function() {

    var localctx = new Option_linkContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, YarnParser.RULE_option_link);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.match(YarnParser.OPTION_START);
        this.state = 146;
        localctx.link = this.match(YarnParser.TEXT);
        this.state = 147;
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




YarnParser.Option_with_textContext = Option_with_textContext;

YarnParser.prototype.option_with_text = function() {

    var localctx = new Option_with_textContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, YarnParser.RULE_option_with_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(YarnParser.OPTION_START);
        this.state = 150;
        localctx.link = this.match(YarnParser.TEXT);
        this.state = 151;
        this.match(YarnParser.OPTION_SEPARATOR);
        this.state = 152;
        localctx.optionText = this.match(YarnParser.TEXT);
        this.state = 153;
        this.match(YarnParser.OPTION_END);
        this.state = 157;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.HASHTAG) {
            this.state = 154;
            localctx.hashtag = this.match(YarnParser.HASHTAG);
            this.state = 159;
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




YarnParser.If_statementContext = If_statementContext;

YarnParser.prototype.if_statement = function() {

    var localctx = new If_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, YarnParser.RULE_if_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.if_clause();
        this.state = 164;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 161;
                this.else_if_clause(); 
            }
            this.state = 166;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
        }

        this.state = 168;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.ELSE_COMMAND) {
            this.state = 167;
            this.else_clause();
        }

        this.state = 170;
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
    return this;
}

If_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_clauseContext.prototype.constructor = If_clauseContext;

If_clauseContext.prototype.IF_COMMAND_START = function() {
    return this.getToken(YarnParser.IF_COMMAND_START, 0);
};

If_clauseContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

If_clauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

If_clauseContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
};

If_clauseContext.prototype.option_group = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Option_groupContext);
    } else {
        return this.getTypedRuleContext(Option_groupContext,i);
    }
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




YarnParser.If_clauseContext = If_clauseContext;

YarnParser.prototype.if_clause = function() {

    var localctx = new If_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, YarnParser.RULE_if_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(YarnParser.IF_COMMAND_START);
        this.state = 173;
        localctx.predicate = this.expression(0);
        this.state = 174;
        this.match(YarnParser.COMMAND_END);
        this.state = 176;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        if(la_===1) {
            this.state = 175;
            this.match(YarnParser.NEWLINE);

        }
        this.state = 182;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 180;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 178;
                    this.option_group();
                    break;

                case 2:
                    this.state = 179;
                    this.statement();
                    break;

                } 
            }
            this.state = 184;
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
    return this;
}

Else_if_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Else_if_clauseContext.prototype.constructor = Else_if_clauseContext;

Else_if_clauseContext.prototype.ELSEIF_COMMAND_START = function() {
    return this.getToken(YarnParser.ELSEIF_COMMAND_START, 0);
};

Else_if_clauseContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

Else_if_clauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Else_if_clauseContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
};

Else_if_clauseContext.prototype.option_group = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Option_groupContext);
    } else {
        return this.getTypedRuleContext(Option_groupContext,i);
    }
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




YarnParser.Else_if_clauseContext = Else_if_clauseContext;

YarnParser.prototype.else_if_clause = function() {

    var localctx = new Else_if_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, YarnParser.RULE_else_if_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(YarnParser.ELSEIF_COMMAND_START);
        this.state = 186;
        localctx.predicate = this.expression(0);
        this.state = 187;
        this.match(YarnParser.COMMAND_END);
        this.state = 189;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        if(la_===1) {
            this.state = 188;
            this.match(YarnParser.NEWLINE);

        }
        this.state = 195;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 193;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 191;
                    this.option_group();
                    break;

                case 2:
                    this.state = 192;
                    this.statement();
                    break;

                } 
            }
            this.state = 197;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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
    return this;
}

Else_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Else_clauseContext.prototype.constructor = Else_clauseContext;

Else_clauseContext.prototype.ELSE_COMMAND = function() {
    return this.getToken(YarnParser.ELSE_COMMAND, 0);
};

Else_clauseContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
};

Else_clauseContext.prototype.option_group = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Option_groupContext);
    } else {
        return this.getTypedRuleContext(Option_groupContext,i);
    }
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




YarnParser.Else_clauseContext = Else_clauseContext;

YarnParser.prototype.else_clause = function() {

    var localctx = new Else_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, YarnParser.RULE_else_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.match(YarnParser.ELSE_COMMAND);
        this.state = 200;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        if(la_===1) {
            this.state = 199;
            this.match(YarnParser.NEWLINE);

        }
        this.state = 206;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 204;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 202;
                    this.option_group();
                    break;

                case 2:
                    this.state = 203;
                    this.statement();
                    break;

                } 
            }
            this.state = 208;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
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




YarnParser.Of_statementContext = Of_statementContext;

YarnParser.prototype.of_statement = function() {

    var localctx = new Of_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, YarnParser.RULE_of_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.of_clause();
        this.state = 213;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 210;
                this.else_of_clause(); 
            }
            this.state = 215;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
        }

        this.state = 217;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.ELSE_COMMAND) {
            this.state = 216;
            this.oelse_clause();
        }

        this.state = 219;
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

Of_clauseContext.prototype.IF_COMMAND_START = function() {
    return this.getToken(YarnParser.IF_COMMAND_START, 0);
};

Of_clauseContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

Of_clauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Of_clauseContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
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




YarnParser.Of_clauseContext = Of_clauseContext;

YarnParser.prototype.of_clause = function() {

    var localctx = new Of_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, YarnParser.RULE_of_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this.match(YarnParser.IF_COMMAND_START);
        this.state = 222;
        localctx.predicate = this.expression(0);
        this.state = 223;
        this.match(YarnParser.COMMAND_END);
        this.state = 225;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.NEWLINE) {
            this.state = 224;
            this.match(YarnParser.NEWLINE);
        }

        this.state = 230;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 227;
                localctx.statements = this.ostatement(); 
            }
            this.state = 232;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
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

Else_of_clauseContext.prototype.ELSEIF_COMMAND_START = function() {
    return this.getToken(YarnParser.ELSEIF_COMMAND_START, 0);
};

Else_of_clauseContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

Else_of_clauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Else_of_clauseContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
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




YarnParser.Else_of_clauseContext = Else_of_clauseContext;

YarnParser.prototype.else_of_clause = function() {

    var localctx = new Else_of_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, YarnParser.RULE_else_of_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.match(YarnParser.ELSEIF_COMMAND_START);
        this.state = 234;
        localctx.predicate = this.expression(0);
        this.state = 235;
        this.match(YarnParser.COMMAND_END);
        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.NEWLINE) {
            this.state = 236;
            this.match(YarnParser.NEWLINE);
        }

        this.state = 242;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 239;
                localctx.statements = this.ostatement(); 
            }
            this.state = 244;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
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

Oelse_clauseContext.prototype.ELSE_COMMAND = function() {
    return this.getToken(YarnParser.ELSE_COMMAND, 0);
};

Oelse_clauseContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
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




YarnParser.Oelse_clauseContext = Oelse_clauseContext;

YarnParser.prototype.oelse_clause = function() {

    var localctx = new Oelse_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, YarnParser.RULE_oelse_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(YarnParser.ELSE_COMMAND);
        this.state = 247;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.NEWLINE) {
            this.state = 246;
            this.match(YarnParser.NEWLINE);
        }

        this.state = 252;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 249;
                localctx.statements = this.ostatement(); 
            }
            this.state = 254;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
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

Endif_clauseContext.prototype.ENDIF_COMMAND = function() {
    return this.getToken(YarnParser.ENDIF_COMMAND, 0);
};

Endif_clauseContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
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




YarnParser.Endif_clauseContext = Endif_clauseContext;

YarnParser.prototype.endif_clause = function() {

    var localctx = new Endif_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, YarnParser.RULE_endif_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this.match(YarnParser.ENDIF_COMMAND);
        this.state = 257;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        if(la_===1) {
            this.state = 256;
            this.match(YarnParser.NEWLINE);

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

Set_commandContext.prototype.COMMAND_START = function() {
    return this.getToken(YarnParser.COMMAND_START, 0);
};

Set_commandContext.prototype.SET_COMMAND_START = function() {
    return this.getToken(YarnParser.SET_COMMAND_START, 0);
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




YarnParser.Set_commandContext = Set_commandContext;

YarnParser.prototype.set_command = function() {

    var localctx = new Set_commandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, YarnParser.RULE_set_command);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        _la = this._input.LA(1);
        if(!(_la===YarnParser.COMMAND_START || _la===YarnParser.SET_COMMAND_START)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 260;
        this.match(YarnParser.VARIABLE);
        this.state = 261;
        this.set_operands();
        this.state = 262;
        this.expression(0);
        this.state = 263;
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

function Function_commandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_function_command;
    return this;
}

Function_commandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_commandContext.prototype.constructor = Function_commandContext;

Function_commandContext.prototype.FUNC_COMMAND_START = function() {
    return this.getToken(YarnParser.FUNC_COMMAND_START, 0);
};

Function_commandContext.prototype.function_call = function() {
    return this.getTypedRuleContext(Function_callContext,0);
};

Function_commandContext.prototype.COMMAND_END = function() {
    return this.getToken(YarnParser.COMMAND_END, 0);
};

Function_commandContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterFunction_command(this);
	}
};

Function_commandContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitFunction_command(this);
	}
};




YarnParser.Function_commandContext = Function_commandContext;

YarnParser.prototype.function_command = function() {

    var localctx = new Function_commandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, YarnParser.RULE_function_command);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.match(YarnParser.FUNC_COMMAND_START);
        this.state = 266;
        this.function_call();
        this.state = 267;
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


function FuncContext(parser, ctx) {
	Command_statementContext.call(this, parser);
    Command_statementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncContext.prototype = Object.create(Command_statementContext.prototype);
FuncContext.prototype.constructor = FuncContext;

YarnParser.FuncContext = FuncContext;

FuncContext.prototype.function_command = function() {
    return this.getTypedRuleContext(Function_commandContext,0);
};
FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitFunc(this);
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

CommandContext.prototype.operand = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperandContext);
    } else {
        return this.getTypedRuleContext(OperandContext,i);
    }
};

CommandContext.prototype.VARIABLE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(YarnParser.VARIABLE);
    } else {
        return this.getToken(YarnParser.VARIABLE, i);
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



YarnParser.Command_statementContext = Command_statementContext;

YarnParser.prototype.command_statement = function() {

    var localctx = new Command_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, YarnParser.RULE_command_statement);
    try {
        this.state = 282;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
        switch(la_) {
        case 1:
            localctx = new SetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 269;
            this.set_command();
            break;

        case 2:
            localctx = new FuncContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 270;
            this.function_command();
            break;

        case 3:
            localctx = new CommandContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 271;
            this.match(YarnParser.COMMAND_START);
            this.state = 277; 
            this._errHandler.sync(this);
            var _alt = 1+1;
            do {
            	switch (_alt) {
            	case 1+1:
            		this.state = 277;
            		this._errHandler.sync(this);
            		var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
            		switch(la_) {
            		case 1:
            		    this.state = 272;
            		    this.match(YarnParser.TEXT);
            		    break;

            		case 2:
            		    this.state = 273;
            		    this.expression(0);
            		    break;

            		case 3:
            		    this.state = 274;
            		    this.keyword();
            		    break;

            		case 4:
            		    this.state = 275;
            		    this.operand();
            		    break;

            		case 5:
            		    this.state = 276;
            		    this.match(YarnParser.VARIABLE);
            		    break;

            		}
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 279; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,40, this._ctx);
            } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 281;
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

Function_callContext.prototype.operand = function() {
    return this.getTypedRuleContext(OperandContext,0);
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




YarnParser.Function_callContext = Function_callContext;

YarnParser.prototype.function_call = function() {

    var localctx = new Function_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, YarnParser.RULE_function_call);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.TEXT:
            this.state = 284;
            this.match(YarnParser.TEXT);
            break;
        case YarnParser.KEYWORD_TO:
        case YarnParser.KEYWORD_TRUE:
        case YarnParser.KEYWORD_FALSE:
        case YarnParser.KEYWORD_NULL:
            this.state = 285;
            this.keyword();
            break;
        case YarnParser.PLUS:
        case YarnParser.MINUS:
        case YarnParser.MULTIPLY:
        case YarnParser.DIVIDE:
        case YarnParser.MODULO:
        case YarnParser.EQ:
        case YarnParser.GT:
        case YarnParser.LT:
        case YarnParser.NEQ:
        case YarnParser.GTE:
        case YarnParser.LTE:
        case YarnParser.AND:
        case YarnParser.OR:
        case YarnParser.XOR:
            this.state = 286;
            this.operand();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 289;
        this.match(YarnParser.LBRACKET);
        this.state = 298;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.EVAL_START) | (1 << YarnParser.TEXT) | (1 << YarnParser.VARIABLE) | (1 << YarnParser.NUMBER) | (1 << YarnParser.STRING))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (YarnParser.LBRACKET - 35)) | (1 << (YarnParser.PLUS - 35)) | (1 << (YarnParser.MINUS - 35)) | (1 << (YarnParser.MULTIPLY - 35)) | (1 << (YarnParser.DIVIDE - 35)) | (1 << (YarnParser.MODULO - 35)) | (1 << (YarnParser.EQ - 35)) | (1 << (YarnParser.GT - 35)) | (1 << (YarnParser.LT - 35)) | (1 << (YarnParser.NEQ - 35)) | (1 << (YarnParser.GTE - 35)) | (1 << (YarnParser.LTE - 35)) | (1 << (YarnParser.NOT - 35)) | (1 << (YarnParser.AND - 35)) | (1 << (YarnParser.OR - 35)) | (1 << (YarnParser.XOR - 35)) | (1 << (YarnParser.KEYWORD_TO - 35)) | (1 << (YarnParser.KEYWORD_TRUE - 35)) | (1 << (YarnParser.KEYWORD_FALSE - 35)) | (1 << (YarnParser.KEYWORD_NULL - 35)))) !== 0)) {
            this.state = 290;
            localctx._expression = this.expression(0);
            localctx.args.push(localctx._expression);
            this.state = 295;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===YarnParser.COMMA) {
                this.state = 291;
                this.match(YarnParser.COMMA);
                this.state = 292;
                localctx._expression = this.expression(0);
                localctx.args.push(localctx._expression);
                this.state = 297;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 300;
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




YarnParser.TextContext = TextContext;

YarnParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, YarnParser.RULE_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
        this.match(YarnParser.TEXT);
        this.state = 306;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.HASHTAG) {
            this.state = 303;
            localctx.hashtag = this.match(YarnParser.HASHTAG);
            this.state = 308;
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




YarnParser.Set_operandsContext = Set_operandsContext;

YarnParser.prototype.set_operands = function() {

    var localctx = new Set_operandsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, YarnParser.RULE_set_operands);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        _la = this._input.LA(1);
        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (YarnParser.ADD_EQUALS - 53)) | (1 << (YarnParser.MINUS_EQUALS - 53)) | (1 << (YarnParser.MULTIPLY_EQUALS - 53)) | (1 << (YarnParser.DIVIDE_EQUALS - 53)) | (1 << (YarnParser.MODULO_EQUALS - 53)) | (1 << (YarnParser.KEYWORD_TO - 53)))) !== 0))) {
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




YarnParser.KeywordContext = KeywordContext;

YarnParser.prototype.keyword = function() {

    var localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, YarnParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        _la = this._input.LA(1);
        if(!(((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (YarnParser.KEYWORD_TO - 58)) | (1 << (YarnParser.KEYWORD_TRUE - 58)) | (1 << (YarnParser.KEYWORD_FALSE - 58)) | (1 << (YarnParser.KEYWORD_NULL - 58)))) !== 0))) {
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


function EvaluatedExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EvaluatedExpressionContext.prototype = Object.create(ExpressionContext.prototype);
EvaluatedExpressionContext.prototype.constructor = EvaluatedExpressionContext;

YarnParser.EvaluatedExpressionContext = EvaluatedExpressionContext;

EvaluatedExpressionContext.prototype.EVAL_START = function() {
    return this.getToken(YarnParser.EVAL_START, 0);
};

EvaluatedExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

EvaluatedExpressionContext.prototype.EVAL_END = function() {
    return this.getToken(YarnParser.EVAL_END, 0);
};
EvaluatedExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterEvaluatedExpression(this);
	}
};

EvaluatedExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitEvaluatedExpression(this);
	}
};


function AssignmentExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignmentExpressionContext.prototype.constructor = AssignmentExpressionContext;

YarnParser.AssignmentExpressionContext = AssignmentExpressionContext;

AssignmentExpressionContext.prototype.VARIABLE = function() {
    return this.getToken(YarnParser.VARIABLE, 0);
};

AssignmentExpressionContext.prototype.assignmentOperand = function() {
    return this.getTypedRuleContext(AssignmentOperandContext,0);
};

AssignmentExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
AssignmentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterAssignmentExpression(this);
	}
};

AssignmentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitAssignmentExpression(this);
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


function LeftRightExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LeftRightExpressionContext.prototype = Object.create(ExpressionContext.prototype);
LeftRightExpressionContext.prototype.constructor = LeftRightExpressionContext;

YarnParser.LeftRightExpressionContext = LeftRightExpressionContext;

LeftRightExpressionContext.prototype.operand = function() {
    return this.getTypedRuleContext(OperandContext,0);
};

LeftRightExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
LeftRightExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterLeftRightExpression(this);
	}
};

LeftRightExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitLeftRightExpression(this);
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
        this.state = 332;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ValueExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 314;
            this.value();
            break;

        case 2:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 315;
            this.function_call();
            break;

        case 3:
            localctx = new EvaluatedExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 316;
            this.match(YarnParser.EVAL_START);
            this.state = 317;
            this.expression(0);
            this.state = 318;
            this.match(YarnParser.EVAL_END);
            break;

        case 4:
            localctx = new GroupedExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 320;
            this.match(YarnParser.LBRACKET);
            this.state = 321;
            this.expression(0);
            this.state = 322;
            this.match(YarnParser.RBRACKET);
            break;

        case 5:
            localctx = new NegativeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 324;
            this.match(YarnParser.MINUS);
            this.state = 325;
            this.expression(4);
            break;

        case 6:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 326;
            this.match(YarnParser.NOT);
            this.state = 327;
            this.expression(3);
            break;

        case 7:
            localctx = new AssignmentExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 328;
            this.match(YarnParser.VARIABLE);
            this.state = 329;
            this.assignmentOperand();
            this.state = 330;
            this.expression(2);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 340;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,47,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new LeftRightExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                localctx.left = _prevctx;
                this.pushNewRecursionContext(localctx, _startState, YarnParser.RULE_expression);
                this.state = 334;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 335;
                this.operand();
                this.state = 336;
                localctx.right = this.expression(2); 
            }
            this.state = 342;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,47,this._ctx);
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




YarnParser.OperandContext = OperandContext;

YarnParser.prototype.operand = function() {

    var localctx = new OperandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, YarnParser.RULE_operand);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        _la = this._input.LA(1);
        if(!(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (YarnParser.PLUS - 38)) | (1 << (YarnParser.MINUS - 38)) | (1 << (YarnParser.MULTIPLY - 38)) | (1 << (YarnParser.DIVIDE - 38)) | (1 << (YarnParser.MODULO - 38)) | (1 << (YarnParser.EQ - 38)) | (1 << (YarnParser.GT - 38)) | (1 << (YarnParser.LT - 38)) | (1 << (YarnParser.NEQ - 38)) | (1 << (YarnParser.GTE - 38)) | (1 << (YarnParser.LTE - 38)) | (1 << (YarnParser.AND - 38)) | (1 << (YarnParser.OR - 38)) | (1 << (YarnParser.XOR - 38)))) !== 0))) {
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

function AssignmentOperandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_assignmentOperand;
    return this;
}

AssignmentOperandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentOperandContext.prototype.constructor = AssignmentOperandContext;

AssignmentOperandContext.prototype.ADD_EQUALS = function() {
    return this.getToken(YarnParser.ADD_EQUALS, 0);
};

AssignmentOperandContext.prototype.MINUS_EQUALS = function() {
    return this.getToken(YarnParser.MINUS_EQUALS, 0);
};

AssignmentOperandContext.prototype.MULTIPLY_EQUALS = function() {
    return this.getToken(YarnParser.MULTIPLY_EQUALS, 0);
};

AssignmentOperandContext.prototype.DIVIDE_EQUALS = function() {
    return this.getToken(YarnParser.DIVIDE_EQUALS, 0);
};

AssignmentOperandContext.prototype.MODULO_EQUALS = function() {
    return this.getToken(YarnParser.MODULO_EQUALS, 0);
};

AssignmentOperandContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterAssignmentOperand(this);
	}
};

AssignmentOperandContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitAssignmentOperand(this);
	}
};




YarnParser.AssignmentOperandContext = AssignmentOperandContext;

YarnParser.prototype.assignmentOperand = function() {

    var localctx = new AssignmentOperandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, YarnParser.RULE_assignmentOperand);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        _la = this._input.LA(1);
        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (YarnParser.ADD_EQUALS - 53)) | (1 << (YarnParser.MINUS_EQUALS - 53)) | (1 << (YarnParser.MULTIPLY_EQUALS - 53)) | (1 << (YarnParser.DIVIDE_EQUALS - 53)) | (1 << (YarnParser.MODULO_EQUALS - 53)))) !== 0))) {
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



YarnParser.ValueContext = ValueContext;

YarnParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, YarnParser.RULE_value);
    try {
        this.state = 353;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.NUMBER:
            localctx = new NumberContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 347;
            this.match(YarnParser.NUMBER);
            break;
        case YarnParser.STRING:
            localctx = new StringContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 348;
            this.match(YarnParser.STRING);
            break;
        case YarnParser.VARIABLE:
            localctx = new VariableContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 349;
            this.match(YarnParser.VARIABLE);
            break;
        case YarnParser.KEYWORD_TRUE:
            localctx = new TrueConstantContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 350;
            this.match(YarnParser.KEYWORD_TRUE);
            break;
        case YarnParser.KEYWORD_FALSE:
            localctx = new FalseConstantContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 351;
            this.match(YarnParser.KEYWORD_FALSE);
            break;
        case YarnParser.KEYWORD_NULL:
            localctx = new NullConstantContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 352;
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
