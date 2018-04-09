'use strict';

function exit(ctx) {
	const attrName = ctx.getChild(0).getText().trim();
	if (ctx.children.length < 4) {
	  this.addWarning(ctx, `Couldn't find value for header ${attrName}`);
	  return;
	}
	const attrValue = ctx.getChild(2).getText().trim();
  
	if (this._nodeData.attributes[attrName] != null) {
	  this.addWarning(ctx, "Attemping to set attribute ${attrName} twice");
	  return;
	}
  
	this._nodeData.attributes[attrName] = attrValue;
}

function addToPrototype(prototype) {
  prototype.exitHeader_line = exit;
}

module.exports = addToPrototype;