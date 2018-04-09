'use strict';


const antlr4 = require('antlr4/index');

const BaseListener = require('../antlr/YarnParserListener').YarnParserListener;
const ParserMessage = require('../parser/message');
const YarnLexer = require('../antlr/YarnLexer');
const YarnParser = require('../antlr/YarnParser');

const addNodeListeners = require('./node');
const addHeaderTagListeners = require('./headerTag');
const addHeaderTitleListeners = require('./headerTitle');
const addHeaderLineListeners = require('./headerLine');

function YarnListener() {
	this.errors = [];
	this.warnings = [];
  this.nodesByName = {};
  this._node = null;
  this._statements = null;
	BaseListener.call(this);
}

YarnListener.prototype = Object.create(BaseListener.prototype);

YarnListener.prototype.addError = function(ctx, string) {
	this.errors.push(ParserMessage.FromANTLRContext(ctx, string));
}

YarnListener.prototype.addWarning = function(ctx, string) {
	this.warnings.push(ParserMessage.FromANTLRContext(ctx, string));
}

YarnListener.prototype.visitErrorNode = function(node) {
  node.parentCtx.children.forEach((child) => {
    if (child.isErrorNode === undefined) return;
    if (!child.isErrorNode()) return;
    addError(this, child, child.toString());
  });
};

addNodeListeners(YarnListener.prototype);
addHeaderTagListeners(YarnListener.prototype);
addHeaderTitleListeners(YarnListener.prototype);
addHeaderLineListeners(YarnListener.prototype);

function process(data, isBodyOnly) {
  const chars = new antlr4.InputStream(data)
  const lexer = new YarnLexer.YarnLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new YarnParser.YarnParser(tokens);
  parser.buildParseTrees = true;
  let tree = null;
  const listener = new YarnListener();

  if (isBodyOnly) {
    //todo: set up the node that we're inserting into here...
    tree = parser.body();
  } else {
    tree = parser.dialogue();
  }

  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  delete(listener._nodeData);
  delete(listener._statements);
  delete(listener._conditional);
  delete(listener._shortcut);
  return listener;
}

module.exports = process;