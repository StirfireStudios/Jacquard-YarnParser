const SHORTCUT_START = "{"
const SHORTCUT_END = "}"

function processLine(lines) {
  const line = lines.shift();
  const state = this.indentStack[0];
  const matches = line.match(/([\s]*)(\S{0,2})/);
  const whitespace = matches[1]
  const whitespaceLength = whitespace.length
  const postWhitespace = matches[2]

  if (state.inOption) {
    if (whitespaceLength < state.whitespaceLength || state.whitespace === whitespace) {
      this.output.push(this.output.pop() + SHORTCUT_END);
      this.indentStack.shift();
      lines.unshift(line);
      return;
    }
  }

  if (whitespaceLength > state.whitespaceLength || state.whitespace == whitespace) {
    if (postWhitespace === "->") {
      this.indentStack.unshift({
        whitespace: whitespace,
        inOption: true,
        whitespaceLength: whitespaceLength
      });
      this.output.push(line + SHORTCUT_START);
      return;
    }
  }

  this.output.push(line);
}


module.exports = function(yarnString) {
	const state = {
		indentStack: [
			{whitespace: '', inOption: false, whitespaceLength: 0}
		],
		output: []
	}

	const lines = yarnString.split(/\r\n|\n/);
	while(lines.length > 0) {
		processLine.call(state, lines)
	}

	return state.output.join("\n")
}