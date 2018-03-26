// Generated from YarnParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var YarnParserListener = require('./YarnParserListener').YarnParserListener;
var grammarFileName = "YarnParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003L\u0116\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0003\u0002\u0006",
    "\u00026\n\u0002\r\u0002\u000e\u00027\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003?\n\u0003\f\u0003\u000e\u0003B\u000b",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004G\n\u0004\f\u0004",
    "\u000e\u0004J\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0007\b[",
    "\n\b\f\b\u000e\b^\u000b\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0005\ti\n\t\u0003\n\u0003\n\u0003\n\u0007",
    "\nn\n\n\f\n\u000e\nq\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0007\u000bw\n\u000b\f\u000b\u000e\u000bz\u000b\u000b\u0003\u000b\u0005",
    "\u000b}\n\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0081\n\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0007\f\u0087\n\f\f\f\u000e\f\u008a\u000b",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u0090\n\r\f\r\u000e\r\u0093",
    "\u000b\r\u0003\u000e\u0003\u000e\u0007\u000e\u0097\n\u000e\f\u000e\u000e",
    "\u000e\u009a\u000b\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f",
    "\u009f\n\u000f\f\u000f\u000e\u000f\u00a2\u000b\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u00ab\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00b5\n",
    "\u0010\u0003\u0010\u0005\u0010\u00b8\n\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u00bd\n\u0011\u0003\u0011\u0003\u0011\u0007",
    "\u0011\u00c1\n\u0011\f\u0011\u000e\u0011\u00c4\u000b\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012",
    "\u00cc\n\u0012\f\u0012\u000e\u0012\u00cf\u000b\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0005\u0015\u00da\n\u0015\u0003\u0016\u0006\u0016",
    "\u00dd\n\u0016\r\u0016\u000e\u0016\u00de\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005",
    "\u0018\u00f5\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018",
    "\u0106\n\u0018\f\u0018\u000e\u0018\u0109\u000b\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005",
    "\u0019\u0112\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0002\u0003",
    ".\u001b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02\u0002\n\u0004\u0002\u0014\u0014!!\u0003",
    "\u00029;\u0003\u000278\u0003\u0002>@\u0003\u0002<=\u0004\u0002-.01\u0004",
    "\u0002//22\u0003\u000235\u0002\u0127\u00025\u0003\u0002\u0002\u0002",
    "\u0004;\u0003\u0002\u0002\u0002\u0006C\u0003\u0002\u0002\u0002\bK\u0003",
    "\u0002\u0002\u0002\nO\u0003\u0002\u0002\u0002\fS\u0003\u0002\u0002\u0002",
    "\u000eX\u0003\u0002\u0002\u0002\u0010h\u0003\u0002\u0002\u0002\u0012",
    "j\u0003\u0002\u0002\u0002\u0014t\u0003\u0002\u0002\u0002\u0016\u0082",
    "\u0003\u0002\u0002\u0002\u0018\u008b\u0003\u0002\u0002\u0002\u001a\u0094",
    "\u0003\u0002\u0002\u0002\u001c\u00aa\u0003\u0002\u0002\u0002\u001e\u00b4",
    "\u0003\u0002\u0002\u0002 \u00b9\u0003\u0002\u0002\u0002\"\u00c7\u0003",
    "\u0002\u0002\u0002$\u00d3\u0003\u0002\u0002\u0002&\u00d5\u0003\u0002",
    "\u0002\u0002(\u00d7\u0003\u0002\u0002\u0002*\u00dc\u0003\u0002\u0002",
    "\u0002,\u00e0\u0003\u0002\u0002\u0002.\u00f4\u0003\u0002\u0002\u0002",
    "0\u0111\u0003\u0002\u0002\u00022\u0113\u0003\u0002\u0002\u000246\u0005",
    "\u0004\u0003\u000254\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u0002",
    "75\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u000289\u0003\u0002\u0002",
    "\u00029:\u0007\u0002\u0002\u0003:\u0003\u0003\u0002\u0002\u0002;<\u0005",
    "\u0006\u0004\u0002<@\u0005\u000e\b\u0002=?\u0007\n\u0002\u0002>=\u0003",
    "\u0002\u0002\u0002?B\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002",
    "@A\u0003\u0002\u0002\u0002A\u0005\u0003\u0002\u0002\u0002B@\u0003\u0002",
    "\u0002\u0002CH\u0005\b\u0005\u0002DG\u0005\n\u0006\u0002EG\u0005\f\u0007",
    "\u0002FD\u0003\u0002\u0002\u0002FE\u0003\u0002\u0002\u0002GJ\u0003\u0002",
    "\u0002\u0002HF\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002I\u0007",
    "\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002KL\u0007\u0004\u0002",
    "\u0002LM\u0007\r\u0002\u0002MN\u0007\n\u0002\u0002N\t\u0003\u0002\u0002",
    "\u0002OP\u0007\u0005\u0002\u0002PQ\u0007\u000e\u0002\u0002QR\u0007\n",
    "\u0002\u0002R\u000b\u0003\u0002\u0002\u0002ST\u0007\u0006\u0002\u0002",
    "TU\u0007\u0007\u0002\u0002UV\u0007\u0010\u0002\u0002VW\u0007\n\u0002",
    "\u0002W\r\u0003\u0002\u0002\u0002X\\\u0007\u0003\u0002\u0002Y[\u0005",
    "\u0010\t\u0002ZY\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\",
    "Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]_\u0003\u0002\u0002",
    "\u0002^\\\u0003\u0002\u0002\u0002_`\u0007\u0013\u0002\u0002`\u000f\u0003",
    "\u0002\u0002\u0002ai\u0005\u0012\n\u0002bi\u0005\u0014\u000b\u0002c",
    "i\u0005\u001c\u000f\u0002di\u0005\u001e\u0010\u0002ei\u0005\"\u0012",
    "\u0002fi\u0005$\u0013\u0002gi\u0005(\u0015\u0002ha\u0003\u0002\u0002",
    "\u0002hb\u0003\u0002\u0002\u0002hc\u0003\u0002\u0002\u0002hd\u0003\u0002",
    "\u0002\u0002he\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002hg\u0003",
    "\u0002\u0002\u0002i\u0011\u0003\u0002\u0002\u0002jk\u0007\u0015\u0002",
    "\u0002ko\u0007\u0016\u0002\u0002ln\u0005\u0010\t\u0002ml\u0003\u0002",
    "\u0002\u0002nq\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003",
    "\u0002\u0002\u0002pr\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002",
    "rs\u0007\u0017\u0002\u0002s\u0013\u0003\u0002\u0002\u0002tx\u0005\u0016",
    "\f\u0002uw\u0005\u0018\r\u0002vu\u0003\u0002\u0002\u0002wz\u0003\u0002",
    "\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002y|\u0003",
    "\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002{}\u0005\u001a\u000e\u0002",
    "|{\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002",
    "\u0002~\u0080\u0007\u001b\u0002\u0002\u007f\u0081\u0005*\u0016\u0002",
    "\u0080\u007f\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002",
    "\u0081\u0015\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u0018\u0002\u0002",
    "\u0083\u0084\u0005.\u0018\u0002\u0084\u0088\u0007#\u0002\u0002\u0085",
    "\u0087\u0005\u0010\t\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0087",
    "\u008a\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0088",
    "\u0089\u0003\u0002\u0002\u0002\u0089\u0017\u0003\u0002\u0002\u0002\u008a",
    "\u0088\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u001a\u0002\u0002\u008c",
    "\u008d\u0005.\u0018\u0002\u008d\u0091\u0007#\u0002\u0002\u008e\u0090",
    "\u0005\u0010\t\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u0090\u0093",
    "\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0091\u0092",
    "\u0003\u0002\u0002\u0002\u0092\u0019\u0003\u0002\u0002\u0002\u0093\u0091",
    "\u0003\u0002\u0002\u0002\u0094\u0098\u0007\u0019\u0002\u0002\u0095\u0097",
    "\u0005\u0010\t\u0002\u0096\u0095\u0003\u0002\u0002\u0002\u0097\u009a",
    "\u0003\u0002\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0099",
    "\u0003\u0002\u0002\u0002\u0099\u001b\u0003\u0002\u0002\u0002\u009a\u0098",
    "\u0003\u0002\u0002\u0002\u009b\u009c\u0007\u001c\u0002\u0002\u009c\u00a0",
    "\u00052\u001a\u0002\u009d\u009f\u0007,\u0002\u0002\u009e\u009d\u0003",
    "\u0002\u0002\u0002\u009f\u00a2\u0003\u0002\u0002\u0002\u00a0\u009e\u0003",
    "\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a3\u0003",
    "\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3\u00a4\u0005",
    ".\u0018\u0002\u00a4\u00a5\u0007#\u0002\u0002\u00a5\u00ab\u0003\u0002",
    "\u0002\u0002\u00a6\u00a7\u0007\u001c\u0002\u0002\u00a7\u00a8\u0005.",
    "\u0018\u0002\u00a8\u00a9\u0007#\u0002\u0002\u00a9\u00ab\u0003\u0002",
    "\u0002\u0002\u00aa\u009b\u0003\u0002\u0002\u0002\u00aa\u00a6\u0003\u0002",
    "\u0002\u0002\u00ab\u001d\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007\u001f",
    "\u0002\u0002\u00ad\u00ae\u0007J\u0002\u0002\u00ae\u00af\u0007I\u0002",
    "\u0002\u00af\u00b0\u0007L\u0002\u0002\u00b0\u00b5\u0007K\u0002\u0002",
    "\u00b1\u00b2\u0007\u001f\u0002\u0002\u00b2\u00b3\u0007J\u0002\u0002",
    "\u00b3\u00b5\u0007K\u0002\u0002\u00b4\u00ac\u0003\u0002\u0002\u0002",
    "\u00b4\u00b1\u0003\u0002\u0002\u0002\u00b5\u00b7\u0003\u0002\u0002\u0002",
    "\u00b6\u00b8\u0005*\u0016\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002",
    "\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u001f\u0003\u0002\u0002\u0002",
    "\u00b9\u00ba\u0007F\u0002\u0002\u00ba\u00bc\u0007A\u0002\u0002\u00bb",
    "\u00bd\u0005.\u0018\u0002\u00bc\u00bb\u0003\u0002\u0002\u0002\u00bc",
    "\u00bd\u0003\u0002\u0002\u0002\u00bd\u00c2\u0003\u0002\u0002\u0002\u00be",
    "\u00bf\u0007C\u0002\u0002\u00bf\u00c1\u0005.\u0018\u0002\u00c0\u00be",
    "\u0003\u0002\u0002\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002\u00c2\u00c0",
    "\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c5",
    "\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c6",
    "\u0007B\u0002\u0002\u00c6!\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007",
    "\u001d\u0002\u0002\u00c8\u00cd\u0005.\u0018\u0002\u00c9\u00ca\u0007",
    "C\u0002\u0002\u00ca\u00cc\u0005.\u0018\u0002\u00cb\u00c9\u0003\u0002",
    "\u0002\u0002\u00cc\u00cf\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002",
    "\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00d0\u0003\u0002",
    "\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00d0\u00d1\u0007B",
    "\u0002\u0002\u00d1\u00d2\u0007#\u0002\u0002\u00d2#\u0003\u0002\u0002",
    "\u0002\u00d3\u00d4\u0007H\u0002\u0002\u00d4%\u0003\u0002\u0002\u0002",
    "\u00d5\u00d6\t\u0002\u0002\u0002\u00d6\'\u0003\u0002\u0002\u0002\u00d7",
    "\u00d9\u0005&\u0014\u0002\u00d8\u00da\u0005*\u0016\u0002\u00d9\u00d8",
    "\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da)",
    "\u0003\u0002\u0002\u0002\u00db\u00dd\u0005,\u0017\u0002\u00dc\u00db",
    "\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002\u0002\u00de\u00dc",
    "\u0003\u0002\u0002\u0002\u00de\u00df\u0003\u0002\u0002\u0002\u00df+",
    "\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007 \u0002\u0002\u00e1-\u0003",
    "\u0002\u0002\u0002\u00e2\u00e3\b\u0018\u0001\u0002\u00e3\u00e4\u0007",
    "A\u0002\u0002\u00e4\u00e5\u0005.\u0018\u0002\u00e5\u00e6\u0007B\u0002",
    "\u0002\u00e6\u00f5\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007=\u0002",
    "\u0002\u00e8\u00f5\u0005.\u0018\f\u00e9\u00ea\u00076\u0002\u0002\u00ea",
    "\u00f5\u0005.\u0018\u000b\u00eb\u00ec\u00052\u001a\u0002\u00ec\u00ed",
    "\t\u0003\u0002\u0002\u00ed\u00ee\u0005.\u0018\u0006\u00ee\u00f5\u0003",
    "\u0002\u0002\u0002\u00ef\u00f0\u00052\u001a\u0002\u00f0\u00f1\t\u0004",
    "\u0002\u0002\u00f1\u00f2\u0005.\u0018\u0005\u00f2\u00f5\u0003\u0002",
    "\u0002\u0002\u00f3\u00f5\u00050\u0019\u0002\u00f4\u00e2\u0003\u0002",
    "\u0002\u0002\u00f4\u00e7\u0003\u0002\u0002\u0002\u00f4\u00e9\u0003\u0002",
    "\u0002\u0002\u00f4\u00eb\u0003\u0002\u0002\u0002\u00f4\u00ef\u0003\u0002",
    "\u0002\u0002\u00f4\u00f3\u0003\u0002\u0002\u0002\u00f5\u0107\u0003\u0002",
    "\u0002\u0002\u00f6\u00f7\f\n\u0002\u0002\u00f7\u00f8\t\u0005\u0002\u0002",
    "\u00f8\u0106\u0005.\u0018\u000b\u00f9\u00fa\f\t\u0002\u0002\u00fa\u00fb",
    "\t\u0006\u0002\u0002\u00fb\u0106\u0005.\u0018\n\u00fc\u00fd\f\b\u0002",
    "\u0002\u00fd\u00fe\t\u0007\u0002\u0002\u00fe\u0106\u0005.\u0018\t\u00ff",
    "\u0100\f\u0007\u0002\u0002\u0100\u0101\t\b\u0002\u0002\u0101\u0106\u0005",
    ".\u0018\b\u0102\u0103\f\u0004\u0002\u0002\u0103\u0104\t\t\u0002\u0002",
    "\u0104\u0106\u0005.\u0018\u0005\u0105\u00f6\u0003\u0002\u0002\u0002",
    "\u0105\u00f9\u0003\u0002\u0002\u0002\u0105\u00fc\u0003\u0002\u0002\u0002",
    "\u0105\u00ff\u0003\u0002\u0002\u0002\u0105\u0102\u0003\u0002\u0002\u0002",
    "\u0106\u0109\u0003\u0002\u0002\u0002\u0107\u0105\u0003\u0002\u0002\u0002",
    "\u0107\u0108\u0003\u0002\u0002\u0002\u0108/\u0003\u0002\u0002\u0002",
    "\u0109\u0107\u0003\u0002\u0002\u0002\u010a\u0112\u0007E\u0002\u0002",
    "\u010b\u0112\u0007)\u0002\u0002\u010c\u0112\u0007*\u0002\u0002\u010d",
    "\u0112\u00052\u001a\u0002\u010e\u0112\u0007$\u0002\u0002\u010f\u0112",
    "\u0005 \u0011\u0002\u0110\u0112\u0007+\u0002\u0002\u0111\u010a\u0003",
    "\u0002\u0002\u0002\u0111\u010b\u0003\u0002\u0002\u0002\u0111\u010c\u0003",
    "\u0002\u0002\u0002\u0111\u010d\u0003\u0002\u0002\u0002\u0111\u010e\u0003",
    "\u0002\u0002\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0111\u0110\u0003",
    "\u0002\u0002\u0002\u01121\u0003\u0002\u0002\u0002\u0113\u0114\u0007",
    "D\u0002\u0002\u01143\u0003\u0002\u0002\u0002\u001c7@FH\\hox|\u0080\u0088",
    "\u0091\u0098\u00a0\u00aa\u00b4\u00b7\u00bc\u00c2\u00cd\u00d9\u00de\u00f4",
    "\u0105\u0107\u0111"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'---'", "'title:'", "'tags:'", null, "':'", 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, "'==='", null, null, "'\u001D'", "'\u001E'", 
                     null, null, null, null, null, null, null, "'[['", null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, "'+='", "'-='", "'*='", "'%='", 
                     "'/='", "'+'", "'-'", "'*'", "'/'", "'%'", "'('", "')'", 
                     "','", null, null, null, null, null, "'|'", null, "']]'" ];

