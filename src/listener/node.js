'use strict';

const Node = require('../node');
const Location = require('../parser/location');

function enter(ctx) {
	if (this._nodeData != null) {
    addWarning(this, ctx, "entering without prior exit");
  }
  
  const location = Location.FromANTLRNode(ctx);
  location.fileID = this._fileID;

  this._nodeData = {
    title: null,
    attributes: {},
    tags: [],
    statements: [],
    linkedNodeNames: [],
    location: location,
  }
  
  this._statements = this._nodeData.statements;
}

function exit(ctx) {
  const node = new Node(this._nodeData);
  if (!node.hasStatements) this.addWarning(ctx, "no statements in node");
  if (node.name == null) {
    this.addError(ctx, "title not in node");
  } else {
    this.nodesByName[node.name] = node;
    this._nodesByLine[node.location.start.line] = node;
  }

  this._nodeData = null;
  this._statements = null;
}

function addToPrototype(prototype) {
  prototype.enterNode = enter;
  prototype.exitNode = exit;
}

module.exports = addToPrototype;