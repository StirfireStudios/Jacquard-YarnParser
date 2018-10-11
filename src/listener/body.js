'use strict';

import BlankStatement from '../statements/blank';
import Location from '../parser/location';
import * as Util from './util';

function exitBody(ctx) {
  if (this._nodeData == null) return;
  const location = Location.FromANTLRNode(ctx);
  location.start.line += 1;
  location.start.column = 0;
  location.end.line -= 1;
  location.end.column = 0;

  this._nodeData.bodyLocation = location;
}

function addToPrototype(prototype) {
	prototype.exitBody = exitBody;
}

module.exports = addToPrototype;
