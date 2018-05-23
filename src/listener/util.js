import Statements from '../statements';
import LineGroup from '../statements/lineGroup';
import Location from '../parser/location';
import ParserMessage from '../parser/message';
import { Statement } from '../../dist';

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
  switch(statement.constructor) {
    case Statements.Blank:
    case Statements.Conditional:
    case Statements.DialogueSegment:
    case Statements.Evaluate:
    case Statements.Function:
    case Statements.Link:
    case Statements.Option:
    case Statements.OptionGroup:
    case Statements.Shortcut:
    case Statements.ShortcutGroup:
      return false;
    case Statements.Command:
    case Statements.LineGroup:
    case Statements.Text:
    case Statements.Hashtag:
      return true;
    default: 
      console.warn(`Unrecognized statement type: ${statement.constructor.name}`);
      return false;
  }
}

function isDialogRef(statement) {
  return statement.key.toLowerCase() === "dialogref";
}

function isTranslationNote(statement) {
  const key = statement.key.toLowerCase();
  if (key.startsWith("translationnote")) return true;
  if (key.startsWith("translatornote")) return true;
  return false;
}

function dsAddHashtagInfo(statement) {
  if (isDialogRef(statement)) {
    if (statement.value == null) return;
    if (this._dialogSegment.identifier !== null) {
      const message = new ParserMessage("Extra dialog reference id", statement.location)
      message.location.fileID = this._fileID;
      this.warning.push(message);
      return;
    }
    this._dialogSegment.identifier = statement.value;
  } else if (isTranslationNote(statement)) {
    if (statement.value == null) return;
    this._dialogSegment.translationNotes.push(statement.value);
  }
}

function dsAddStatement(statement) {
  if (!dsStatement(statement)) {
    dsFinish.call(this);
    this._statements.push(statement);
    return;
  }

  if (this._dialogSegment == null) {
    this._dialogSegment = { identifier: null, statements: [], translationNotes: [], }
  }

  if (statement instanceof Statements.Hashtag) {
    dsAddHashtagInfo.call(this, statement);
  }

  let lastStatement = getLastStatement.call(this);
  while(lastStatement instanceof Statements.Hashtag) {
    dsAddStatement.call(this, this._statements.pop());
    lastStatement = getLastStatement.call(this);
  }

  this._dialogSegment.statements.push(statement);
}

function dsExist() { return this._dialogSegment != null; }

function dsFinish() {
  if (this._dialogSegment == null) return;
  this._statements.push(new Statements.DialogueSegment(
    this._dialogSegment.statements,
    null,
    this._dialogSegment.identifier,
    this._dialogSegment.translationNotes,
  ));
  this._dialogSegment = null;
}


const dsExternals = {
  AddStatement: dsAddStatement,
  Exists: dsExist,
  Finish: dsFinish,
}

export function getLastStatement() {
  if (this._statements.length === 0) return null;
  return this._statements[this._statements.length - 1];
}

export { dsExternals as DialogueSegment }

export { sgExternals as StatementGroup }
