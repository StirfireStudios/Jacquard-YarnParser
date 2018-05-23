'use strict';

import ShortcutStatement from '../statements/shortcut';
import Location from '../parser/location';

function enter(ctx) {
	const shortcutParts = {
		previousShortcut: this._shortcut,
		previousStatements: this._statements,
		statements: [],
	}

	this._shortcut = shortcutParts;
	this._statements = shortcutParts.statements;
}

function exit(ctx) {
	if (this._group != null) this._group.isShortcut = true;
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	const shortcutParts = this._shortcut;
  this._statements = shortcutParts.previousStatements;
  this._shortcut = shortcutParts.previousShortcut;

	this._statements.push(new ShortcutStatement(
		shortcutParts.statements,
		location,
	));
}

function addToPrototype(prototype) {
	prototype.enterShortcut = enter;
	prototype.exitShortcut = exit;
}

module.exports = addToPrototype;
