'use strict';

const Location = require('./location');

/**
 * Instances of this class detail messages from the parser.
 * @property {string} message The message
 * @property {Location} location The location of the message
 */
class ParserMessage {
	constructor(message, location) {
    if (message !== undefined) this.message = message;
    if (location !== undefined) this.location = location;
  }

  toString() {
    return `${this.message} - ${this.location}`;
  }

  static FromANTLRContext(obj, message) {
    let location = null;
    if (obj.isErrorNode !== undefined && obj.isErrorNode()) {
      location = Location.FromANTLRSymbol(obj.symbol);
    } else {
      location = Location.FromANTLRNode(obj);
    }
    
    return new ParserMessage(message, location);
  }
}

module.exports = ParserMessage;