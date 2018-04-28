const util = require('util');
const exec = util.promisify(require('child_process').exec);
const program = require('commander');
const package = require('./package.json')

program
  .version(package.version)
  .option('--antlr', 'Run the antlr compiler')
  .option('--tokens <filename>', 'Runs the antlr tool with tokens')
  .option('--gui <filename>', 'Runs the antlr tool with gui')
  .parse(process.argv);

if (program.antlr) {
  exec('antlr4 *.g4 -Dlanguage=JavaScript -visitor', {cwd: 'src/antlr'});
}

if (program.tokens != null) {
  const path = __dirname + program.tokens;
  grun('-tokens', path);
}

if (program.gui != null) {
  const path = __dirname + program.gui;
  grun('-gui', path);
}

function grun(arg, path) {
  exec('antlr4 *.g4 -visitor -o ../../tmp', {cwd: 'src/antlr'})
    .then(_ => exec('javac *java', {cwd: 'tmp'})
      .then(_ => exec('java org.antlr.v4.gui.TestRig Yarn dialogue ' + arg + ' ' + path, {cwd: 'tmp'}, (error, stdout, stderr) => {
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