var symbolicNames = [ null, "BODY_ENTER", "HEADER_TITLE", "HEADER_TAGS", 
                      "HEADER_NAME", "HEADER_SEPARATOR", "STRING", "ID", 
                      "NEWLINE", "UNKNOWN", "TITLE_WS", "TITLE_TEXT", "TAG_TEXT", 
                      "HEADER_WS", "HEADER_TEXT", "WS_IN_BODY", "COMMENT", 
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

var ruleNames =  [ "dialogue", "node", "header", "header_title", "header_tag", 
                   "header_line", "body", "statement", "shortcut", "if_statement", 
                   "if_clause", "else_if_clause", "else_clause", "set_statement", 
                   "option_statement", "function", "function_statement", 
                   "action_statement", "text", "line_statement", "hashtag_block", 
                   "hashtag", "expression", "value", "variable" ];

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
YarnParser.TITLE_WS = 10;
YarnParser.TITLE_TEXT = 11;
YarnParser.TAG_TEXT = 12;
YarnParser.HEADER_WS = 13;
YarnParser.HEADER_TEXT = 14;
YarnParser.WS_IN_BODY = 15;
YarnParser.COMMENT = 16;
YarnParser.BODY_CLOSE = 17;
YarnParser.TEXT_STRING = 18;
YarnParser.SHORTCUT_ENTER = 19;
YarnParser.INDENT = 20;
YarnParser.DEDENT = 21;
YarnParser.COMMAND_IF = 22;
YarnParser.COMMAND_ELSE = 23;
YarnParser.COMMAND_ELSE_IF = 24;
YarnParser.COMMAND_ENDIF = 25;
YarnParser.COMMAND_SET = 26;
YarnParser.COMMAND_FUNC = 27;
YarnParser.COMMAND_OPEN = 28;
YarnParser.OPTION_ENTER = 29;
YarnParser.HASHTAG = 30;
YarnParser.TEXT = 31;
YarnParser.COMMAND_WS = 32;
YarnParser.COMMAND_CLOSE = 33;
YarnParser.COMMAND_STRING = 34;
YarnParser.KEYWORD_IF = 35;
YarnParser.KEYWORD_ELSE = 36;
YarnParser.KEYWORD_ELSE_IF = 37;
YarnParser.KEYWORD_SET = 38;
YarnParser.KEYWORD_TRUE = 39;
YarnParser.KEYWORD_FALSE = 40;
YarnParser.KEYWORD_NULL = 41;
YarnParser.KEYWORD_TO = 42;
YarnParser.OPERATOR_LOGICAL_LESS_THAN_EQUALS = 43;
YarnParser.OPERATOR_LOGICAL_GREATER_THAN_EQUALS = 44;
YarnParser.OPERATOR_LOGICAL_EQUALS = 45;
YarnParser.OPERATOR_LOGICAL_LESS = 46;
YarnParser.OPERATOR_LOGICAL_GREATER = 47;
YarnParser.OPERATOR_LOGICAL_NOT_EQUALS = 48;
YarnParser.OPERATOR_LOGICAL_AND = 49;
YarnParser.OPERATOR_LOGICAL_OR = 50;
YarnParser.OPERATOR_LOGICAL_XOR = 51;
YarnParser.OPERATOR_LOGICAL_NOT = 52;
YarnParser.OPERATOR_MATHS_ADDITION_EQUALS = 53;
YarnParser.OPERATOR_MATHS_SUBTRACTION_EQUALS = 54;
YarnParser.OPERATOR_MATHS_MULTIPLICATION_EQUALS = 55;
YarnParser.OPERATOR_MATHS_MODULUS_EQUALS = 56;
YarnParser.OPERATOR_MATHS_DIVISION_EQUALS = 57;
YarnParser.OPERATOR_MATHS_ADDITION = 58;
YarnParser.OPERATOR_MATHS_SUBTRACTION = 59;
YarnParser.OPERATOR_MATHS_MULTIPLICATION = 60;
YarnParser.OPERATOR_MATHS_DIVISION = 61;
YarnParser.OPERATOR_MATHS_MODULUS = 62;
YarnParser.LPAREN = 63;
YarnParser.RPAREN = 64;
YarnParser.COMMA = 65;
YarnParser.VAR_ID = 66;
YarnParser.BODY_NUMBER = 67;
YarnParser.FUNC_ID = 68;
YarnParser.COMMAND_UNKNOWN = 69;
YarnParser.ACTION = 70;
YarnParser.OPTION_SEPARATOR = 71;
YarnParser.OPTION_TEXT = 72;
YarnParser.OPTION_CLOSE = 73;
YarnParser.OPTION_LINK = 74;

YarnParser.RULE_dialogue = 0;
YarnParser.RULE_node = 1;
YarnParser.RULE_header = 2;
YarnParser.RULE_header_title = 3;
YarnParser.RULE_header_tag = 4;
YarnParser.RULE_header_line = 5;
YarnParser.RULE_body = 6;
YarnParser.RULE_statement = 7;
YarnParser.RULE_shortcut = 8;
YarnParser.RULE_if_statement = 9;
YarnParser.RULE_if_clause = 10;
YarnParser.RULE_else_if_clause = 11;
YarnParser.RULE_else_clause = 12;
YarnParser.RULE_set_statement = 13;
YarnParser.RULE_option_statement = 14;
YarnParser.RULE_function = 15;
YarnParser.RULE_function_statement = 16;
YarnParser.RULE_action_statement = 17;
YarnParser.RULE_text = 18;
YarnParser.RULE_line_statement = 19;
YarnParser.RULE_hashtag_block = 20;
YarnParser.RULE_hashtag = 21;
YarnParser.RULE_expression = 22;
YarnParser.RULE_value = 23;
YarnParser.RULE_variable = 24;

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
        this.state = 51; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 50;
            this.node();
            this.state = 53; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===YarnParser.HEADER_TITLE);
        this.state = 55;
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
        this.state = 57;
        this.header();
        this.state = 58;
        this.body();
        this.state = 62;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.NEWLINE) {
            this.state = 59;
            this.match(YarnParser.NEWLINE);
            this.state = 64;
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
        this.state = 65;
        this.header_title();
        this.state = 70;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.HEADER_TAGS || _la===YarnParser.HEADER_NAME) {
            this.state = 68;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case YarnParser.HEADER_TAGS:
                this.state = 66;
                this.header_tag();
                break;
            case YarnParser.HEADER_NAME:
                this.state = 67;
                this.header_line();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 72;
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

Header_titleContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
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
        this.state = 73;
        this.match(YarnParser.HEADER_TITLE);
        this.state = 74;
        this.match(YarnParser.TITLE_TEXT);
        this.state = 75;
        this.match(YarnParser.NEWLINE);
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

Header_tagContext.prototype.TAG_TEXT = function() {
    return this.getToken(YarnParser.TAG_TEXT, 0);
};

Header_tagContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
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
    this.enterRule(localctx, 8, YarnParser.RULE_header_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(YarnParser.HEADER_TAGS);
        this.state = 78;
        this.match(YarnParser.TAG_TEXT);
        this.state = 79;
        this.match(YarnParser.NEWLINE);
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

Header_lineContext.prototype.NEWLINE = function() {
    return this.getToken(YarnParser.NEWLINE, 0);
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
    this.enterRule(localctx, 10, YarnParser.RULE_header_line);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(YarnParser.HEADER_NAME);
        this.state = 82;
        this.match(YarnParser.HEADER_SEPARATOR);
        this.state = 83;
        this.match(YarnParser.HEADER_TEXT);
        this.state = 84;
        this.match(YarnParser.NEWLINE);
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
    this.enterRule(localctx, 12, YarnParser.RULE_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(YarnParser.BODY_ENTER);
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.TEXT_STRING) | (1 << YarnParser.SHORTCUT_ENTER) | (1 << YarnParser.COMMAND_IF) | (1 << YarnParser.COMMAND_SET) | (1 << YarnParser.COMMAND_FUNC) | (1 << YarnParser.OPTION_ENTER) | (1 << YarnParser.TEXT))) !== 0) || _la===YarnParser.ACTION) {
            this.state = 87;
            this.statement();
            this.state = 92;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 93;
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

StatementContext.prototype.function_statement = function() {
    return this.getTypedRuleContext(Function_statementContext,0);
};

StatementContext.prototype.action_statement = function() {
    return this.getTypedRuleContext(Action_statementContext,0);
};

StatementContext.prototype.line_statement = function() {
    return this.getTypedRuleContext(Line_statementContext,0);
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
    this.enterRule(localctx, 14, YarnParser.RULE_statement);
    try {
        this.state = 102;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.SHORTCUT_ENTER:
            this.enterOuterAlt(localctx, 1);
            this.state = 95;
            this.shortcut();
            break;
        case YarnParser.COMMAND_IF:
            this.enterOuterAlt(localctx, 2);
            this.state = 96;
            this.if_statement();
            break;
        case YarnParser.COMMAND_SET:
            this.enterOuterAlt(localctx, 3);
            this.state = 97;
            this.set_statement();
            break;
        case YarnParser.OPTION_ENTER:
            this.enterOuterAlt(localctx, 4);
            this.state = 98;
            this.option_statement();
            break;
        case YarnParser.COMMAND_FUNC:
            this.enterOuterAlt(localctx, 5);
            this.state = 99;
            this.function_statement();
            break;
        case YarnParser.ACTION:
            this.enterOuterAlt(localctx, 6);
            this.state = 100;
            this.action_statement();
            break;
        case YarnParser.TEXT_STRING:
        case YarnParser.TEXT:
            this.enterOuterAlt(localctx, 7);
            this.state = 101;
            this.line_statement();
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
    this.enterRule(localctx, 16, YarnParser.RULE_shortcut);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(YarnParser.SHORTCUT_ENTER);
        this.state = 105;
        this.match(YarnParser.INDENT);
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.TEXT_STRING) | (1 << YarnParser.SHORTCUT_ENTER) | (1 << YarnParser.COMMAND_IF) | (1 << YarnParser.COMMAND_SET) | (1 << YarnParser.COMMAND_FUNC) | (1 << YarnParser.OPTION_ENTER) | (1 << YarnParser.TEXT))) !== 0) || _la===YarnParser.ACTION) {
            this.state = 106;
            this.statement();
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 112;
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
    this.enterRule(localctx, 18, YarnParser.RULE_if_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.if_clause();
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.COMMAND_ELSE_IF) {
            this.state = 115;
            this.else_if_clause();
            this.state = 120;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 122;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.COMMAND_ELSE) {
            this.state = 121;
            this.else_clause();
        }

        this.state = 124;
        this.match(YarnParser.COMMAND_ENDIF);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.HASHTAG) {
            this.state = 125;
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
    this.enterRule(localctx, 20, YarnParser.RULE_if_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(YarnParser.COMMAND_IF);
        this.state = 129;
        this.expression(0);
        this.state = 130;
        this.match(YarnParser.COMMAND_CLOSE);
        this.state = 134;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.TEXT_STRING) | (1 << YarnParser.SHORTCUT_ENTER) | (1 << YarnParser.COMMAND_IF) | (1 << YarnParser.COMMAND_SET) | (1 << YarnParser.COMMAND_FUNC) | (1 << YarnParser.OPTION_ENTER) | (1 << YarnParser.TEXT))) !== 0) || _la===YarnParser.ACTION) {
            this.state = 131;
            this.statement();
            this.state = 136;
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
    this.enterRule(localctx, 22, YarnParser.RULE_else_if_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(YarnParser.COMMAND_ELSE_IF);
        this.state = 138;
        this.expression(0);
        this.state = 139;
        this.match(YarnParser.COMMAND_CLOSE);
        this.state = 143;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.TEXT_STRING) | (1 << YarnParser.SHORTCUT_ENTER) | (1 << YarnParser.COMMAND_IF) | (1 << YarnParser.COMMAND_SET) | (1 << YarnParser.COMMAND_FUNC) | (1 << YarnParser.OPTION_ENTER) | (1 << YarnParser.TEXT))) !== 0) || _la===YarnParser.ACTION) {
            this.state = 140;
            this.statement();
            this.state = 145;
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
    this.enterRule(localctx, 24, YarnParser.RULE_else_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.match(YarnParser.COMMAND_ELSE);
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YarnParser.TEXT_STRING) | (1 << YarnParser.SHORTCUT_ENTER) | (1 << YarnParser.COMMAND_IF) | (1 << YarnParser.COMMAND_SET) | (1 << YarnParser.COMMAND_FUNC) | (1 << YarnParser.OPTION_ENTER) | (1 << YarnParser.TEXT))) !== 0) || _la===YarnParser.ACTION) {
            this.state = 147;
            this.statement();
            this.state = 152;
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
    this.enterRule(localctx, 26, YarnParser.RULE_set_statement);
    var _la = 0; // Token type
    try {
        this.state = 168;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 153;
            this.match(YarnParser.COMMAND_SET);
            this.state = 154;
            this.variable();
            this.state = 158;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===YarnParser.KEYWORD_TO) {
                this.state = 155;
                this.match(YarnParser.KEYWORD_TO);
                this.state = 160;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 161;
            this.expression(0);
            this.state = 162;
            this.match(YarnParser.COMMAND_CLOSE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 164;
            this.match(YarnParser.COMMAND_SET);
            this.state = 165;
            this.expression(0);
            this.state = 166;
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
    this.enterRule(localctx, 28, YarnParser.RULE_option_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.state = 170;
            this.match(YarnParser.OPTION_ENTER);
            this.state = 171;
            this.match(YarnParser.OPTION_TEXT);
            this.state = 172;
            this.match(YarnParser.OPTION_SEPARATOR);
            this.state = 173;
            this.match(YarnParser.OPTION_LINK);
            this.state = 174;
            this.match(YarnParser.OPTION_CLOSE);
            break;

        case 2:
            this.state = 175;
            this.match(YarnParser.OPTION_ENTER);
            this.state = 176;
            this.match(YarnParser.OPTION_TEXT);
            this.state = 177;
            this.match(YarnParser.OPTION_CLOSE);
            break;

        }
        this.state = 181;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.HASHTAG) {
            this.state = 180;
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

function FunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_function;
    return this;
}

FunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionContext.prototype.constructor = FunctionContext;

FunctionContext.prototype.FUNC_ID = function() {
    return this.getToken(YarnParser.FUNC_ID, 0);
};

FunctionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

FunctionContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(YarnParser.COMMA);
    } else {
        return this.getToken(YarnParser.COMMA, i);
    }
};


FunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterFunction(this);
	}
};

FunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitFunction(this);
	}
};




YarnParser.FunctionContext = FunctionContext;

YarnParser.prototype.function = function() {

    var localctx = new FunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, YarnParser.RULE_function);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(YarnParser.FUNC_ID);
        this.state = 184;
        this.match(YarnParser.LPAREN);
        this.state = 186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (YarnParser.COMMAND_STRING - 34)) | (1 << (YarnParser.KEYWORD_TRUE - 34)) | (1 << (YarnParser.KEYWORD_FALSE - 34)) | (1 << (YarnParser.KEYWORD_NULL - 34)) | (1 << (YarnParser.OPERATOR_LOGICAL_NOT - 34)) | (1 << (YarnParser.OPERATOR_MATHS_SUBTRACTION - 34)) | (1 << (YarnParser.LPAREN - 34)))) !== 0) || ((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (YarnParser.VAR_ID - 66)) | (1 << (YarnParser.BODY_NUMBER - 66)) | (1 << (YarnParser.FUNC_ID - 66)))) !== 0)) {
            this.state = 185;
            this.expression(0);
        }

        this.state = 192;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.COMMA) {
            this.state = 188;
            this.match(YarnParser.COMMA);
            this.state = 189;
            this.expression(0);
            this.state = 194;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 195;
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

function Function_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = YarnParser.RULE_function_statement;
    return this;
}

