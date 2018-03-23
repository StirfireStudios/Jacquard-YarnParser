const fs = require('fs');

export const ReadEntireFile = function(path, encoding) {
  if (encoding == null) encoding = 'utf8';
  return fs.readFileSync(path, {flag: 'r', encoding: encoding});
}

export const OpenFileWriteStream = function(path, encoding) {
  if (encoding == null) encoding = 'utf8';
	const options = {
		flags: 'w',
		encoding: encoding,
		autoClose: true
  }  
  const stream = fs.createWriteStream(filename, options);
  stream.cork();
  return stream;
}

export const FinishWriteStream = function(stream) {
	process.nextTick(function() {
    stream.uncork();
    process.nextTick(function() {
      stream.end();
    });
	});
}