'use strict';

const antlr4 = require('antlr4/index');
const YarnLexer = require('./antlr/YarnLexer');
const YarnParser = require('./antlr/YarnParser');
const BaseListener = require('./antlr/YarnParserListener').YarnParserListener;

const statementTypes = require('./statementTypes');

function contextWithMessage(ctx, message) {
  const positions = {};
  
  if (ctx.isErrorNode !== undefined && ctx.isErrorNode()) {
    positions.start = {line: ctx.symbol.line, column: ctx.symbol.column };
    positions.end = {line: ctx.symbol.line, column: ctx.symbol.column };
  } else {
    positions.start =  {line: ctx.start.line, column: ctx.start.column };
    positions.end =  {line: ctx.stop.line, column: ctx.stop.column };
  }

  return {
    positions: positions,
    message: message
  }
}

function addError(listener, ctx, string) {
	listener.errors.push(contextWithMessage(ctx, string));
}

function addWarning(listener, ctx, string) {
	listener.warnings.push(contextWithMessage(ctx, string));
}

function YarnListener() {
	this.errors = [];
	this.warnings = [];
  this.nodesByName = {};
  this.nodesByTag = {};
  this._node = null;
  this._statements = null;
	BaseListener.call(this);
}

YarnListener.prototype = Object.create(BaseListener.prototype);
YarnListener.prototype.constructor = YarnListener;

YarnListener.prototype.visitErrorNode = function(node) {
  node.parentCtx.children.forEach((child) => {
    if (child.isErrorNode === undefined) return;
    if (!child.isErrorNode()) return;
    addError(this, child, child.toString());
  });
};

/* Node Visitors
 */

YarnListener.prototype.enterNode = function(ctx) {
	if (this._node != null) {
    addWarning(this, ctx, "entering without prior exit");
	}

	this._node = {
    title: null,
    attributes: {},
		tags: [],
    statements: [],
    linkedNodeNames: []
  };
  
  this._statements = this._node.statements;
};

YarnListener.prototype.exitNode = function(ctx) {
	if (this._node.title == null) {
    addError(this, ctx, "title has not been supplied");
	} else {
		this.nodesByName[this._node.title] = this._node;
    this._node.tags.forEach((tagName) => {
      if (this.nodesByTag[tagName] == null) {
        this.nodesByTag[tagName] = {};
      }
      this.nodesByTag[tagName][this._node.title] = this._node;
    })
  }

	if (this._node.statements.length === 0) {
    addWarning(this, ctx, "Blank node!");
  }
  
  this._node = null;
};
/* End Node Visitors
 */

/* Header visitors
 */
YarnListener.prototype.exitHeader_title = function(ctx) {
	this._node.title = ctx.getChild(1).getText().trim();
}

YarnListener.prototype.exitHeader_tag_name = function(ctx) {
  const tagName = ctx.getChild(0).toString().trim();
  this._node.tags.push(tagName);
};

YarnListener.prototype.exitHeader_line = function(ctx) {
  const attrName = ctx.getChild(0).getText().trim();
  if (ctx.children.length < 4) {
    addWarning.call(this, ctx, `Couldn't find value for header ${attrName}`);
    return;
  }
  const attrValue = ctx.getChild(2).getText().trim();

  if (this._node.attributes[attrName] != null) {
    addWarning.call(this, ctx, "Attemping to set attribute ${attrName} twice");
    return;
  }

  this._node.attributes[attrName] = attrValue;
};
/* End visitors
 */

/* Statement Visitors
 */
YarnListener.prototype.exitLine_statement = function(ctx) {
  const text = ctx.children.map(function(textNode) {
    return textNode.children[0].toString();  
  }).join("\n");

  this._statements.push({
    type: statementTypes.Line,
    text: text
  })
};

YarnListener.prototype.exitBlank_statement = function(ctx) {
  // we will need to do something if the previous statement is an option. 
};

YarnListener.prototype.exitOption_statement = function(ctx) {
  const statement = {};
  if (ctx.children.length == 3) {
    statement.type = statementTypes.NodeLink;
    statement.node = ctx.getChild(1).getText();
  } else {
    statement.type = statementTypes.NodeLinkWithText;
    statement.node = ctx.getChild(3).getText();
    statement.text = ctx.getChild(1).getText();
  }
  
  if (!this._node.linkedNodeNames.includes(statement.node)) {
    this._node.linkedNodeNames.push(statement.node);
  }
  this._statements.push(statement);
};
/* End Statement Visitors
 */

module.exports = function(data) {
	const chars = new antlr4.InputStream(data)
	const lexer = new YarnLexer.YarnLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new YarnParser.YarnParser(tokens);
  parser.buildParseTrees = true;
	const tree = parser.dialogue();
	const listener = new YarnListener();
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  delete(listener._node);
  return listener;
}