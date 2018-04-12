'use strict';

const Statement = require('./statements');

function statementResetsOptionGroup(statement) {
  return statement instanceof Statement.Blank || statement instanceof Statement.Text;
}

function closeGroup(context) {
  const groupStatements = context.group.statements;
  if (groupStatements.length === 0) return;
  if (groupStatements.length === 1) {
    context.statements.push(groupStatements[0]);
  } else {
    context.closedOptions = true;
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

function handleConditional(context, statement, errors) {
  statement.clauses.forEach(function(clause) {
    clause.context = {statements:[], group: {type:null, statements:[]}}
    clause.statements = processStatements(clause.statements, errors, clause.context);
    if (clause.context.group.type === context.group.type || context.group.type === null) {
      context.group.type = clause.context.group.type;
      context.group.statements = context.group.statements.concat(clause.context.group.statements);
    }
  });
  if (context.group.type === null) {
    context.statements.push(statement);
  } else {
    
  }
}

function processStatements(statements, errors, context) {
  let contextValid = context != null;
  if (!contextValid) {
    context = {
      statements: [],
      group: {type: null, statements: []},
      closedOptions: false
    };
  }

  while(statements.length > 0) {
    const statement = statements.shift();

    if (statementResetsOptionGroup(statement)) closeGroup(context);
    if (statement instanceof Statement.Option) {
      handleGroupMember(context, statement, Statement.Option);
    } else if (statement instanceof Statement.Shortcut) {
      handleGroupMember(context, statement, Statement.Shortcut);
      statement.statements = processStatements(statement.statements, errors);
    } else if (statement instanceof Statement.Conditional) {
      handleConditional(context, statement, errors);
    } else {
      context.statements.push(statement);
    }
  }
  if (!contextValid) closeGroup(context);
  return context.statements;
}

module.exports = function(nodes, errors) {
	nodes.forEach(function(node) {
    node.statements = processStatements(node.statements, errors);
	});
}