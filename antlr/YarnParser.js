// Generated from YarnParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var YarnParserListener = require('./YarnParserListener').YarnParserListener;
var grammarFileName = "YarnParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003O\u0126\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0003\u0002\u0006\u0002:\n\u0002\r\u0002",
    "\u000e\u0002;\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003C\n\u0003\f\u0003\u000e\u0003F\u000b\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004K\n\u0004\f\u0004\u000e\u0004N\u000b",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0005\u0006V\n\u0006\u0003\u0007\u0003\u0007\u0007\u0007Z\n\u0007",
    "\f\u0007\u000e\u0007]\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0007\th\n\t\f\t\u000e\t",
    "k\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0005\nw\n\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0007\u000b|\n\u000b\f\u000b\u000e\u000b\u007f\u000b\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0007\f\u0085\n\f\f\f\u000e\f\u0088\u000b",
    "\f\u0003\f\u0005\f\u008b\n\f\u0003\f\u0003\f\u0005\f\u008f\n\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0007\r\u0095\n\r\f\r\u000e\r\u0098\u000b",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u009e",
    "\n\u000e\f\u000e\u000e\u000e\u00a1\u000b\u000e\u0003\u000f\u0003\u000f",
    "\u0007\u000f\u00a5\n\u000f\f\u000f\u000e\u000f\u00a8\u000b\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00ad\n\u0010\f\u0010\u000e",
    "\u0010\u00b0\u000b\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00b9\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u00c3\n\u0011\u0003\u0011\u0005\u0011",
    "\u00c6\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00cb",
    "\n\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00cf\n\u0012\f\u0012\u000e",
    "\u0012\u00d2\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0007\u0013\u00da\n\u0013\f\u0013\u000e\u0013",
    "\u00dd\u000b\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u00e8",
    "\n\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0006\u0018\u00ed\n\u0018",
    "\r\u0018\u000e\u0018\u00ee\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u0105",
    "\n\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u0116\n",
    "\u001a\f\u001a\u000e\u001a\u0119\u000b\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b",
    "\u0122\n\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0002\u00032\u001d",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$&(*,.0246\u0002\n\u0004\u0002\u0017\u0017$$\u0003\u0002<>",
    "\u0003\u0002:;\u0003\u0002AC\u0003\u0002?@\u0004\u00020134\u0004\u0002",
    "2255\u0003\u000268\u0002\u0138\u00029\u0003\u0002\u0002\u0002\u0004",
    "?\u0003\u0002\u0002\u0002\u0006G\u0003\u0002\u0002\u0002\bO\u0003\u0002",
    "\u0002\u0002\nS\u0003\u0002\u0002\u0002\fW\u0003\u0002\u0002\u0002\u000e",
    "`\u0003\u0002\u0002\u0002\u0010e\u0003\u0002\u0002\u0002\u0012v\u0003",
    "\u0002\u0002\u0002\u0014x\u0003\u0002\u0002\u0002\u0016\u0082\u0003",
    "\u0002\u0002\u0002\u0018\u0090\u0003\u0002\u0002\u0002\u001a\u0099\u0003",
    "\u0002\u0002\u0002\u001c\u00a2\u0003\u0002\u0002\u0002\u001e\u00b8\u0003",
    "\u0002\u0002\u0002 \u00c2\u0003\u0002\u0002\u0002\"\u00c7\u0003\u0002",
    "\u0002\u0002$\u00d5\u0003\u0002\u0002\u0002&\u00e1\u0003\u0002\u0002",
    "\u0002(\u00e3\u0003\u0002\u0002\u0002*\u00e5\u0003\u0002\u0002\u0002",
    ",\u00e9\u0003\u0002\u0002\u0002.\u00ec\u0003\u0002\u0002\u00020\u00f0",
    "\u0003\u0002\u0002\u00022\u0104\u0003\u0002\u0002\u00024\u0121\u0003",
    "\u0002\u0002\u00026\u0123\u0003\u0002\u0002\u00028:\u0005\u0004\u0003",
    "\u000298\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;9\u0003\u0002",
    "\u0002\u0002;<\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=>\u0007",
    "\u0002\u0002\u0003>\u0003\u0003\u0002\u0002\u0002?@\u0005\u0006\u0004",
    "\u0002@D\u0005\u0010\t\u0002AC\u0007\n\u0002\u0002BA\u0003\u0002\u0002",
    "\u0002CF\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002DE\u0003\u0002",
    "\u0002\u0002E\u0005\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002",
    "GL\u0005\b\u0005\u0002HK\u0005\f\u0007\u0002IK\u0005\u000e\b\u0002J",
    "H\u0003\u0002\u0002\u0002JI\u0003\u0002\u0002\u0002KN\u0003\u0002\u0002",
    "\u0002LJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002M\u0007\u0003",
    "\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002OP\u0007\u0004\u0002\u0002",
    "PQ\u0007\f\u0002\u0002QR\u0007\r\u0002\u0002R\t\u0003\u0002\u0002\u0002",
    "SU\u0007\u000e\u0002\u0002TV\u0007\u000f\u0002\u0002UT\u0003\u0002\u0002",
    "\u0002UV\u0003\u0002\u0002\u0002V\u000b\u0003\u0002\u0002\u0002W[\u0007",
    "\u0005\u0002\u0002XZ\u0005\n\u0006\u0002YX\u0003\u0002\u0002\u0002Z",
    "]\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002",
    "\u0002\\^\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002^_\u0007",
    "\u0010\u0002\u0002_\r\u0003\u0002\u0002\u0002`a\u0007\u0006\u0002\u0002",
    "ab\u0007\u0007\u0002\u0002bc\u0007\u0011\u0002\u0002cd\u0007\u0012\u0002",
    "\u0002d\u000f\u0003\u0002\u0002\u0002ei\u0007\u0003\u0002\u0002fh\u0005",
    "\u0012\n\u0002gf\u0003\u0002\u0002\u0002hk\u0003\u0002\u0002\u0002i",
    "g\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jl\u0003\u0002\u0002",
    "\u0002ki\u0003\u0002\u0002\u0002lm\u0007\u0016\u0002\u0002m\u0011\u0003",
    "\u0002\u0002\u0002nw\u0005\u0014\u000b\u0002ow\u0005\u0016\f\u0002p",
    "w\u0005\u001e\u0010\u0002qw\u0005 \u0011\u0002rw\u0005$\u0013\u0002",
    "sw\u0005&\u0014\u0002tw\u0005*\u0016\u0002uw\u0005,\u0017\u0002vn\u0003",
    "\u0002\u0002\u0002vo\u0003\u0002\u0002\u0002vp\u0003\u0002\u0002\u0002",
    "vq\u0003\u0002\u0002\u0002vr\u0003\u0002\u0002\u0002vs\u0003\u0002\u0002",
    "\u0002vt\u0003\u0002\u0002\u0002vu\u0003\u0002\u0002\u0002w\u0013\u0003",
    "\u0002\u0002\u0002xy\u0007\u0018\u0002\u0002y}\u0007\u0019\u0002\u0002",
    "z|\u0005\u0012\n\u0002{z\u0003\u0002\u0002\u0002|\u007f\u0003\u0002",
    "\u0002\u0002}{\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0080",
    "\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u0080\u0081",
    "\u0007\u001a\u0002\u0002\u0081\u0015\u0003\u0002\u0002\u0002\u0082\u0086",
    "\u0005\u0018\r\u0002\u0083\u0085\u0005\u001a\u000e\u0002\u0084\u0083",
    "\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086\u0084",
    "\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u008a",
    "\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0089\u008b",
    "\u0005\u001c\u000f\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008a\u008b",
    "\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008e",
    "\u0007\u001e\u0002\u0002\u008d\u008f\u0005.\u0018\u0002\u008e\u008d",
    "\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0017",
    "\u0003\u0002\u0002\u0002\u0090\u0091\u0007\u001b\u0002\u0002\u0091\u0092",
    "\u00052\u001a\u0002\u0092\u0096\u0007&\u0002\u0002\u0093\u0095\u0005",
    "\u0012\n\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0095\u0098\u0003",
    "\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0096\u0097\u0003",
    "\u0002\u0002\u0002\u0097\u0019\u0003\u0002\u0002\u0002\u0098\u0096\u0003",
    "\u0002\u0002\u0002\u0099\u009a\u0007\u001d\u0002\u0002\u009a\u009b\u0005",
    "2\u001a\u0002\u009b\u009f\u0007&\u0002\u0002\u009c\u009e\u0005\u0012",
    "\n\u0002\u009d\u009c\u0003\u0002\u0002\u0002\u009e\u00a1\u0003\u0002",
    "\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002",
    "\u0002\u0002\u00a0\u001b\u0003\u0002\u0002\u0002\u00a1\u009f\u0003\u0002",
    "\u0002\u0002\u00a2\u00a6\u0007\u001c\u0002\u0002\u00a3\u00a5\u0005\u0012",
    "\n\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a8\u0003\u0002",
    "\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002",
    "\u0002\u0002\u00a7\u001d\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002",
    "\u0002\u0002\u00a9\u00aa\u0007\u001f\u0002\u0002\u00aa\u00ae\u00056",
    "\u001c\u0002\u00ab\u00ad\u0007/\u0002\u0002\u00ac\u00ab\u0003\u0002",
    "\u0002\u0002\u00ad\u00b0\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002",
    "\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00b1\u0003\u0002",
    "\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b1\u00b2\u00052",
    "\u001a\u0002\u00b2\u00b3\u0007&\u0002\u0002\u00b3\u00b9\u0003\u0002",
    "\u0002\u0002\u00b4\u00b5\u0007\u001f\u0002\u0002\u00b5\u00b6\u00052",
    "\u001a\u0002\u00b6\u00b7\u0007&\u0002\u0002\u00b7\u00b9\u0003\u0002",
    "\u0002\u0002\u00b8\u00a9\u0003\u0002\u0002\u0002\u00b8\u00b4\u0003\u0002",
    "\u0002\u0002\u00b9\u001f\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\"",
    "\u0002\u0002\u00bb\u00bc\u0007M\u0002\u0002\u00bc\u00bd\u0007L\u0002",
    "\u0002\u00bd\u00be\u0007O\u0002\u0002\u00be\u00c3\u0007N\u0002\u0002",
    "\u00bf\u00c0\u0007\"\u0002\u0002\u00c0\u00c1\u0007M\u0002\u0002\u00c1",
    "\u00c3\u0007N\u0002\u0002\u00c2\u00ba\u0003\u0002\u0002\u0002\u00c2",
    "\u00bf\u0003\u0002\u0002\u0002\u00c3\u00c5\u0003\u0002\u0002\u0002\u00c4",
    "\u00c6\u0005.\u0018\u0002\u00c5\u00c4\u0003\u0002\u0002\u0002\u00c5",
    "\u00c6\u0003\u0002\u0002\u0002\u00c6!\u0003\u0002\u0002\u0002\u00c7",
    "\u00c8\u0007I\u0002\u0002\u00c8\u00ca\u0007D\u0002\u0002\u00c9\u00cb",
    "\u00052\u001a\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00ca\u00cb",
    "\u0003\u0002\u0002\u0002\u00cb\u00d0\u0003\u0002\u0002\u0002\u00cc\u00cd",
    "\u0007F\u0002\u0002\u00cd\u00cf\u00052\u001a\u0002\u00ce\u00cc\u0003",
    "\u0002\u0002\u0002\u00cf\u00d2\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003",
    "\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d3\u0003",
    "\u0002\u0002\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007",
    "E\u0002\u0002\u00d4#\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007 \u0002",
    "\u0002\u00d6\u00db\u00052\u001a\u0002\u00d7\u00d8\u0007F\u0002\u0002",
    "\u00d8\u00da\u00052\u001a\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002",
    "\u00da\u00dd\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002",
    "\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc\u00de\u0003\u0002\u0002\u0002",
    "\u00dd\u00db\u0003\u0002\u0002\u0002\u00de\u00df\u0007E\u0002\u0002",
    "\u00df\u00e0\u0007&\u0002\u0002\u00e0%\u0003\u0002\u0002\u0002\u00e1",
    "\u00e2\u0007K\u0002\u0002\u00e2\'\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\t\u0002\u0002\u0002\u00e4)\u0003\u0002\u0002\u0002\u00e5\u00e7\u0005",
    "(\u0015\u0002\u00e6\u00e8\u0005.\u0018\u0002\u00e7\u00e6\u0003\u0002",
    "\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8+\u0003\u0002",
    "\u0002\u0002\u00e9\u00ea\u0007\u0013\u0002\u0002\u00ea-\u0003\u0002",
    "\u0002\u0002\u00eb\u00ed\u00050\u0019\u0002\u00ec\u00eb\u0003\u0002",
    "\u0002\u0002\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002",
    "\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef/\u0003\u0002",
    "\u0002\u0002\u00f0\u00f1\u0007#\u0002\u0002\u00f11\u0003\u0002\u0002",
    "\u0002\u00f2\u00f3\b\u001a\u0001\u0002\u00f3\u00f4\u0007D\u0002\u0002",
    "\u00f4\u00f5\u00052\u001a\u0002\u00f5\u00f6\u0007E\u0002\u0002\u00f6",
    "\u0105\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007@\u0002\u0002\u00f8",
    "\u0105\u00052\u001a\f\u00f9\u00fa\u00079\u0002\u0002\u00fa\u0105\u0005",
    "2\u001a\u000b\u00fb\u00fc\u00056\u001c\u0002\u00fc\u00fd\t\u0003\u0002",
    "\u0002\u00fd\u00fe\u00052\u001a\u0006\u00fe\u0105\u0003\u0002\u0002",
    "\u0002\u00ff\u0100\u00056\u001c\u0002\u0100\u0101\t\u0004\u0002\u0002",
    "\u0101\u0102\u00052\u001a\u0005\u0102\u0105\u0003\u0002\u0002\u0002",
    "\u0103\u0105\u00054\u001b\u0002\u0104\u00f2\u0003\u0002\u0002\u0002",
    "\u0104\u00f7\u0003\u0002\u0002\u0002\u0104\u00f9\u0003\u0002\u0002\u0002",
    "\u0104\u00fb\u0003\u0002\u0002\u0002\u0104\u00ff\u0003\u0002\u0002\u0002",
    "\u0104\u0103\u0003\u0002\u0002\u0002\u0105\u0117\u0003\u0002\u0002\u0002",
    "\u0106\u0107\f\n\u0002\u0002\u0107\u0108\t\u0005\u0002\u0002\u0108\u0116",
    "\u00052\u001a\u000b\u0109\u010a\f\t\u0002\u0002\u010a\u010b\t\u0006",
    "\u0002\u0002\u010b\u0116\u00052\u001a\n\u010c\u010d\f\b\u0002\u0002",
    "\u010d\u010e\t\u0007\u0002\u0002\u010e\u0116\u00052\u001a\t\u010f\u0110",
    "\f\u0007\u0002\u0002\u0110\u0111\t\b\u0002\u0002\u0111\u0116\u00052",
    "\u001a\b\u0112\u0113\f\u0004\u0002\u0002\u0113\u0114\t\t\u0002\u0002",
    "\u0114\u0116\u00052\u001a\u0005\u0115\u0106\u0003\u0002\u0002\u0002",
    "\u0115\u0109\u0003\u0002\u0002\u0002\u0115\u010c\u0003\u0002\u0002\u0002",
    "\u0115\u010f\u0003\u0002\u0002\u0002\u0115\u0112\u0003\u0002\u0002\u0002",
    "\u0116\u0119\u0003\u0002\u0002\u0002\u0117\u0115\u0003\u0002\u0002\u0002",
    "\u0117\u0118\u0003\u0002\u0002\u0002\u01183\u0003\u0002\u0002\u0002",
    "\u0119\u0117\u0003\u0002\u0002\u0002\u011a\u0122\u0007H\u0002\u0002",
    "\u011b\u0122\u0007,\u0002\u0002\u011c\u0122\u0007-\u0002\u0002\u011d",
    "\u0122\u00056\u001c\u0002\u011e\u0122\u0007\'\u0002\u0002\u011f\u0122",
    "\u0005\"\u0012\u0002\u0120\u0122\u0007.\u0002\u0002\u0121\u011a\u0003",
    "\u0002\u0002\u0002\u0121\u011b\u0003\u0002\u0002\u0002\u0121\u011c\u0003",
    "\u0002\u0002\u0002\u0121\u011d\u0003\u0002\u0002\u0002\u0121\u011e\u0003",
    "\u0002\u0002\u0002\u0121\u011f\u0003\u0002\u0002\u0002\u0121\u0120\u0003",
    "\u0002\u0002\u0002\u01225\u0003\u0002\u0002\u0002\u0123\u0124\u0007",
    "G\u0002\u0002\u01247\u0003\u0002\u0002\u0002\u001e;DJLU[iv}\u0086\u008a",
    "\u008e\u0096\u009f\u00a6\u00ae\u00b8\u00c2\u00c5\u00ca\u00d0\u00db\u00e7",
    "\u00ee\u0104\u0115\u0117\u0121"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'---'", "'title:'", "'tags:'", null, "':'", 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, "'==='", null, null, 
                     "'\u001D'", "'\u001E'", null, null, null, null, null, 
                     null, null, "'[['", null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, "'+='", 
                     "'-='", "'*='", "'%='", "'/='", "'+'", "'-'", "'*'", 
                     "'/'", "'%'", "'('", "')'", null, null, null, null, 
                     null, null, "'|'", null, "']]'" ];

