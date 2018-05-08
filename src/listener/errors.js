import antlr4 from 'antlr4';

import Location from '../parser/location';
import ParserMessage from '../parser/message';

function ErrorListener(listener) {
  this.listener = listener;
}

ErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);

ErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
  const location = new Location();
  location.fileID = this.listener._fileID;
  if (this.listener._nodeData != null) location.nodeName = this.listener._nodeData.name;
  location.end.line = location.start.line = line;
  location.end.column = location.start.column = column;
  this.listener.errors.push(new ParserMessage(`Syntax Error - ${msg}`, location));
}

/*ErrorListener.prototype.reportAmbiguity = function(recognizer, offendingSymbol, line, column, msg, e) {
  const location = new Location();
  location.fileID = this.listener._fileID;
  if (this.listener._nodeData != null) location.nodeName = this.listener._nodeData.name;
  location.end.line = location.start.line = line;
  location.end.column = location.start.column = column;
  this.listener.errors.push(new ParserMessage(`Ambiguous syntax`, location));
}*/

export default ErrorListener;