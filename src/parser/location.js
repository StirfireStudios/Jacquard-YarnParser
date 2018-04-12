'use strict';

/**
 * Instances of this class detail where in a file statements, warnings or errors are.
 * Line and column information should be integers.
 * If start and end are null, this location is for a given file.
 * @property {string}  fileID - The ID of the file this location pertains to.
 * @property {object}  start - The start of this location.
 * @property {number} start.line - The line that this location starts on.
 * @property {number} start.column - The column that this location starts on.
 * @property {object}  end - The start of this location.
 * @property {number} end.line - The line that this location ends on.
 * @property {number} end.column - The column that this location ends on.
 */
class Location {
	constructor() {
    this.fileID = null,
    this.start = {line: 0, column: 1}
    this.end = {line: 0, column: 1}
  }

  static FromANTLRNode(node) {
    const obj = new Location();
    obj.start = { line: node.start.line, column: node.start.column };
    obj.end = { line: node.stop.line, column: node.stop.column };
    return obj;
  }
    
  static FromANTLRSymbol(symbol) {
    const obj = new Location();
    obj.end = obj.start = { line: symbol.line, column: symbol.column };
    return obj;
  }
}

module.exports = Location