'use strict';

import Group from './group';

const privates = new WeakMap();

/**
 * Represents a dialog segment (a set of linegroups or text lines)
 * @memberof Statement
 * @augments Statement.Group
 * @class DialogueSegment
 */
class DialogueSegment extends Group {
  /**
   * 
   * @param {Statement[]} statements 
   * @param {Location} location 
   * @param {string} identifier 
   * @param {string[]} translationNotes 
   */
  constructor(statements, location, identifier, translationNotes) { 
    super(statements, location); 

    const privs = {
      identifier: identifier,
      notes: translationNotes,
    }

    privates.set(this, privs);
  }

  /** @memberof Statement.DialogueSegment
   * @instance
   * @returns {string} the unique identifer of this segment
   */
  get identifier() { return privates.get(this).identifier; }

  /** @memberof Statement.DialogueSegment
   * @instance
   * @returns {string[]} the translation notes
   */
  get translationNotes() { return privates.get(this).notes; }
}

module.exports = DialogueSegment;
