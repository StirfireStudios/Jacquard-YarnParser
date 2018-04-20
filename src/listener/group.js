'use strict';

const OptionGroup = require('../statements/options');
const ShortcutGroup = require('../statements/shortcuts');
const Location = require('../parser/location');

function enter(ctx) {
	const groupParts = {
		previousGroup: this._group,
		previousStatements: this._statements,
		statements: [],
		isOption: false,
		isShortcut: false,
	}
	this._group = groupParts;
	this._statements = groupParts.statements;
}

function exit(ctx) {
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	const groupParts = this._group;
	this._statements = groupParts.previousStatements;
	this._group = groupParts.previousGroup;

	if (groupParts.statements.length == 0) return;

	if (groupParts.isOption && groupParts.isShortcut) {
		this.addError(ctx, "Both options and shortcuts in this group");
		return;
	}

	let groupClass = null; 

	if (groupParts.isOption) groupClass = OptionGroup;
	if (groupParts.isShortcut) groupClass = ShortcutGroup;
	if (groupClass == null) {
		this.addWarning(ctx, "No option found, just adding statements");
		groupParts.statements.forEach((statement) => {
			this._statements.push(statement);
		});
		return;
	}

	this._statements.push(new groupClass(
		groupParts.statements, location
	));
}

function addToPrototype(prototype) {
	prototype.enterOption_group = enter;
  prototype.exitOption_group = exit;
}

module.exports = addToPrototype;