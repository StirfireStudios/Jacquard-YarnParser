const fs = require('fs');

const FileIO = require('./FileIO');

const package = require('./package.json')
const program = require('commander');

const YarnParser = require('./src/index')

program
  .version(package.version)
  .option("--preprocessOnly <filename>", 'Only run the shortcut preprocessor. Write the preprocessed file to <filename>')
  .option("--debugPreprocess", 'Output the debug preprocessed file (only works with --preprocessOnly)')
  .arguments('<infile>')
  .parse(process.argv);

const config = {
  ready: true,
  outputHelp: false,
  filename: null,
  preprocessOnly: false,
  preprocessFS: null,
  preprocessDebug: false
}

if (program.args.length < 1) {
  console.error('Input file not specified');
  config.ready = false;
  config.outputHelp = true;
}

if (program.preprocessOnly != null) {
  const filename = program.preprocessOnly
  console.log(`filename: ${filename}\n`)
  try {
    config.preprocessFS = FileIO.OpenFileWriteStream(filename);
    config.preprocessOnly = true;
    config.preprocessDebug = program.debugPreprocess
  } catch (err) {
    console.error(`Could not open ${filename} for writing - ${err}`);
    config.ready = false;
  }
}

config.filename = program.args[0];

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

parser = new YarnParser();
parser.preprocessOnly = config.preprocessOnly
parser.preprocessDebug = config.preprocessDebug

if (!parser.parse(yarnText)) {
  console.error(`Could not parse ${config.filename} - ${parser.error}`)
}

if (config.preprocessOnly) {
  config.preprocessFS.write(parser.processedString);
  FileIO.FinishWriteStream(config.preprocessFS);
}
