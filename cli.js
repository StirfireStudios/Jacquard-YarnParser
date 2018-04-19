const fs = require('fs');
const Path = require('path');

const FileIO = require('./FileIO');

const package = require('./package.json')
const program = require('commander');

const YarnParser = require('./src/index').Parser;

program
  .version(package.version)
  .option("--preprocessOnly <filename/directory>", 'Only run the shortcut preprocessor. Write the preprocessed file to <filename>')
  .option("--debugPreprocess", 'Output the debug preprocessed file (only works with --preprocessOnly)')
  .option("--bodyOnly", "the specified file only contains a node body")
  .arguments('<infile/indir>')
  .parse(process.argv);

const config = {
  ready: true,
  outputHelp: false,
  inputIsDir: false,
  inputFiles: [],
  preprocessOutputFiles: null,
  preprocessDebug: program.debugPreprocess,
  bodyOnly: program.bodyOnly,
}

if (program.args.length < 1) {
  console.error('Input file not specified');
  config.ready = false;
  config.outputHelp = true;
} else {
  const path = program.args[0];
  const fileType = FileIO.PathType(path);
  switch(fileType) {
    case FileIO.FileType.None:
      console.error(`input file doesn't exist`);
      config.ready = false;
      break;
    case FileIO.FileType.Other:
      console.error(`input file is not a directory or file`);
      config.ready = false;
      break;
    case FileIO.FileType.File:
      config.inputFiles = [program.args[0]]
      config.inputIsDir = false;
      break;
    case FileIO.FileType.Directory:
      config.inputIsDir = true;
      config.inputFiles = FileIO.YarnFilesInDir(path);
      if (config.inputFiles.length == 0) {
        console.error(`input directory contains no yarn files`);
        config.ready = false;
      }
      break;
  }
}

if (program.preprocessOnly != null) {
  const path = program.preprocessOnly;
  const fileType = FileIO.PathType(path);
  if (config.inputIsDir) {
    if (fileType == FileIO.FileType.Other || fileType == FileIO.FileType.File) {
      console.error(`preprocess directory exists and is not a directory, while input is a directory`);
      config.ready = false;      
    } else {
      if (fileType == FileIO.FileType.None) {
        fs.mkdir(path);
      }
      const sourcePathLength = program.args[0].length;
      config.preprocessOutputFiles = [];
      config.inputFiles.forEach((filePath) => {
        const outputPath = `${path}${filePath.substr(sourcePathLength)}`;
        config.preprocessOutputFiles.push(outputPath);
      });
    }
  } else {
    if (fileType == FileIO.FileType.Other) {
      console.error(`preprocess path is not a directory or a file`);
    } else if (fileType == FileIO.FileType.File || FileIO.FileType.None) {
      config.preprocessOutputFiles = [path];
    } else {
      config.preprocessOutputFiles = [
        `${path}${Path.delimiter}${Path.basename(config.inputFiles[0])}`
      ];
    }
  }
}

if (config.inputIsDir && config.bodyOnly) {
  console.error("Can't parse body only and supply a directory of input files");
  config.ready = false;
}

if (!config.ready) {
  if (config.outputHelp) {
    program.help();
  } else {
    return -1;
  }
}

parser = new YarnParser({
  preprocessOnly: config.preprocessOutputFiles != null,
  preprocessDebug: config.preprocessDebug
});

for(let fileIndex = 0; fileIndex < config.inputFiles.length; fileIndex++) {
  const inputPath = config.inputFiles[fileIndex];
  let yarnText = null;
  try {
    yarnText = FileIO.ReadEntireFile(inputPath);
  } catch(err) {
    console.error(`Could not read ${config.filename} - ${err}`);
    continue;
  }

  if (parser.parse(yarnText, config.bodyOnly, inputPath)) {
    console.error(`Could not parse ${inputPath}`)
    parser.errors.forEach((error) => {
      console.error(`Error: ${error}`);
    })
  }

  if (config.preprocessOutputFiles != null) {
    try {
      const preprocessOutputPath = config.preprocessOutputFiles[fileIndex];
      const output = FileIO.OpenFileWriteStream(preprocessOutputPath);
      output.write(parser.preprocessedData);
      FileIO.FinishWriteStream(output);
    } catch(err) {
      console.error(`Could not write preprocessed output ${config.filename} - ${err}`);
    }
  }
}

console.log("all parsed");
