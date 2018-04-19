'use strict';

function setTitle(value) {
	this._nodeData.name = value;
}

function setTags(value) {
	this._nodeData.tags = value.split(',').map((tag) => {
		return tag.trim();
	});
}

function setAttr(name, value) {
	if (this._nodeData.attributes[name] != null) {
		this.addWarning(ctx, `Attribute ${name} was already defined in this node, skipping`);
		return;
	}

	this._nodeData.attributes[name] = value;
}

function exit(ctx) {
	const attrName = ctx.getChild(0).getText().trim().toLower();

	if (ctx.getChildCount() < 3) {
		this.addWarning(ctx, `Attribute ${attrName} has no value`);
		return;
	}

	const value = ctx.getChild(2).getText().trim();

	switch (attrName) {
		case "title":
			setTitle.call(this, value);
			break;
		case "tags":
		case "tag":
			setTags.call(this, value);
			break;
		default:
			setAttr.call(this, attrName, value);
	}
}

function addToPrototype(prototype) {
  prototype.exitHeader = exit;
}

module.exports = addToPrototype;