'use strict';

const statementTypes = require('./statementTypes');

function statementResetsOptionGroup(statement) {
  switch(statement.type) {
    case statementTypes.Blank:
    case statementTypes.Line:
      return true;
    default: 
      return false;
  }
}

function closeGroup(context) {
  const groupStatements = context.group.statements;
  if (groupStatements.length === 0) return;
  if (groupStatements.length === 1) {
    context.statements.push(groupStatements[0]);
  } else {
    context.statements.push(context.group);
  }
  context.group = {type: null, statements: []};
}

function handleGroupMember(context, statement, type) {
  if (context.group.type === null) {
    context.group.type = type;
  } else if (context.group.type !== type) {
    closeGroup(context);
    context.group.type = type;
  }
  context.group.statements.push(statement);
}

function handleConditional(context, statement) {
//   statement.clauses.forEach(statement)
}

function processStatements(statements, context) {
  let contextValid = context != null;
  if (!contextValid) {
    context = {
      statements: [],
      group: {type: null, statements: []}
    };
  }

  while(statements.length > 0) {
    const statement = statements.shift();

    if (statementResetsOptionGroup(statement)) closeGroup(context);
    if (statement.type == statementTypes.NodeLinkWithText) {
      handleGroupMember(context, statement, statementTypes.NodeLinkGroup);
    } else if (statement.type == statementTypes.Shortcut) {
      handleGroupMember(context, statement, statementTypes.ShortcutGroup);
      statement.statements = processStatements(statement.statements);
    } else if (statement.type == statementTypes.Conditional) {
      handleConditional(context, statement);
    } else {
      context.statements.push(statement);
    }
  }
  if (contextValid) closeGroup(context);
  return context.statements;
}

module.exports = function(nodes) {
	nodes.forEach(function(node) {
    node.statements = processStatements(node.statements);
	});
}