var symbolicNames = [ null, "BODY_ENTER", "HEADER_TITLE", "HEADER_TAGS", 
                      "HEADER_NAME", "HEADER_SEPARATOR", "STRING", "ID", 
                      "NEWLINE", "UNKNOWN", "TITLE_TEXT", "TITLE_TAG_END", 
                      "TAG_TEXT", "TAG_DELIMIT", "HEADER_TAG_END", "HEADER_TEXT", 
                      "HEADER_END", "BLANK_STATEMENT", "WS_IN_BODY", "COMMENT", 
                      "BODY_CLOSE", "TEXT_STRING", "SHORTCUT_ENTER", "INDENT", 
                      "DEDENT", "COMMAND_IF", "COMMAND_ELSE", "COMMAND_ELSE_IF", 
                      "COMMAND_ENDIF", "COMMAND_SET", "COMMAND_FUNC", "COMMAND_OPEN", 
                      "OPTION_ENTER", "HASHTAG", "TEXT", "COMMAND_WS", "COMMAND_CLOSE", 
                      "COMMAND_STRING", "KEYWORD_IF", "KEYWORD_ELSE", "KEYWORD_ELSE_IF", 
                      "KEYWORD_SET", "KEYWORD_TRUE", "KEYWORD_FALSE", "KEYWORD_NULL", 
                      "KEYWORD_TO", "OPERATOR_LOGICAL_LESS_THAN_EQUALS", 
                      "OPERATOR_LOGICAL_GREATER_THAN_EQUALS", "OPERATOR_LOGICAL_EQUALS", 
                      "OPERATOR_LOGICAL_LESS", "OPERATOR_LOGICAL_GREATER", 
                      "OPERATOR_LOGICAL_NOT_EQUALS", "OPERATOR_LOGICAL_AND", 
                      "OPERATOR_LOGICAL_OR", "OPERATOR_LOGICAL_XOR", "OPERATOR_LOGICAL_NOT", 
                      "OPERATOR_MATHS_ADDITION_EQUALS", "OPERATOR_MATHS_SUBTRACTION_EQUALS", 
                      "OPERATOR_MATHS_MULTIPLICATION_EQUALS", "OPERATOR_MATHS_MODULUS_EQUALS", 
                      "OPERATOR_MATHS_DIVISION_EQUALS", "OPERATOR_MATHS_ADDITION", 
                      "OPERATOR_MATHS_SUBTRACTION", "OPERATOR_MATHS_MULTIPLICATION", 
                      "OPERATOR_MATHS_DIVISION", "OPERATOR_MATHS_MODULUS", 
                      "LPAREN", "RPAREN", "COMMA", "VAR_ID", "BODY_NUMBER", 
                      "FUNC_ID", "COMMAND_UNKNOWN", "ACTION", "OPTION_SEPARATOR", 
                      "OPTION_TEXT", "OPTION_CLOSE", "OPTION_LINK" ];

