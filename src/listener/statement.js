'use strict';

import LineGroup from '../statements/lineGroup';
import Location from '../parser/location';
const YarnParser = require('../antlr/YarnParser').YarnParser;
import * as Util from './util';

function enter(ctx) {
  if (this._statementGroup != null) return;
  const location = Location.FromANTLRNode(ctx);
  
  Util.StatementGroup.Start.call(this, ctx);
}

function exit(ctx) {
  const lastNode = ctx.getChild(ctx.getChildCount() - 1);
  if (lastNode.symbol == null || lastNode.symbol.type !== YarnParser.NEWLINE) return;
  Util.StatementGroup.End.call(this, ctx);
}

function addToPrototype(prototype) {
	prototype.enterPart = enter;
	prototype.exitPart = exit;
}

module.exports = addToPrototype;