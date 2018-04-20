'use strict';

const SHORTCUT_START = '\u001D'
const SHORTCUT_END = '\u001E'

const DEBUG_SHORTCUT_START = "{"
const DEBUG_SHORTCUT_END = "}"

function startInstruction(debug) {
  if (debug) {
    return DEBUG_SHORTCUT_START;
  } else {
    return SHORTCUT_START;
  }
}

function endInstruction(debug) {
  if (debug) {
    return DEBUG_SHORTCUT_END;
  } else {
    return SHORTCUT_END;
  }
}

function processLine(lines) {
  const line = lines.shift();
  const state = this.indentStack[0];
  const matches = line.match(/([\s]*)(\S{0,2})/);
  const wholeMatch = matches[0];
  const whitespace = matches[1];
  const whitespaceLength = whitespace.length;
  const postWhitespace = matches[2];

  if (this.comment) {
    const indexOfEndComment = line.indexOf("*/")
    if (indexOfEndComment == -1) {
      this.output.push(line);
      return;
    } else {
      const nextLine = line.substr(indexOfEndComment + 2);
      if (nextLine.length > 0) lines.unshift(nextLine);
      this.output.push(line.substr(0, indexOfEndComment + 2));
      this.comment = false;
      return;
    }
  }

  if (postWhitespace === "//") {
    this.output.push(line);
    return;
  }

  if (postWhitespace === "/*") {
    this.comment = true;
    lines.unshift(line);
    return;
  }

  if (state.inOption && postWhitespace.length > 0) {
    if (whitespaceLength < state.whitespaceLength || state.whitespace === whitespace) {
      this.output.push(this.output.pop() + " " + endInstruction(this.debug));
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
      this.output.push(
        wholeMatch + " " +
        startInstruction(this.debug) + 
        line.substr(wholeMatch.length)
      );
      return;
    }
  }

  this.output.push(line);
}


module.exports = function(yarnString, debug) {
	const state = {
		indentStack: [
			{whitespace: '', inOption: false, whitespaceLength: 0}
		],
    output: [],
    debug: debug === true,
    comment: false,
	}

	const lines = yarnString.split(/\r\n|\n/);
	while(lines.length > 0) {
		processLine.call(state, lines)
	}

	return state.output.join("\n")
}