var ruleNames =  [ "dialogue", "node", "header", "header_title", "header_tag_name", 
                   "header_tag", "header_line", "body", "statement", "shortcut", 
                   "if_statement", "if_clause", "else_if_clause", "else_clause", 
                   "set_statement", "option_statement", "func_call", "func_call_statement", 
                   "action_statement", "text", "line_statement", "blank_statement", 
                   "hashtag_block", "hashtag", "expression", "value", "variable" ];

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
YarnParser.BODY_ENTER = 1;
YarnParser.HEADER_TITLE = 2;
YarnParser.HEADER_TAGS = 3;
YarnParser.HEADER_NAME = 4;
YarnParser.HEADER_SEPARATOR = 5;
YarnParser.STRING = 6;
YarnParser.ID = 7;
YarnParser.NEWLINE = 8;
YarnParser.UNKNOWN = 9;
YarnParser.TITLE_TEXT = 10;
YarnParser.TITLE_TAG_END = 11;
YarnParser.TAG_TEXT = 12;
YarnParser.TAG_DELIMIT = 13;
YarnParser.HEADER_TAG_END = 14;
YarnParser.HEADER_TEXT = 15;
YarnParser.HEADER_END = 16;
YarnParser.BLANK_STATEMENT = 17;
YarnParser.WS_IN_BODY = 18;
YarnParser.COMMENT = 19;
YarnParser.BODY_CLOSE = 20;
YarnParser.TEXT_STRING = 21;
YarnParser.SHORTCUT_ENTER = 22;
YarnParser.INDENT = 23;
YarnParser.DEDENT = 24;
YarnParser.COMMAND_IF = 25;
YarnParser.COMMAND_ELSE = 26;
YarnParser.COMMAND_ELSE_IF = 27;
YarnParser.COMMAND_ENDIF = 28;
YarnParser.COMMAND_SET = 29;
YarnParser.COMMAND_FUNC = 30;
YarnParser.COMMAND_OPEN = 31;
YarnParser.OPTION_ENTER = 32;
YarnParser.HASHTAG = 33;
YarnParser.TEXT = 34;
YarnParser.COMMAND_WS = 35;
YarnParser.COMMAND_CLOSE = 36;
YarnParser.COMMAND_STRING = 37;
YarnParser.KEYWORD_IF = 38;
YarnParser.KEYWORD_ELSE = 39;
YarnParser.KEYWORD_ELSE_IF = 40;
YarnParser.KEYWORD_SET = 41;
YarnParser.KEYWORD_TRUE = 42;
YarnParser.KEYWORD_FALSE = 43;
YarnParser.KEYWORD_NULL = 44;
YarnParser.KEYWORD_TO = 45;
YarnParser.OPERATOR_LOGICAL_LESS_THAN_EQUALS = 46;
YarnParser.OPERATOR_LOGICAL_GREATER_THAN_EQUALS = 47;
YarnParser.OPERATOR_LOGICAL_EQUALS = 48;
YarnParser.OPERATOR_LOGICAL_LESS = 49;
YarnParser.OPERATOR_LOGICAL_GREATER = 50;
YarnParser.OPERATOR_LOGICAL_NOT_EQUALS = 51;
YarnParser.OPERATOR_LOGICAL_AND = 52;
YarnParser.OPERATOR_LOGICAL_OR = 53;
YarnParser.OPERATOR_LOGICAL_XOR = 54;
YarnParser.OPERATOR_LOGICAL_NOT = 55;
YarnParser.OPERATOR_MATHS_ADDITION_EQUALS = 56;
YarnParser.OPERATOR_MATHS_SUBTRACTION_EQUALS = 57;
YarnParser.OPERATOR_MATHS_MULTIPLICATION_EQUALS = 58;
YarnParser.OPERATOR_MATHS_MODULUS_EQUALS = 59;
YarnParser.OPERATOR_MATHS_DIVISION_EQUALS = 60;
YarnParser.OPERATOR_MATHS_ADDITION = 61;
YarnParser.OPERATOR_MATHS_SUBTRACTION = 62;
YarnParser.OPERATOR_MATHS_MULTIPLICATION = 63;
YarnParser.OPERATOR_MATHS_DIVISION = 64;
YarnParser.OPERATOR_MATHS_MODULUS = 65;
YarnParser.LPAREN = 66;
YarnParser.RPAREN = 67;
YarnParser.COMMA = 68;
YarnParser.VAR_ID = 69;
YarnParser.BODY_NUMBER = 70;
YarnParser.FUNC_ID = 71;
YarnParser.COMMAND_UNKNOWN = 72;
YarnParser.ACTION = 73;
YarnParser.OPTION_SEPARATOR = 74;
YarnParser.OPTION_TEXT = 75;
YarnParser.OPTION_CLOSE = 76;
YarnParser.OPTION_LINK = 77;

