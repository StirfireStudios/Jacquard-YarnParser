'use strict';

const Location = require('../parser/location');

function getParts(hashtag) {
  const parts1 = hashtag.trimLeft("#").split(":");
  const retVal = parts1.splice(0,1);
  retVal.push(parts1.join(':'));
  return retVal;
}

function exit(ctx) {
  const location = Location.FromANTLRNode(ctx);
  const parts = getParts(ctx.hashtag.text);
  debugger;
}

function addToPrototype(prototype) {
  prototype.exitHashtag = exit;
}

module.exports = addToPrototype;
