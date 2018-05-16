'use strict';

import BlankStatement from '../statements/blank';
import Location from '../parser/location';
import * as Util from './util';

function exit(ctx) {
	const location = Location.FromANTLRNode(ctx);
	location.fileID = this._fileID;
	Util.DialogueSegment.Finish.call(this);

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