YarnParser.RULE_dialogue = 0;
YarnParser.RULE_node = 1;
YarnParser.RULE_header = 2;
YarnParser.RULE_header_title = 3;
YarnParser.RULE_header_tag_name = 4;
YarnParser.RULE_header_tag = 5;
YarnParser.RULE_header_line = 6;
YarnParser.RULE_body = 7;
YarnParser.RULE_statement = 8;
YarnParser.RULE_shortcut = 9;
YarnParser.RULE_if_statement = 10;
YarnParser.RULE_if_clause = 11;
YarnParser.RULE_else_if_clause = 12;
YarnParser.RULE_else_clause = 13;
YarnParser.RULE_set_statement = 14;
YarnParser.RULE_option_statement = 15;
YarnParser.RULE_func_call = 16;
YarnParser.RULE_func_call_statement = 17;
YarnParser.RULE_action_statement = 18;
YarnParser.RULE_text = 19;
YarnParser.RULE_line_statement = 20;
YarnParser.RULE_blank_statement = 21;
YarnParser.RULE_hashtag_block = 22;
YarnParser.RULE_hashtag = 23;
YarnParser.RULE_expression = 24;
YarnParser.RULE_value = 25;
YarnParser.RULE_variable = 26;

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
        this.state = 55; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 54;
            this.node();
            this.state = 57; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===YarnParser.HEADER_TITLE);
        this.state = 59;
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

NodeContext.prototype.header = function() {
    return this.getTypedRuleContext(HeaderContext,0);
};

NodeContext.prototype.body = function() {
    return this.getTypedRuleContext(BodyContext,0);
};

NodeContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(YarnParser.NEWLINE);
    } else {
        return this.getToken(YarnParser.NEWLINE, i);
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
        this.state = 61;
        this.header();
        this.state = 62;
        this.body();
        this.state = 66;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.NEWLINE) {
            this.state = 63;
            this.match(YarnParser.NEWLINE);
            this.state = 68;
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
    return this;
}

HeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderContext.prototype.constructor = HeaderContext;

HeaderContext.prototype.header_title = function() {
    return this.getTypedRuleContext(Header_titleContext,0);
};

HeaderContext.prototype.header_tag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Header_tagContext);
    } else {
        return this.getTypedRuleContext(Header_tagContext,i);
    }
};

HeaderContext.prototype.header_line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Header_lineContext);
    } else {
        return this.getTypedRuleContext(Header_lineContext,i);
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.header_title();
        this.state = 74;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.HEADER_TAGS || _la===YarnParser.HEADER_NAME) {
            this.state = 72;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case YarnParser.HEADER_TAGS:
                this.state = 70;
                this.header_tag();
                break;
            case YarnParser.HEADER_NAME:
                this.state = 71;
                this.header_line();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 76;
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

function Header_titleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_header_title;
    return this;
}

Header_titleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Header_titleContext.prototype.constructor = Header_titleContext;

Header_titleContext.prototype.HEADER_TITLE = function() {
    return this.getToken(YarnParser.HEADER_TITLE, 0);
};

Header_titleContext.prototype.TITLE_TEXT = function() {
    return this.getToken(YarnParser.TITLE_TEXT, 0);
};

Header_titleContext.prototype.TITLE_TAG_END = function() {
    return this.getToken(YarnParser.TITLE_TAG_END, 0);
};

Header_titleContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterHeader_title(this);
	}
};

Header_titleContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitHeader_title(this);
	}
};




YarnParser.Header_titleContext = Header_titleContext;

YarnParser.prototype.header_title = function() {

    var localctx = new Header_titleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, YarnParser.RULE_header_title);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(YarnParser.HEADER_TITLE);
        this.state = 78;
        this.match(YarnParser.TITLE_TEXT);
        this.state = 79;
        this.match(YarnParser.TITLE_TAG_END);
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

function Header_tag_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_header_tag_name;
    return this;
}

Header_tag_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Header_tag_nameContext.prototype.constructor = Header_tag_nameContext;

Header_tag_nameContext.prototype.TAG_TEXT = function() {
    return this.getToken(YarnParser.TAG_TEXT, 0);
};

Header_tag_nameContext.prototype.TAG_DELIMIT = function() {
    return this.getToken(YarnParser.TAG_DELIMIT, 0);
};

Header_tag_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterHeader_tag_name(this);
	}
};

Header_tag_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitHeader_tag_name(this);
	}
};




YarnParser.Header_tag_nameContext = Header_tag_nameContext;

YarnParser.prototype.header_tag_name = function() {

    var localctx = new Header_tag_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, YarnParser.RULE_header_tag_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(YarnParser.TAG_TEXT);
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.TAG_DELIMIT) {
            this.state = 82;
            this.match(YarnParser.TAG_DELIMIT);
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

function Header_tagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_header_tag;
    return this;
}

Header_tagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Header_tagContext.prototype.constructor = Header_tagContext;

Header_tagContext.prototype.HEADER_TAGS = function() {
    return this.getToken(YarnParser.HEADER_TAGS, 0);
};

Header_tagContext.prototype.HEADER_TAG_END = function() {
    return this.getToken(YarnParser.HEADER_TAG_END, 0);
};

Header_tagContext.prototype.header_tag_name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Header_tag_nameContext);
    } else {
        return this.getTypedRuleContext(Header_tag_nameContext,i);
    }
};

Header_tagContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterHeader_tag(this);
	}
};

Header_tagContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitHeader_tag(this);
	}
};




YarnParser.Header_tagContext = Header_tagContext;

YarnParser.prototype.header_tag = function() {

    var localctx = new Header_tagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, YarnParser.RULE_header_tag);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this.match(YarnParser.HEADER_TAGS);
        this.state = 89;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.TAG_TEXT) {
            this.state = 86;
            this.header_tag_name();
            this.state = 91;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 92;
        this.match(YarnParser.HEADER_TAG_END);
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

function Header_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_header_line;
    return this;
}

Header_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Header_lineContext.prototype.constructor = Header_lineContext;

Header_lineContext.prototype.HEADER_NAME = function() {
    return this.getToken(YarnParser.HEADER_NAME, 0);
};

Header_lineContext.prototype.HEADER_TEXT = function() {
    return this.getToken(YarnParser.HEADER_TEXT, 0);
};

Header_lineContext.prototype.HEADER_END = function() {
    return this.getToken(YarnParser.HEADER_END, 0);
};

Header_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterHeader_line(this);
	}
};

Header_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitHeader_line(this);
	}
};




YarnParser.Header_lineContext = Header_lineContext;

YarnParser.prototype.header_line = function() {

    var localctx = new Header_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, YarnParser.RULE_header_line);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(YarnParser.HEADER_NAME);
        this.state = 95;
        this.match(YarnParser.HEADER_SEPARATOR);
        this.state = 96;
        this.match(YarnParser.HEADER_TEXT);
        this.state = 97;
        this.match(YarnParser.HEADER_END);
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

BodyContext.prototype.BODY_ENTER = function() {
    return this.getToken(YarnParser.BODY_ENTER, 0);
};

