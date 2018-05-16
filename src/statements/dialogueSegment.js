'use strict';

import Group from './group';

const privates = new WeakMap();

/**
 * Represents a dialog segment (a set of linegroups or text lines)
 * @memberof Statement
 * @augments Statement.Group
 * @class DialogueSegment
 */
export default class DialogueSegment extends Group {
  constructor(statements, location, identifier) { 
    super(statements, location); 

    const privs = {
      identifier: identifier,
    }

    privates.set(this, privs);
  }

  /** @memberof Statement.DialogueSegment
   * @instance
   * @returns the unique identifer of this segment
   */
  get identifier() { return privates.get(this).identifier; }
}