Function_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_statementContext.prototype.constructor = Function_statementContext;

Function_statementContext.prototype.COMMAND_FUNC = function() {
    return this.getToken(YarnParser.COMMAND_FUNC, 0);
};

Function_statementContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Function_statementContext.prototype.COMMAND_CLOSE = function() {
    return this.getToken(YarnParser.COMMAND_CLOSE, 0);
};

Function_statementContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(YarnParser.COMMA);
    } else {
        return this.getToken(YarnParser.COMMA, i);
    }
};


Function_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.enterFunction_statement(this);
	}
};

Function_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof YarnParserListener ) {
        listener.exitFunction_statement(this);
	}
};




YarnParser.Function_statementContext = Function_statementContext;

YarnParser.prototype.function_statement = function() {

    var localctx = new Function_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, YarnParser.RULE_function_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(YarnParser.COMMAND_FUNC);
        this.state = 198;
        this.expression(0);
        this.state = 203;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===YarnParser.COMMA) {
            this.state = 199;
            this.match(YarnParser.COMMA);
            this.state = 200;
            this.expression(0);
            this.state = 205;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 206;
        this.match(YarnParser.RPAREN);
        this.state = 207;
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
    this.enterRule(localctx, 34, YarnParser.RULE_action_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
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
    this.enterRule(localctx, 36, YarnParser.RULE_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
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
    this.enterRule(localctx, 38, YarnParser.RULE_line_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.text();
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===YarnParser.HASHTAG) {
            this.state = 214;
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
    this.enterRule(localctx, 40, YarnParser.RULE_hashtag_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 217;
            this.hashtag();
            this.state = 220; 
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
    this.enterRule(localctx, 42, YarnParser.RULE_hashtag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222;
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
    var _startState = 44;
    this.enterRecursionRule(localctx, 44, YarnParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ExpParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 225;
            this.match(YarnParser.LPAREN);
            this.state = 226;
            this.expression(0);
            this.state = 227;
            this.match(YarnParser.RPAREN);
            break;

        case 2:
            localctx = new ExpNegativeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 229;
            this.match(YarnParser.OPERATOR_MATHS_SUBTRACTION);
            this.state = 230;
            this.expression(10);
            break;

        case 3:
            localctx = new ExpNotContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 231;
            this.match(YarnParser.OPERATOR_LOGICAL_NOT);
            this.state = 232;
            this.expression(9);
            break;

        case 4:
            localctx = new ExpMultDivModEqualsContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 233;
            this.variable();
            this.state = 234;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (YarnParser.OPERATOR_MATHS_MULTIPLICATION_EQUALS - 55)) | (1 << (YarnParser.OPERATOR_MATHS_MODULUS_EQUALS - 55)) | (1 << (YarnParser.OPERATOR_MATHS_DIVISION_EQUALS - 55)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 235;
            this.expression(4);
            break;

        case 5:
            localctx = new ExpPlusMinusEqualsContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 237;
            this.variable();
            this.state = 238;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===YarnParser.OPERATOR_MATHS_ADDITION_EQUALS || _la===YarnParser.OPERATOR_MATHS_SUBTRACTION_EQUALS)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 239;
            this.expression(3);
            break;

        case 6:
            localctx = new ExpValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 241;
            this.value();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 261;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 259;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpMultDivModContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, YarnParser.RULE_expression);
                    this.state = 244;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 245;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (YarnParser.OPERATOR_MATHS_MULTIPLICATION - 60)) | (1 << (YarnParser.OPERATOR_MATHS_DIVISION - 60)) | (1 << (YarnParser.OPERATOR_MATHS_MODULUS - 60)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 246;
                    this.expression(9);
                    break;

                case 2:
                    localctx = new ExpAddSubContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, YarnParser.RULE_expression);
                    this.state = 247;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 248;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===YarnParser.OPERATOR_MATHS_ADDITION || _la===YarnParser.OPERATOR_MATHS_SUBTRACTION)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 249;
                    this.expression(8);
                    break;

                case 3:
                    localctx = new ExpComparisonContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, YarnParser.RULE_expression);
                    this.state = 250;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 251;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (YarnParser.OPERATOR_LOGICAL_LESS_THAN_EQUALS - 43)) | (1 << (YarnParser.OPERATOR_LOGICAL_GREATER_THAN_EQUALS - 43)) | (1 << (YarnParser.OPERATOR_LOGICAL_LESS - 43)) | (1 << (YarnParser.OPERATOR_LOGICAL_GREATER - 43)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 252;
                    this.expression(7);
                    break;

                case 4:
                    localctx = new ExpEqualityContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, YarnParser.RULE_expression);
                    this.state = 253;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 254;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===YarnParser.OPERATOR_LOGICAL_EQUALS || _la===YarnParser.OPERATOR_LOGICAL_NOT_EQUALS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 255;
                    this.expression(6);
                    break;

                case 5:
                    localctx = new ExpAndOrXorContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, YarnParser.RULE_expression);
                    this.state = 256;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 257;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (YarnParser.OPERATOR_LOGICAL_AND - 49)) | (1 << (YarnParser.OPERATOR_LOGICAL_OR - 49)) | (1 << (YarnParser.OPERATOR_LOGICAL_XOR - 49)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 258;
                    this.expression(3);
                    break;

                } 
            }
            this.state = 263;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
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

ValueFuncContext.prototype.function = function() {
    return this.getTypedRuleContext(FunctionContext,0);
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
    this.enterRule(localctx, 46, YarnParser.RULE_value);
    try {
        this.state = 271;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case YarnParser.BODY_NUMBER:
            localctx = new ValueNumberContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 264;
            this.match(YarnParser.BODY_NUMBER);
            break;
        case YarnParser.KEYWORD_TRUE:
            localctx = new ValueTrueContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 265;
            this.match(YarnParser.KEYWORD_TRUE);
            break;
        case YarnParser.KEYWORD_FALSE:
            localctx = new ValueFalseContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 266;
            this.match(YarnParser.KEYWORD_FALSE);
            break;
        case YarnParser.VAR_ID:
            localctx = new ValueVarContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 267;
            this.variable();
            break;
        case YarnParser.COMMAND_STRING:
            localctx = new ValueStringContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 268;
            this.match(YarnParser.COMMAND_STRING);
            break;
        case YarnParser.FUNC_ID:
            localctx = new ValueFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 269;
            this.function();
            break;
        case YarnParser.KEYWORD_NULL:
            localctx = new ValueNullContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 270;
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
    this.enterRule(localctx, 48, YarnParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
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
	case 22:
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
