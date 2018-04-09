const fs = require('fs');

const FileIO = require('./FileIO');

const package = require('./package.json')
const program = require('commander');

const YarnParser = require('./src/index');

program
  .version(package.version)
  .option("--preprocessOnly <filename/directory>", 'Only run the shortcut preprocessor. Write the preprocessed file to <filename>')
  .option("--debugPreprocess", 'Output the debug preprocessed file (only works with --preprocessOnly)')
  .arguments('<infile/indir>')
  .parse(process.argv);

const config = {
  ready: true,
  outputHelp: false,
  inputIsDir: false,
  inputFiles: [],
  preprocessOutput: [],
  preprocessOnly: false,
  preprocessDebug: program.debugPreprocess,
}

if (program.args.length < 1) {
  console.error('Input file not specified');
  config.ready = false;
  config.outputHelp = true;
} else {
  const path = program.args[0]
  const fileType = FileIO.PathType(path)
  switch(fileType) {
    case FileIO.FileType.None:
      console.error(`input file doesn't exist`);
      config.ready = false;
      break;
    case FileIO.FileType.Other:
      console.err(`input file is not a directory or file`);
      config.ready = false;
      break;
    case FileIO.FileType.File:
      config.files = [args[0]]
      config.inputIsDir = false;
    case FileIO.FileType.Directory:
      config.inputIsDir = true;
      config.files = FileIO.YarnFilesInDir(path);
      if (config.files.length == 0) {
        console.err(`input directory contains no yarn files`);
        config.ready = false;
      }
      break;
  }
}

if (program.preprocessOnly != null) {
  const pathName = program.preprocessOnly
}

let yarnText = null

try {
	yarnText = FileIO.ReadEntireFile(config.filename)
} catch(err) {
  console.error(`Could not read ${config.filename} - ${err}`);
}

if (!config.ready) {
  if (config.outputHelp) {
    program.help();
  } else {
    return -1;
  }
}

parser = new YarnParser({
  preprocessOnly: config.preprocessOnly,
  preprocessDebug: config.preprocessDebug
});

if (parser.parse(yarnText, false, config.filename)) {
  console.error(`Could not parse ${config.filename}`)
  parser.errors().forEach((error) => {
    console.error(`Error: ${error.message}`);
  })
}

if (config.preprocessOnly) {
  config.preprocessFS.write(parser.preprocessedData);
  FileIO.FinishWriteStream(config.preprocessFS);
}
