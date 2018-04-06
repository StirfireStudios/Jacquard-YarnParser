'use strict';

const antlr4 = require('antlr4/index');
const YarnLexer = require('./antlr/YarnLexer');
const YarnParser = require('./antlr/YarnParser');
const BaseListener = require('./antlr/YarnParserListener').YarnParserListener;

const Location = require('./parser/location');
const ParserMessage = require('./parser/message');
const statementTypes = require('./statements/types');
const expressionGenerator = require('./parser/expressionGenerator');

function addError(listener, ctx, string) {
	listener.errors.push(ParserMessage.FromANTLRContext(ctx, string));
}

function addWarning(listener, ctx, string) {
	listener.warnings.push(ParserMessage.FromANTLRContext(ctx, string));
}

function YarnListener() {
	this.errors = [];
	this.warnings = [];
  this.nodesByName = {};
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
YarnListener.prototype.enterIf_statement = function(ctx) {
  const statement = { 
    type: statementTypes.Conditional, 
    clauses: [], 
    previousStatements: this._statements,
    previousConditional: this._conditional,
    location: Location.FromANTLRNode(ctx),
  };
  this._conditional = statement;
  this._statements.push(statement);
};

YarnListener.prototype.enterIf_clause = function(ctx) {
  const clause = {
    test: expressionGenerator(ctx.getChild(1)),
    statements: [],
    location: Location.FromANTLRNode(ctx),
  }
  this._conditional.clauses.push(clause);
  this._statements = clause.statements;
};

YarnListener.prototype.enterElse_if_clause = function(ctx) {
  const clause = {
    test: expressionGenerator(ctx.getChild(1)),
    statements: [],
    location: Location.FromANTLRNode(ctx),
  }
  this._conditional.clauses.push(clause);
  this._statements = clause.statements;
};

YarnListener.prototype.enterElse_clause = function(ctx) {
  const clause = {
    statements: [],
    location: Location.FromANTLRNode(ctx),
  }
  this._conditional.clauses.push(clause);
  this._statements = clause.statements;
};

YarnListener.prototype.enterShortcut = function(ctx) {
  const statement = {
    type: statementTypes.Shortcut,
    previousStatements: this._statements,
    previousShortcut: this._shortcut,
    statements: [],
    location: Location.FromANTLRNode(ctx),
  }
  this._shortcut = statement;
  this._statements.push(statement);
  this._statements = statement.statements;
};

YarnListener.prototype.exitAction_statement = function(ctx) {
  const actionText = ctx.getChild(0).getText()
  this._statements.push({
    type: statementTypes.Action,
    action: actionText.substring(2, actionText.length - 2).trim(),
    location: Location.FromANTLRNode(ctx),
  })
};

YarnListener.prototype.exitBlank_statement = function(ctx) {
  if (this._statements.length > 0) {
    const lastStatement = this._statements[this._statements.length - 1];
    if (lastStatement.type == statementTypes.Blank) return;
  }
  this._statements.push({
    type: statementTypes.Blank,
    location: Location.FromANTLRNode(ctx),
  });
};

YarnListener.prototype.exitFunc_call_statement = function(ctx) {
  const funcText = ctx.getChild(0).getText();
  const args = [];
  for(let i = 1; i < ctx.getChildCount(); i++) {
    const node = ctx.getChild(i);
    if (node.getChildCount() === 0) continue;
    args.push(expressionGenerator(node));
  }
  this._statements.push({
    type: statementTypes.Function,
    name: funcText.substring(2, funcText.length - 1).trim(),
    args: args,
    location: Location.FromANTLRNode(ctx),
  })
};

YarnListener.prototype.exitIf_statement = function(ctx) {
  const statement = this._conditional;
  this._statements = statement.previousStatements;
  this._conditional = statement.previousConditional;

  delete(statement.previousConditional);
  delete(statement.previousStatements);
};

YarnListener.prototype.exitLine_statement = function(ctx) {
  const text = ctx.children.map(function(textNode) {
    return textNode.children[0].toString();  
  }).join("\n");

  this._statements.push({
    type: statementTypes.Line,
    text: text,
    
  })
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

  statement.location = Location.FromANTLRNode(ctx);

  this._statements.push(statement);
};

YarnListener.prototype.exitSet_statement = function(ctx) {
  const statement = {type: statementTypes.Evaluate}
  if (ctx.children.length == 5) {
    const variable = ctx.getChild(1).getChild(0).toString().trim();
    statement.expression = expressionGenerator(ctx.getChild(3), variable);
  } else if (ctx.children.length == 3) {
    statement.expression = expressionGenerator(ctx.getChild(1));
  }

  statement.location = Location.FromANTLRNode(ctx);
  this._statements.push(statement);
};

YarnListener.prototype.exitShortcut = function(ctx) {
  const statement = this._shortcut;
  this._statements = statement.previousStatements;
  this._shortcut = statement.previousShortcut;

  delete(statement.previousShortcut);
  delete(statement.previousStatements);
};
/* End Statement Visitors
 */

module.exports = function(data, body) {
	const chars = new antlr4.InputStream(data)
	const lexer = new YarnLexer.YarnLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new YarnParser.YarnParser(tokens);
  parser.buildParseTrees = true;
  let tree = null;
  if (body) {
    tree = parser.body();
  } else {
    tree = parser.dialogue();
  }
	const listener = new YarnListener();
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  delete(listener._node);
  delete(listener._statements);
  delete(listener._conditional);
  delete(listener._shortcut);
  return listener;
}