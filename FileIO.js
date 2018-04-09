const fs = require('fs');

const VALID_YARN_ENDINGS = [".yarn.txt", ".yarn", ".yarn.json"]

const FileType = {
	None: 'none',
	Directory: 'dir',
	File: 'file',
	Other: 'other'
}

function PathType(path) {
	try {
		pathStat = fs.statSync(path);
		if (pathStat.isDirectory()) {
			return FileType.Directory;
		} else if (pathStat.isFile()) {
			return FileType.File;
		} else {
			return FileType.Other;
		}
		return pathStat.isDirectory();
	} catch (err) {
		return FileType.None;
	}
}

function YarnFilesInDir(path) {
  const yarnFilePaths = [];
  fs.readdirSync(path).forEach((filename) => {
    const fullPath = path + '/' + filename;
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      YarnFilesInDir(fullPath, callback).forEach((path) => {
        yarnFilePaths.push(path)
      });
    } else if (stat && stat.isFile()) {
      const downcaseFilename = filename.toLocaleLowerCase();
      const yarnFile = VALID_YARN_ENDINGS.some(function(extension) {
        return downcaseFilename.endsWith(extension);
      });
      if (yarnFile) {
        yarnFilePaths.push(fullPath)
      }
    }
  });

  return yarnFilePaths;
}

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

module.exports = {
  FileType, 
  PathType, 
  ReadEntireFile, 
  OpenFileWriteStream, 
  FinishWriteStream,
  YarnFilesInDir,
}