'use strict';

const antlr4 = require('antlr4/index');
const YarnLexer = require('./antlr/YarnLexer');
const YarnParser = require('./antlr/YarnParser');
const BaseListener = require('./antlr/YarnParserListener').YarnParserListener;

function contextWithMessage(ctx, message) {
  return {
    lines: {
      start: ctx.start.line,
      end: ctx.stop.line
    },
    message: message
  }
}

function addError(ctx, string) {
	this.errors.push(contextWithMessage(ctx, string));
}

function addWarning(ctx, string) {
	this.warnings.push(contextWithMessage(ctx, string));
}

function YarnListener() {
	this.errors = [];
	this.warnings = [];
  this.nodesByName = {};
  this.nodesByTag = {};
	this.currentNode = null;
	BaseListener.call(this);
}

YarnListener.prototype = Object.create(BaseListener.prototype);
YarnListener.prototype.constructor = YarnListener;

YarnListener.prototype.visitErrorNode = function(node) {
	console.log("ERROR!");
};

YarnListener.prototype.enterNode = function(ctx) {
	if (this.currentNode != null) {
    addWarning.call(this, ctx, "entering without prior exit");
	}

	this.currentNode = {
		title: null,
		tags: null,
    statements: [],
    linkedNodeNames: []
	};
};

YarnListener.prototype.exitHeader_title = function(ctx) {
	this.currentNode.title = ctx.getChild(1).getText().trim();
}

YarnListener.prototype.exitHeader_tag = function(ctx) {
  if (ctx.getChildren()) {

  }
	this.currentNode.title = ctx.getChild(1).getText().trim();
}

YarnListener.prototype.exitNode = function(ctx) {
	if (this.currentNode.title == null) {
    addError.call(this, ctx, "title has not been supplied");
	} else {
		this.nodesByName[this.currentNode.title] = this.currentNode;
	}

	if (this.currentNode.statements.length === 0) {
    addWarning.call(this, ctx, "Blank node!");
  }
  
  this.currentNode = null;
};

module.exports = function(data) {
	const chars = new antlr4.InputStream(data)
	const lexer = new YarnLexer.YarnLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new YarnParser.YarnParser(tokens);
	parser.buildParseTrees = true;
	const tree = parser.dialogue();
	const listener = new YarnListener();
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

	console.log("DATA");
}