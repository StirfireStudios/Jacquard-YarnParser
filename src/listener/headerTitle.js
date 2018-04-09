'use strict';

function exit(ctx) {
  this._nodeData.name = ctx.getChild(1).getText().trim();
}

function addToPrototype(prototype) {
  prototype.exitHeader_title = exit;
}

module.exports = addToPrototype;