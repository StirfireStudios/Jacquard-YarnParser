const util = require('util');
const exec = util.promisify(require('child_process').exec);
const program = require('commander');
const package = require('./package.json')
const Path = require('path');

program
  .version(package.version)
  .option('--compile', 'Compile the antlr into JS')
  .option('--tokens <filename>', 'Runs the antlr tool with tokens')
  .option('--gui <filename>', 'Runs the antlr tool with gui')
  .parse(process.argv);

if (program.compile) {
  exec('antlr4 *.g4 -Dlanguage=JavaScript -listener', {cwd: 'src/antlr'});
}

if (program.tokens != null) {
  const path = Path.join(__dirname, program.tokens);
  grun('-tokens', path);
}

if (program.gui != null) {
  const path = Path.join(__dirname, program.gui);
  grun('-gui', path);
}

function grun(arg, path) { 
  exec('antlr4 *.g4 -listener -o ../../tmp', {cwd: 'src/antlr'})
    .then(_ => exec('javac *java', {cwd: 'tmp'})
      .then(_ => exec('grun Yarn dialogue ' + arg + ' ' + path, {cwd: 'tmp'}, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      })
      )
    );
}