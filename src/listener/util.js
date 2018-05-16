import DialogueSegment from '../statements/dialogueSegment';
import LineGroup from '../statements/lineGroup';
import Location from '../parser/location';

// StatementGroup utils!
function sgStart(ctx) {
  const statementGroupParts = {
		previousStatementGroup: this._statementGroup,
		previousStatements: this._statements,
    statements: [],
    location: Location.FromANTLRNode(ctx),
	}

	this._statementGroup = statementGroupParts;
	this._statements = statementGroupParts.statements;
}

function sgEnd(ctx) {
  if (this._statementGroup == null) return;
  const statementGroupParts = this._statementGroup;
  this._statements = statementGroupParts.previousStatements;
  this._statementGroup = statementGroupParts.previousStatementGroup;

  if (statementGroupParts.statements.length == 0) {
    return;
  } else if (statementGroupParts.statements.length == 1) {
    dsAddStatement.call(this, statementGroupParts.statements[0]);
  } else {
    statementGroupParts.location.end.line = ctx.stop.line;
    statementGroupParts.location.end.column = ctx.stop.column;

    dsAddStatement.call(this, new LineGroup(
      statementGroupParts.statements,
      statementGroupParts.location,
    ));
  }
}

const sgExternals = {
  Start: sgStart,
  End: sgEnd,
}

// Dialog segment utils!
function dsStatement(statement) {
  switch(statement.constructor.name) {
    case "Blank":
    case "Conditional":
    case "DialogueSegment":
    case "Evaluate": 
    case "Function":
    case "Link":
    case "Option":
    case "OptionGroup":
    case "Shortcut":
    case "ShortcutGroup":
      return false;
    case "LineGroup":
    case "Text":
      return true;
    default: 
      console.warn(`Unrecognized statement type: ${statement.constructor.name}`);
      return false;
  }
}

function dsAddStatement(statement) {
  if (!dsStatement(statement)) {
    dsFinish.call(this);
    this._statements.push(statement);
    return;
  }

  if (!this._dialogSegmentRequiresBlankspace) {
    dsFinish.call(this);
  }

  if (this._dialogSegment == null) {
    this._dialogSegment = { identifier: null, statements: [] }
  } 

  this._dialogSegment.statements.push(statement);
}

function dsExist() { return this._dialogSegment != null; }

function dsFinish() {
  if (this._dialogSegment == null) return;
  this._statements.push(new DialogueSegment(
    this._dialogSegment.statements,
    null,
    this._dialogSegment.identifier,
  ));
  this._dialogSegment = null;
}


const dsExternals = {
  AddStatement: dsAddStatement,
  Exists: dsExist,
  Finish: dsFinish,
}

export { dsExternals as DialogueSegment }

export { sgExternals as StatementGroup }
