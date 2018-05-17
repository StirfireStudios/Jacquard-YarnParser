const OS = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

if (OS.type() === "Windows_NT") {
  exec('rmdir dist /s /q').then(_ => exec('babel src -d dist'))
} else {
  exec('rm -Rf dist').then(_ => exec('babel src -d dist'))
}
