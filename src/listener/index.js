'use strict';


const antlr4 = require('antlr4/index');

const BaseListener = require('../antlr/YarnParserListener').YarnParserListener;
const ParserMessage = require('../parser/message');
const YarnLexer = require('../antlr/YarnLexer');
const YarnParser = require('../antlr/YarnParser');

const addNodeListeners = require('./node');

const addHeaderListener = require('./header');

const addStatementGroupListener = require('./statement');
const addOptionGroupListener = require('./group');

const addBlankStatementListener = require('./blank');
const addConditionalStatementListener = require('./conditional');
const addCommandStatementListener = require('./command');
const addEvaluateStatementListener = require('./evaluate');
const addFunctionStatementListener = require('./function');
const addOptionLinkStatementListener = require('./option');
const addTextStatementListener = require('./text');
const addSetStatementListener = require('./set');
const addShortcutStatementListener = require('./shortcut');

function YarnListener() {
	this.errors = [];
	this.warnings = [];
  this.nodesByName = {};
  this._fileID = null;
  this.variables = [];
  this.functions = [];
  this._node = null;
  this._statements = null;
  this._conditional = null;
	BaseListener.call(this);
}

YarnListener.prototype = Object.create(BaseListener.prototype);

YarnListener.prototype.addError = function(ctx, string) {
  const message = ParserMessage.FromANTLRContext(ctx, string);
  message.location.fileID = this._fileID;
	this.errors.push(message);
}

YarnListener.prototype.addWarning = function(ctx, string) {
  const message = ParserMessage.FromANTLRContext(ctx, string);
  message.location.fileID = this._fileID;
  this.warnings.push(message);
}

YarnListener.prototype.visitErrorNode = function(node) {
  node.parentCtx.children.forEach((child) => {
    if (child.isErrorNode === undefined) return;
    if (!child.isErrorNode()) return;
    this.addError(child, child.toString());
  });
};

addNodeListeners(YarnListener.prototype);
addHeaderListener(YarnListener.prototype);

addStatementGroupListener(YarnListener.prototype);
addOptionGroupListener(YarnListener.prototype);

addBlankStatementListener(YarnListener.prototype);
addConditionalStatementListener(YarnListener.prototype);
addCommandStatementListener(YarnListener.prototype);
addEvaluateStatementListener(YarnListener.prototype);
addFunctionStatementListener(YarnListener.prototype);
addOptionLinkStatementListener(YarnListener.prototype);
addSetStatementListener(YarnListener.prototype);
addShortcutStatementListener(YarnListener.prototype);
addTextStatementListener(YarnListener.prototype);

function process(data, isBodyOnly, fileID) {
  if (isBodyOnly) {
    data = `title: bodyParsed\n---\n${data}\n===\n`
  }
  const chars = new antlr4.InputStream(data)
  const lexer = new YarnLexer.YarnLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new YarnParser.YarnParser(tokens);
  parser.buildParseTrees = true;
  let tree = null;
  const listener = new YarnListener();
  listener._fileID = fileID;

  tree = parser.dialogue();

  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  delete(listener._fileID);
  delete(listener._nodeData);
  delete(listener._statements);
  delete(listener._conditional);
  delete(listener._shortcut);
  delete(listener._statementGroup);
  return listener;
}

module.exports = process;