import DialogueSegment from '../statements/dialogueSegment';

// Dialog segment utils!
function dsAddStatement(statement) {
  if (this._dialogSegment == null) {
    this._dialogSegment = { identifier: null, statements: [] }
  }

  this._dialogSegment.statement.push(statement);
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

export const DialogueSegment = {
  AddStatement: dsAddStatement,
  Finish: dsFinish,
  Exists: dsExist,
}