BodyContext.prototype.BODY_CLOSE = function() {
    return this.getToken(YarnParser.BODY_CLOSE, 0);
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
    this.enterRule(localctx, 14, YarnParser.RULE_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.match(YarnParser.BODY_ENTER);
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (YarnParser.BLANK_STATEMENT - 17)) | (1 << (YarnParser.TEXT_STRING - 17)) | (1 << (YarnParser.SHORTCUT_ENTER - 17)) | (1 << (YarnParser.COMMAND_IF - 17)) | (1 << (YarnParser.COMMAND_SET - 17)) | (1 << (YarnParser.COMMAND_FUNC - 17)) | (1 << (YarnParser.OPTION_ENTER - 17)) | (1 << (YarnParser.TEXT - 17)))) !== 0) || _la===YarnParser.ACTION) {
            this.state = 100;
            this.statement();
            this.state = 105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 106;
        this.match(YarnParser.BODY_CLOSE);
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

StatementContext.prototype.shortcut = function() {
    return this.getTypedRuleContext(ShortcutContext,0);
};

StatementContext.prototype.if_statement = function() {
    return this.getTypedRuleContext(If_statementContext,0);
};

StatementContext.prototype.set_statement = function() {
    return this.getTypedRuleContext(Set_statementContext,0);
};

StatementContext.prototype.option_statement = function() {
    return this.getTypedRuleContext(Option_statementContext,0);
};

StatementContext.prototype.func_call_statement = function() {
    return this.getTypedRuleContext(Func_call_statementContext,0);
};

StatementContext.prototype.action_statement = function() {
    return this.getTypedRuleContext(Action_statementContext,0);
};

StatementContext.prototype.line_statement = function() {
    return this.getTypedRuleContext(Line_statementContext,0);
};

StatementContext.prototype.blank_statement = function() {
    return this.getTypedRuleContext(Blank_statementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitStatement(this);
	}
};




YarnParser.StatementContext = StatementContext;

YarnParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, YarnParser.RULE_statement);
    try {
        this.state = 116;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.SHORTCUT_ENTER:
            this.enterOuterAlt(localctx, 1);
            this.state = 108;
            this.shortcut();
            break;
        case YarnParser.COMMAND_IF:
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.if_statement();
            break;
        case YarnParser.COMMAND_SET:
            this.enterOuterAlt(localctx, 3);
            this.state = 110;
            this.set_statement();
            break;
        case YarnParser.OPTION_ENTER:
            this.enterOuterAlt(localctx, 4);
            this.state = 111;
            this.option_statement();
            break;
        case YarnParser.COMMAND_FUNC:
            this.enterOuterAlt(localctx, 5);
            this.state = 112;
            this.func_call_statement();
            break;
        case YarnParser.ACTION:
            this.enterOuterAlt(localctx, 6);
            this.state = 113;
            this.action_statement();
            break;
        case YarnParser.TEXT_STRING:
        case YarnParser.TEXT:
            this.enterOuterAlt(localctx, 7);
            this.state = 114;
            this.line_statement();
            break;
        case YarnParser.BLANK_STATEMENT:
            this.enterOuterAlt(localctx, 8);
            this.state = 115;
            this.blank_statement();
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

function ShortcutContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_shortcut;
    return this;
}

ShortcutContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShortcutContext.prototype.constructor = ShortcutContext;

ShortcutContext.prototype.SHORTCUT_ENTER = function() {
    return this.getToken(YarnParser.SHORTCUT_ENTER, 0);
};

ShortcutContext.prototype.INDENT = function() {
    return this.getToken(YarnParser.INDENT, 0);
};

ShortcutContext.prototype.DEDENT = function() {
    return this.getToken(YarnParser.DEDENT, 0);
};

ShortcutContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
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




YarnParser.ShortcutContext = ShortcutContext;

YarnParser.prototype.shortcut = function() {

    var localctx = new ShortcutContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, YarnParser.RULE_shortcut);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.match(YarnParser.SHORTCUT_ENTER);
        this.state = 119;
        this.match(YarnParser.INDENT);
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (YarnParser.BLANK_STATEMENT - 17)) | (1 << (YarnParser.TEXT_STRING - 17)) | (1 << (YarnParser.SHORTCUT_ENTER - 17)) | (1 << (YarnParser.COMMAND_IF - 17)) | (1 << (YarnParser.COMMAND_SET - 17)) | (1 << (YarnParser.COMMAND_FUNC - 17)) | (1 << (YarnParser.OPTION_ENTER - 17)) | (1 << (YarnParser.TEXT - 17)))) !== 0) || _la===YarnParser.ACTION) {
            this.state = 120;
            this.statement();
            this.state = 125;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 126;
        this.match(YarnParser.DEDENT);
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

If_statementContext.prototype.COMMAND_ENDIF = function() {
    return this.getToken(YarnParser.COMMAND_ENDIF, 0);
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

If_statementContext.prototype.hashtag_block = function() {
    return this.getTypedRuleContext(Hashtag_blockContext,0);
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
    this.enterRule(localctx, 20, YarnParser.RULE_if_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.if_clause();
        this.state = 132;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.COMMAND_ELSE_IF) {
            this.state = 129;
            this.else_if_clause();
            this.state = 134;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 136;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.COMMAND_ELSE) {
            this.state = 135;
            this.else_clause();
        }

        this.state = 138;
        this.match(YarnParser.COMMAND_ENDIF);
        this.state = 140;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.HASHTAG) {
            this.state = 139;
            this.hashtag_block();
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
    return this;
}

If_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_clauseContext.prototype.constructor = If_clauseContext;

If_clauseContext.prototype.COMMAND_IF = function() {
    return this.getToken(YarnParser.COMMAND_IF, 0);
};

If_clauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

If_clauseContext.prototype.COMMAND_CLOSE = function() {
    return this.getToken(YarnParser.COMMAND_CLOSE, 0);
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
    this.enterRule(localctx, 22, YarnParser.RULE_if_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(YarnParser.COMMAND_IF);
        this.state = 143;
        this.expression(0);
        this.state = 144;
        this.match(YarnParser.COMMAND_CLOSE);
        this.state = 148;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (YarnParser.BLANK_STATEMENT - 17)) | (1 << (YarnParser.TEXT_STRING - 17)) | (1 << (YarnParser.SHORTCUT_ENTER - 17)) | (1 << (YarnParser.COMMAND_IF - 17)) | (1 << (YarnParser.COMMAND_SET - 17)) | (1 << (YarnParser.COMMAND_FUNC - 17)) | (1 << (YarnParser.OPTION_ENTER - 17)) | (1 << (YarnParser.TEXT - 17)))) !== 0) || _la===YarnParser.ACTION) {
            this.state = 145;
            this.statement();
            this.state = 150;
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
    return this;
}

Else_if_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Else_if_clauseContext.prototype.constructor = Else_if_clauseContext;

Else_if_clauseContext.prototype.COMMAND_ELSE_IF = function() {
    return this.getToken(YarnParser.COMMAND_ELSE_IF, 0);
};

Else_if_clauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Else_if_clauseContext.prototype.COMMAND_CLOSE = function() {
    return this.getToken(YarnParser.COMMAND_CLOSE, 0);
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
    this.enterRule(localctx, 24, YarnParser.RULE_else_if_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(YarnParser.COMMAND_ELSE_IF);
        this.state = 152;
        this.expression(0);
        this.state = 153;
        this.match(YarnParser.COMMAND_CLOSE);
        this.state = 157;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (YarnParser.BLANK_STATEMENT - 17)) | (1 << (YarnParser.TEXT_STRING - 17)) | (1 << (YarnParser.SHORTCUT_ENTER - 17)) | (1 << (YarnParser.COMMAND_IF - 17)) | (1 << (YarnParser.COMMAND_SET - 17)) | (1 << (YarnParser.COMMAND_FUNC - 17)) | (1 << (YarnParser.OPTION_ENTER - 17)) | (1 << (YarnParser.TEXT - 17)))) !== 0) || _la===YarnParser.ACTION) {
            this.state = 154;
            this.statement();
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

Else_clauseContext.prototype.COMMAND_ELSE = function() {
    return this.getToken(YarnParser.COMMAND_ELSE, 0);
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
    this.enterRule(localctx, 26, YarnParser.RULE_else_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.match(YarnParser.COMMAND_ELSE);
        this.state = 164;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (YarnParser.BLANK_STATEMENT - 17)) | (1 << (YarnParser.TEXT_STRING - 17)) | (1 << (YarnParser.SHORTCUT_ENTER - 17)) | (1 << (YarnParser.COMMAND_IF - 17)) | (1 << (YarnParser.COMMAND_SET - 17)) | (1 << (YarnParser.COMMAND_FUNC - 17)) | (1 << (YarnParser.OPTION_ENTER - 17)) | (1 << (YarnParser.TEXT - 17)))) !== 0) || _la===YarnParser.ACTION) {
            this.state = 161;
            this.statement();
            this.state = 166;
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

function Set_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_set_statement;
    return this;
}

