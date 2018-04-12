'use strict';

function exit(ctx) {
	const tagName = ctx.getChild(0).toString().trim();
	this._nodeData.tags.push(tagName);
}

function addToPrototype(prototype) {
  prototype.exitHeader_title = exit;
}

module.exports = addToPrototype;