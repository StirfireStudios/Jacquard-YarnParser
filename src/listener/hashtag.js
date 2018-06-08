'use strict';

import Location from '../parser/location';
import HashtagStatement from '../statements/hashtag';
import * as Util from './util';

function getParts(hashtag) {
  if (hashtag.startsWith("#")) hashtag = hashtag.substring(1);
  const parts1 = hashtag.split(":");
  const retVal = parts1.splice(0,1);
  retVal.push(parts1.join(':'));
  return retVal;
}

function exit(ctx) {
  const location = Location.FromANTLRNode(ctx);
  const parts = getParts(ctx.hashtag.text);
  let statement = null;
  if (parts.length > 1) {
    statement = new HashtagStatement(parts[0].trim(), parts[1].trim(), location);
  } else {
    statement = new HashtagStatement(parts[0].trim(), null, location);
  }

  if (Util.DialogueSegment.Exists.call(this)) {
    Util.DialogueSegment.AddStatement.call(this, statement);
  } else {
    this._statements.push(statement);
  }

}

export default function addToPrototype(prototype) {
  prototype.exitHashtag = exit;
}