Set_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Set_statementContext.prototype.constructor = Set_statementContext;

Set_statementContext.prototype.COMMAND_SET = function() {
    return this.getToken(YarnParser.COMMAND_SET, 0);
};

Set_statementContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Set_statementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Set_statementContext.prototype.COMMAND_CLOSE = function() {
    return this.getToken(YarnParser.COMMAND_CLOSE, 0);
};

Set_statementContext.prototype.KEYWORD_TO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(YarnParser.KEYWORD_TO);
    } else {
        return this.getToken(YarnParser.KEYWORD_TO, i);
    }
};


Set_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterSet_statement(this);
	}
};

Set_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitSet_statement(this);
	}
};




YarnParser.Set_statementContext = Set_statementContext;

YarnParser.prototype.set_statement = function() {

    var localctx = new Set_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, YarnParser.RULE_set_statement);
    var _la = 0; // Token type
    try {
        this.state = 182;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 167;
            this.match(YarnParser.COMMAND_SET);
            this.state = 168;
            this.variable();
            this.state = 172;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===YarnParser.KEYWORD_TO) {
                this.state = 169;
                this.match(YarnParser.KEYWORD_TO);
                this.state = 174;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 175;
            this.expression(0);
            this.state = 176;
            this.match(YarnParser.COMMAND_CLOSE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 178;
            this.match(YarnParser.COMMAND_SET);
            this.state = 179;
            this.expression(0);
            this.state = 180;
            this.match(YarnParser.COMMAND_CLOSE);
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

function Option_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_option_statement;
    return this;
}

Option_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Option_statementContext.prototype.constructor = Option_statementContext;

Option_statementContext.prototype.OPTION_TEXT = function() {
    return this.getToken(YarnParser.OPTION_TEXT, 0);
};

Option_statementContext.prototype.OPTION_LINK = function() {
    return this.getToken(YarnParser.OPTION_LINK, 0);
};

Option_statementContext.prototype.hashtag_block = function() {
    return this.getTypedRuleContext(Hashtag_blockContext,0);
};

Option_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterOption_statement(this);
	}
};

Option_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitOption_statement(this);
	}
};




YarnParser.Option_statementContext = Option_statementContext;

YarnParser.prototype.option_statement = function() {

    var localctx = new Option_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, YarnParser.RULE_option_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.state = 184;
            this.match(YarnParser.OPTION_ENTER);
            this.state = 185;
            this.match(YarnParser.OPTION_TEXT);
            this.state = 186;
            this.match(YarnParser.OPTION_SEPARATOR);
            this.state = 187;
            this.match(YarnParser.OPTION_LINK);
            this.state = 188;
            this.match(YarnParser.OPTION_CLOSE);
            break;

        case 2:
            this.state = 189;
            this.match(YarnParser.OPTION_ENTER);
            this.state = 190;
            this.match(YarnParser.OPTION_TEXT);
            this.state = 191;
            this.match(YarnParser.OPTION_CLOSE);
            break;

        }
        this.state = 195;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.HASHTAG) {
            this.state = 194;
            this.hashtag_block();
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

function Func_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_func_call;
    return this;
}

Func_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_callContext.prototype.constructor = Func_callContext;

Func_callContext.prototype.FUNC_ID = function() {
    return this.getToken(YarnParser.FUNC_ID, 0);
};

Func_callContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Func_callContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(YarnParser.COMMA);
    } else {
        return this.getToken(YarnParser.COMMA, i);
    }
};


Func_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterFunc_call(this);
	}
};

Func_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitFunc_call(this);
	}
};




YarnParser.Func_callContext = Func_callContext;

YarnParser.prototype.func_call = function() {

    var localctx = new Func_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, YarnParser.RULE_func_call);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(YarnParser.FUNC_ID);
        this.state = 198;
        this.match(YarnParser.LPAREN);
        this.state = 200;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (YarnParser.COMMAND_STRING - 37)) | (1 << (YarnParser.KEYWORD_TRUE - 37)) | (1 << (YarnParser.KEYWORD_FALSE - 37)) | (1 << (YarnParser.KEYWORD_NULL - 37)) | (1 << (YarnParser.OPERATOR_LOGICAL_NOT - 37)) | (1 << (YarnParser.OPERATOR_MATHS_SUBTRACTION - 37)) | (1 << (YarnParser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (YarnParser.VAR_ID - 69)) | (1 << (YarnParser.BODY_NUMBER - 69)) | (1 << (YarnParser.FUNC_ID - 69)))) !== 0)) {
            this.state = 199;
            this.expression(0);
        }

        this.state = 206;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.COMMA) {
            this.state = 202;
            this.match(YarnParser.COMMA);
            this.state = 203;
            this.expression(0);
            this.state = 208;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 209;
        this.match(YarnParser.RPAREN);
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

function Func_call_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_func_call_statement;
    return this;
}

Func_call_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_call_statementContext.prototype.constructor = Func_call_statementContext;

Func_call_statementContext.prototype.COMMAND_FUNC = function() {
    return this.getToken(YarnParser.COMMAND_FUNC, 0);
};

Func_call_statementContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Func_call_statementContext.prototype.COMMAND_CLOSE = function() {
    return this.getToken(YarnParser.COMMAND_CLOSE, 0);
};

Func_call_statementContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(YarnParser.COMMA);
    } else {
        return this.getToken(YarnParser.COMMA, i);
    }
};


Func_call_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterFunc_call_statement(this);
	}
};

Func_call_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitFunc_call_statement(this);
	}
};




YarnParser.Func_call_statementContext = Func_call_statementContext;

YarnParser.prototype.func_call_statement = function() {

    var localctx = new Func_call_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, YarnParser.RULE_func_call_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(YarnParser.COMMAND_FUNC);
        this.state = 212;
        this.expression(0);
        this.state = 217;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.COMMA) {
            this.state = 213;
            this.match(YarnParser.COMMA);
            this.state = 214;
            this.expression(0);
            this.state = 219;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 220;
        this.match(YarnParser.RPAREN);
        this.state = 221;
        this.match(YarnParser.COMMAND_CLOSE);
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

function Action_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_action_statement;
    return this;
}

Action_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Action_statementContext.prototype.constructor = Action_statementContext;

Action_statementContext.prototype.ACTION = function() {
    return this.getToken(YarnParser.ACTION, 0);
};

Action_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterAction_statement(this);
	}
};

Action_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitAction_statement(this);
	}
};




YarnParser.Action_statementContext = Action_statementContext;

YarnParser.prototype.action_statement = function() {

    var localctx = new Action_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, YarnParser.RULE_action_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.match(YarnParser.ACTION);
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
    return this;
}

TextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextContext.prototype.constructor = TextContext;

TextContext.prototype.TEXT = function() {
    return this.getToken(YarnParser.TEXT, 0);
};

TextContext.prototype.TEXT_STRING = function() {
    return this.getToken(YarnParser.TEXT_STRING, 0);
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
    this.enterRule(localctx, 38, YarnParser.RULE_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        _la = this._input.LA(1);
        if(!(_la===YarnParser.TEXT_STRING || _la===YarnParser.TEXT)) {
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

function Line_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_line_statement;
    return this;
}

Line_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Line_statementContext.prototype.constructor = Line_statementContext;

Line_statementContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

Line_statementContext.prototype.hashtag_block = function() {
    return this.getTypedRuleContext(Hashtag_blockContext,0);
};

Line_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterLine_statement(this);
	}
};

Line_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitLine_statement(this);
	}
};




YarnParser.Line_statementContext = Line_statementContext;

YarnParser.prototype.line_statement = function() {

    var localctx = new Line_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, YarnParser.RULE_line_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.text();
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.HASHTAG) {
            this.state = 228;
            this.hashtag_block();
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

function Blank_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_blank_statement;
    return this;
}

Blank_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Blank_statementContext.prototype.constructor = Blank_statementContext;

Blank_statementContext.prototype.BLANK_STATEMENT = function() {
    return this.getToken(YarnParser.BLANK_STATEMENT, 0);
};

