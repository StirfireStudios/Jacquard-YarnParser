'use strict';

const BlankStatement = require('../statements/blank');
const Location = require('../parser/location');

function exit(ctx) {
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	if (this._statements.length > 0) {
		const lastStatement = this._statements[this._statements.length - 1];
		if (lastStatement instanceof BlankStatement) return;
	}
	this._statements.push(new BlankStatement(location));
}

function addToPrototype(prototype) {
  prototype.exitBlank = exit;
}

module.exports = addToPrototype;