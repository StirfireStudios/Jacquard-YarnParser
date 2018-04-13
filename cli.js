const fs = require('fs');

const FileIO = require('./FileIO');

const package = require('./package.json')
const program = require('commander');

const YarnParser = require('./src/index').Parser;

program
  .version(package.version)
  .option("--preprocessOnly <filename>", 'Only run the shortcut preprocessor. Write the preprocessed file to <filename>')
  .option("--debugPreprocess", 'Output the debug preprocessed file (only works with --preprocessOnly)')
  .option("--bodyOnly", "the specified file only contains a node body")
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

parser = new YarnParser({
  preprocessOnly: config.preprocessOnly,
  preprocessDebug: config.preprocessDebug
});

if (parser.parse(yarnText, program.bodyOnly, config.filename)) {
  console.error(`Could not parse ${config.filename}`)
  parser.errors.forEach((error) => {
    console.error(`Error: ${error.message}`);
  })
}

if (config.preprocessOnly) {
  config.preprocessFS.write(parser.preprocessedData);
  FileIO.FinishWriteStream(config.preprocessFS);
}
