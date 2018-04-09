'use strict';

YarnListener.prototype = Object.create(BaseListener.prototype);

module.exports = function(data, body) {
  const chars = new antlr4.InputStream(data)
  const lexer = new YarnLexer.YarnLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new YarnParser.YarnParser(tokens);
  parser.buildParseTrees = true;
  let tree = null;
  if (body) {
    tree = parser.body();
  } else {
    tree = parser.dialogue();
  }
  const listener = new YarnListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  delete(listener._node);
  delete(listener._statements);
  delete(listener._conditional);
  delete(listener._shortcut);
  return listener;
}