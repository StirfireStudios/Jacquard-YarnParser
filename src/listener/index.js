'use strict';

import antlr4 from 'antlr4';

import { YarnParserListener } from '../antlr/YarnParserListener';

import Location from '../parser/location';
import ParserMessage from '../parser/message';
import YarnLexer from '../antlr/YarnLexer';
import YarnParser from '../antlr/YarnParser';

import ErrorListener from './errors';

import addNodeListeners from './node';

import addHeaderListener from './header';

import addLineGroupListener from './lineGroup';
import addOptionGroupListener from './group';

import addBlankStatementListener from './blank';
import addConditionalStatementListener from './conditional';
import addCommandStatementListener from './command';
import addEvaluateStatementListener from './evaluate';
import addFunctionStatementListener from './function';
import addHashtagStatementListener from './hashtag';
import addOptionLinkStatementListener from './option';
import addTextStatementListener from './text';
import addSetStatementListener from './set';
import addShortcutStatementListener from './shortcut';

function YarnListener() {
  this.errors = [];
	this.warnings = [];
  this.nodesByName = {};
  this._fileID = null;
  this.variables = [];
  this.functions = [];
  this._node = null;
  this._nodesByLine = {};
  this._statements = null;
  this._conditional = null;
	YarnParserListener.call(this);
}

YarnListener.prototype = Object.create(YarnParserListener.prototype);

YarnListener.prototype.addError = function(ctx, string) {
  const message = ParserMessage.FromANTLRContext(ctx, string);
  message.location.fileID = this._fileID;
  if (this._nodeData != null) message.location.nodeName = this._nodeData.name;
	this.errors.push(message);
}

YarnListener.prototype.addWarning = function(ctx, string) {
  const message = ParserMessage.FromANTLRContext(ctx, string);
  message.location.fileID = this._fileID;
  if (this._nodeData != null) message.location.nodeName = this._nodeData.name;
  this.warnings.push(message);
}

addNodeListeners(YarnListener.prototype);
addHeaderListener(YarnListener.prototype);

addLineGroupListener(YarnListener.prototype);
addOptionGroupListener(YarnListener.prototype);

addBlankStatementListener(YarnListener.prototype);
addConditionalStatementListener(YarnListener.prototype);
addCommandStatementListener(YarnListener.prototype);
addEvaluateStatementListener(YarnListener.prototype);
addFunctionStatementListener(YarnListener.prototype);
addHashtagStatementListener(YarnListener.prototype);
addOptionLinkStatementListener(YarnListener.prototype);
addSetStatementListener(YarnListener.prototype);
addShortcutStatementListener(YarnListener.prototype);
addTextStatementListener(YarnListener.prototype);

function findNodeByLine(nodesByLine, line) {
  let node = null;
  let matchingLine = 0;
  for(let nodeStartLineString of Object.keys(nodesByLine)) {
    const nodeStartLine = parseInt(nodeStartLineString, 10);
    if (nodeStartLine < line && nodeStartLine > matchingLine) {
      matchingLine = nodeStartLine;
      node = nodesByLine[nodeStartLine];
    }
  }

  return node;
}

function assignNodesToMessages(array, nodesByLine) {
  for(let message of array) {
    if (message.location.nodeName != null) return;
    const node = findNodeByLine(nodesByLine, message.location.start.line);
    if (node != null) { message.location.nodeName = node.name; }
  }
}

export default function process(data, isBodyOnly, fileID, dialogSegmentPerLine, characterSupport) {
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
  parser.removeErrorListeners();
  parser.addErrorListener(new ErrorListener(listener));
  listener._fileID = fileID;
  listener._dialogSegmentRequiresBlankspace = !dialogSegmentPerLine;
  listener._characterSupportEnabled = characterSupport;

  tree = parser.dialogue();

  try {
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  } catch (error) {
    const location = new Location();
    location.fileID = fileID;
    const message = new ParserMessage("Unable to finish parsing", location);
    listener.errors.push(message);
  }

  assignNodesToMessages(listener.errors, listener._nodesByLine);
  assignNodesToMessages(listener.warnings, listener._nodesByLine);

  delete(listener._fileID);
  delete(listener._nodeData);
  delete(listener._nodesByLine);
  delete(listener._statements);
  delete(listener._conditional);
  delete(listener._shortcut);
  delete(listener._statementGroup);
  return listener;
}
