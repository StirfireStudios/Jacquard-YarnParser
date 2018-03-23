const fs = require('fs');

function ReadEntireFile(path, encoding) {
  if (encoding == null) encoding = 'utf8';
  return fs.readFileSync(path, {flag: 'r', encoding: encoding});
}

function OpenFileWriteStream(path, encoding) {
  if (encoding == null) encoding = 'utf8';
	const options = {
		flags: 'w',
		encoding: encoding,
		autoClose: true
  }  
  const stream = fs.createWriteStream(path, options);
  stream.cork();
  return stream;
}

function FinishWriteStream(stream) {
	process.nextTick(function() {
    stream.uncork();
    process.nextTick(function() {
      stream.end();
    });
	});
}

module.exports = {ReadEntireFile, OpenFileWriteStream, FinishWriteStream}