Blank_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterBlank_statement(this);
	}
};

Blank_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitBlank_statement(this);
	}
};




YarnParser.Blank_statementContext = Blank_statementContext;

YarnParser.prototype.blank_statement = function() {

    var localctx = new Blank_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, YarnParser.RULE_blank_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        this.match(YarnParser.BLANK_STATEMENT);
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

function Hashtag_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_hashtag_block;
    return this;
}

Hashtag_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Hashtag_blockContext.prototype.constructor = Hashtag_blockContext;

Hashtag_blockContext.prototype.hashtag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HashtagContext);
    } else {
        return this.getTypedRuleContext(HashtagContext,i);
    }
};

Hashtag_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterHashtag_block(this);
	}
};

Hashtag_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitHashtag_block(this);
	}
};




YarnParser.Hashtag_blockContext = Hashtag_blockContext;

YarnParser.prototype.hashtag_block = function() {

    var localctx = new Hashtag_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, YarnParser.RULE_hashtag_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 233;
            this.hashtag();
            this.state = 236; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===YarnParser.HASHTAG);
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

function HashtagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_hashtag;
    return this;
}

HashtagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HashtagContext.prototype.constructor = HashtagContext;

HashtagContext.prototype.HASHTAG = function() {
    return this.getToken(YarnParser.HASHTAG, 0);
};

HashtagContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterHashtag(this);
	}
};

HashtagContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitHashtag(this);
	}
};




YarnParser.HashtagContext = HashtagContext;

YarnParser.prototype.hashtag = function() {

    var localctx = new HashtagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, YarnParser.RULE_hashtag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.match(YarnParser.HASHTAG);
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

function ExpParensContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpParensContext.prototype = Object.create(ExpressionContext.prototype);
ExpParensContext.prototype.constructor = ExpParensContext;

YarnParser.ExpParensContext = ExpParensContext;

ExpParensContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ExpParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterExpParens(this);
	}
};

ExpParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitExpParens(this);
	}
};


function ExpMultDivModContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpMultDivModContext.prototype = Object.create(ExpressionContext.prototype);
ExpMultDivModContext.prototype.constructor = ExpMultDivModContext;

YarnParser.ExpMultDivModContext = ExpMultDivModContext;

ExpMultDivModContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
ExpMultDivModContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterExpMultDivMod(this);
	}
};

ExpMultDivModContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitExpMultDivMod(this);
	}
};


function ExpMultDivModEqualsContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpMultDivModEqualsContext.prototype = Object.create(ExpressionContext.prototype);
ExpMultDivModEqualsContext.prototype.constructor = ExpMultDivModEqualsContext;

YarnParser.ExpMultDivModEqualsContext = ExpMultDivModEqualsContext;

ExpMultDivModEqualsContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

ExpMultDivModEqualsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ExpMultDivModEqualsContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterExpMultDivModEquals(this);
	}
};

ExpMultDivModEqualsContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitExpMultDivModEquals(this);
	}
};


function ExpComparisonContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpComparisonContext.prototype = Object.create(ExpressionContext.prototype);
ExpComparisonContext.prototype.constructor = ExpComparisonContext;

YarnParser.ExpComparisonContext = ExpComparisonContext;

ExpComparisonContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpComparisonContext.prototype.OPERATOR_LOGICAL_LESS_THAN_EQUALS = function() {
    return this.getToken(YarnParser.OPERATOR_LOGICAL_LESS_THAN_EQUALS, 0);
};

ExpComparisonContext.prototype.OPERATOR_LOGICAL_GREATER_THAN_EQUALS = function() {
    return this.getToken(YarnParser.OPERATOR_LOGICAL_GREATER_THAN_EQUALS, 0);
};

ExpComparisonContext.prototype.OPERATOR_LOGICAL_LESS = function() {
    return this.getToken(YarnParser.OPERATOR_LOGICAL_LESS, 0);
};

ExpComparisonContext.prototype.OPERATOR_LOGICAL_GREATER = function() {
    return this.getToken(YarnParser.OPERATOR_LOGICAL_GREATER, 0);
};
ExpComparisonContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterExpComparison(this);
	}
};

ExpComparisonContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitExpComparison(this);
	}
};


function ExpNegativeContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpNegativeContext.prototype = Object.create(ExpressionContext.prototype);
ExpNegativeContext.prototype.constructor = ExpNegativeContext;

YarnParser.ExpNegativeContext = ExpNegativeContext;

ExpNegativeContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ExpNegativeContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterExpNegative(this);
	}
};

ExpNegativeContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitExpNegative(this);
	}
};


function ExpAndOrXorContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpAndOrXorContext.prototype = Object.create(ExpressionContext.prototype);
ExpAndOrXorContext.prototype.constructor = ExpAndOrXorContext;

YarnParser.ExpAndOrXorContext = ExpAndOrXorContext;

ExpAndOrXorContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpAndOrXorContext.prototype.OPERATOR_LOGICAL_AND = function() {
    return this.getToken(YarnParser.OPERATOR_LOGICAL_AND, 0);
};

ExpAndOrXorContext.prototype.OPERATOR_LOGICAL_OR = function() {
    return this.getToken(YarnParser.OPERATOR_LOGICAL_OR, 0);
};

ExpAndOrXorContext.prototype.OPERATOR_LOGICAL_XOR = function() {
    return this.getToken(YarnParser.OPERATOR_LOGICAL_XOR, 0);
};
ExpAndOrXorContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterExpAndOrXor(this);
	}
};

ExpAndOrXorContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitExpAndOrXor(this);
	}
};


function ExpPlusMinusEqualsContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpPlusMinusEqualsContext.prototype = Object.create(ExpressionContext.prototype);
ExpPlusMinusEqualsContext.prototype.constructor = ExpPlusMinusEqualsContext;

YarnParser.ExpPlusMinusEqualsContext = ExpPlusMinusEqualsContext;

ExpPlusMinusEqualsContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

ExpPlusMinusEqualsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ExpPlusMinusEqualsContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterExpPlusMinusEquals(this);
	}
};

ExpPlusMinusEqualsContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitExpPlusMinusEquals(this);
	}
};


function ExpAddSubContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpAddSubContext.prototype = Object.create(ExpressionContext.prototype);
ExpAddSubContext.prototype.constructor = ExpAddSubContext;

YarnParser.ExpAddSubContext = ExpAddSubContext;

ExpAddSubContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
ExpAddSubContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterExpAddSub(this);
	}
};

ExpAddSubContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitExpAddSub(this);
	}
};


function ExpNotContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpNotContext.prototype = Object.create(ExpressionContext.prototype);
ExpNotContext.prototype.constructor = ExpNotContext;

YarnParser.ExpNotContext = ExpNotContext;

ExpNotContext.prototype.OPERATOR_LOGICAL_NOT = function() {
    return this.getToken(YarnParser.OPERATOR_LOGICAL_NOT, 0);
};

ExpNotContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ExpNotContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterExpNot(this);
	}
};

ExpNotContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitExpNot(this);
	}
};


function ExpValueContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpValueContext.prototype = Object.create(ExpressionContext.prototype);
ExpValueContext.prototype.constructor = ExpValueContext;

YarnParser.ExpValueContext = ExpValueContext;

ExpValueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
ExpValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterExpValue(this);
	}
};

ExpValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitExpValue(this);
	}
};


function ExpEqualityContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpEqualityContext.prototype = Object.create(ExpressionContext.prototype);
ExpEqualityContext.prototype.constructor = ExpEqualityContext;

YarnParser.ExpEqualityContext = ExpEqualityContext;

ExpEqualityContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpEqualityContext.prototype.OPERATOR_LOGICAL_EQUALS = function() {
    return this.getToken(YarnParser.OPERATOR_LOGICAL_EQUALS, 0);
};

ExpEqualityContext.prototype.OPERATOR_LOGICAL_NOT_EQUALS = function() {
    return this.getToken(YarnParser.OPERATOR_LOGICAL_NOT_EQUALS, 0);
};
ExpEqualityContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterExpEquality(this);
	}
};

ExpEqualityContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitExpEquality(this);
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
    var _startState = 48;
    this.enterRecursionRule(localctx, 48, YarnParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ExpParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 241;
            this.match(YarnParser.LPAREN);
            this.state = 242;
            this.expression(0);
            this.state = 243;
            this.match(YarnParser.RPAREN);
            break;

        case 2:
            localctx = new ExpNegativeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 245;
            this.match(YarnParser.OPERATOR_MATHS_SUBTRACTION);
            this.state = 246;
            this.expression(10);
            break;

        case 3:
            localctx = new ExpNotContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 247;
            this.match(YarnParser.OPERATOR_LOGICAL_NOT);
            this.state = 248;
            this.expression(9);
            break;

        case 4:
            localctx = new ExpMultDivModEqualsContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 249;
            this.variable();
            this.state = 250;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (YarnParser.OPERATOR_MATHS_MULTIPLICATION_EQUALS - 58)) | (1 << (YarnParser.OPERATOR_MATHS_MODULUS_EQUALS - 58)) | (1 << (YarnParser.OPERATOR_MATHS_DIVISION_EQUALS - 58)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 251;
            this.expression(4);
            break;

        case 5:
            localctx = new ExpPlusMinusEqualsContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 253;
            this.variable();
            this.state = 254;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===YarnParser.OPERATOR_MATHS_ADDITION_EQUALS || _la===YarnParser.OPERATOR_MATHS_SUBTRACTION_EQUALS)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 255;
            this.expression(3);
            break;

        case 6:
            localctx = new ExpValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 257;
            this.value();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 277;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 275;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpMultDivModContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, YarnParser.RULE_expression);
                    this.state = 260;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 261;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 63)) & ~0x1f) == 0 && ((1 << (_la - 63)) & ((1 << (YarnParser.OPERATOR_MATHS_MULTIPLICATION - 63)) | (1 << (YarnParser.OPERATOR_MATHS_DIVISION - 63)) | (1 << (YarnParser.OPERATOR_MATHS_MODULUS - 63)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 262;
                    this.expression(9);
                    break;

                case 2:
                    localctx = new ExpAddSubContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, YarnParser.RULE_expression);
                    this.state = 263;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 264;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===YarnParser.OPERATOR_MATHS_ADDITION || _la===YarnParser.OPERATOR_MATHS_SUBTRACTION)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 265;
                    this.expression(8);
                    break;

                case 3:
                    localctx = new ExpComparisonContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, YarnParser.RULE_expression);
                    this.state = 266;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 267;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (YarnParser.OPERATOR_LOGICAL_LESS_THAN_EQUALS - 46)) | (1 << (YarnParser.OPERATOR_LOGICAL_GREATER_THAN_EQUALS - 46)) | (1 << (YarnParser.OPERATOR_LOGICAL_LESS - 46)) | (1 << (YarnParser.OPERATOR_LOGICAL_GREATER - 46)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 268;
                    this.expression(7);
                    break;

                case 4:
                    localctx = new ExpEqualityContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, YarnParser.RULE_expression);
                    this.state = 269;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 270;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===YarnParser.OPERATOR_LOGICAL_EQUALS || _la===YarnParser.OPERATOR_LOGICAL_NOT_EQUALS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 271;
                    this.expression(6);
                    break;

                case 5:
                    localctx = new ExpAndOrXorContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, YarnParser.RULE_expression);
                    this.state = 272;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 273;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 52)) & ~0x1f) == 0 && ((1 << (_la - 52)) & ((1 << (YarnParser.OPERATOR_LOGICAL_AND - 52)) | (1 << (YarnParser.OPERATOR_LOGICAL_OR - 52)) | (1 << (YarnParser.OPERATOR_LOGICAL_XOR - 52)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 274;
                    this.expression(3);
                    break;

                } 
            }
            this.state = 279;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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


function ValueNullContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValueNullContext.prototype = Object.create(ValueContext.prototype);
ValueNullContext.prototype.constructor = ValueNullContext;

YarnParser.ValueNullContext = ValueNullContext;

ValueNullContext.prototype.KEYWORD_NULL = function() {
    return this.getToken(YarnParser.KEYWORD_NULL, 0);
};
ValueNullContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterValueNull(this);
	}
};

ValueNullContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitValueNull(this);
	}
};


function ValueNumberContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValueNumberContext.prototype = Object.create(ValueContext.prototype);
ValueNumberContext.prototype.constructor = ValueNumberContext;

YarnParser.ValueNumberContext = ValueNumberContext;

ValueNumberContext.prototype.BODY_NUMBER = function() {
    return this.getToken(YarnParser.BODY_NUMBER, 0);
};
ValueNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterValueNumber(this);
	}
};

ValueNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitValueNumber(this);
	}
};


function ValueTrueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValueTrueContext.prototype = Object.create(ValueContext.prototype);
ValueTrueContext.prototype.constructor = ValueTrueContext;

YarnParser.ValueTrueContext = ValueTrueContext;

ValueTrueContext.prototype.KEYWORD_TRUE = function() {
    return this.getToken(YarnParser.KEYWORD_TRUE, 0);
};
ValueTrueContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterValueTrue(this);
	}
};

ValueTrueContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitValueTrue(this);
	}
};


function ValueFalseContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValueFalseContext.prototype = Object.create(ValueContext.prototype);
ValueFalseContext.prototype.constructor = ValueFalseContext;

YarnParser.ValueFalseContext = ValueFalseContext;

ValueFalseContext.prototype.KEYWORD_FALSE = function() {
    return this.getToken(YarnParser.KEYWORD_FALSE, 0);
};
ValueFalseContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterValueFalse(this);
	}
};

ValueFalseContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitValueFalse(this);
	}
};


function ValueFuncContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValueFuncContext.prototype = Object.create(ValueContext.prototype);
ValueFuncContext.prototype.constructor = ValueFuncContext;

YarnParser.ValueFuncContext = ValueFuncContext;

ValueFuncContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};
ValueFuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterValueFunc(this);
	}
};

ValueFuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitValueFunc(this);
	}
};


function ValueVarContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValueVarContext.prototype = Object.create(ValueContext.prototype);
ValueVarContext.prototype.constructor = ValueVarContext;

YarnParser.ValueVarContext = ValueVarContext;

ValueVarContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
ValueVarContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterValueVar(this);
	}
};

ValueVarContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitValueVar(this);
	}
};


function ValueStringContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValueStringContext.prototype = Object.create(ValueContext.prototype);
ValueStringContext.prototype.constructor = ValueStringContext;

YarnParser.ValueStringContext = ValueStringContext;

ValueStringContext.prototype.COMMAND_STRING = function() {
    return this.getToken(YarnParser.COMMAND_STRING, 0);
};
ValueStringContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterValueString(this);
	}
};

ValueStringContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitValueString(this);
	}
};



YarnParser.ValueContext = ValueContext;

YarnParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, YarnParser.RULE_value);
    try {
        this.state = 287;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.BODY_NUMBER:
            localctx = new ValueNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 280;
            this.match(YarnParser.BODY_NUMBER);
            break;
        case YarnParser.KEYWORD_TRUE:
            localctx = new ValueTrueContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 281;
            this.match(YarnParser.KEYWORD_TRUE);
            break;
        case YarnParser.KEYWORD_FALSE:
            localctx = new ValueFalseContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 282;
            this.match(YarnParser.KEYWORD_FALSE);
            break;
        case YarnParser.VAR_ID:
            localctx = new ValueVarContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 283;
            this.variable();
            break;
        case YarnParser.COMMAND_STRING:
            localctx = new ValueStringContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 284;
            this.match(YarnParser.COMMAND_STRING);
            break;
        case YarnParser.FUNC_ID:
            localctx = new ValueFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 285;
            this.func_call();
            break;
        case YarnParser.KEYWORD_NULL:
            localctx = new ValueNullContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 286;
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

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.VAR_ID = function() {
    return this.getToken(YarnParser.VAR_ID, 0);
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




YarnParser.VariableContext = VariableContext;

YarnParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, YarnParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        this.match(YarnParser.VAR_ID);
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
	case 24:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

YarnParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.YarnParser = YarnParser;
