import DialogueSegment from '../statements/dialogueSegment';

// Dialog segment utils!
function dsStart() {
  if (this._dialogSegment != null) {
    finishDialogSegment.call(this);    
  }

  this._dialogSegment = {
    identifier: null,
    statements: [],
  }
}

function dsAddStatement() {

}

function dsFinish() {
  if (this._dialogSegment == null) return;
  if (this._dialogSegment.statements.length == 0) return;
  this._statements.push(new DialogueSegment(
    this._dialogSegment.statements,
    null,
    this._dialogSegment.identifier,
  ));
}

export const DialogueSegment = {
  AddStatement: dsAddStatement,
  Finish: dsFinish,
}