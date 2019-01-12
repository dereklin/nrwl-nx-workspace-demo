var spawn = require('child_process').spawn;

// because first arg will actually be something like "./execute.js"
// this is the "regular javascript" you want to evaluate
// var arg1 = process.argv[1];
// so lets eval it
// var res = eval(arg1);
// this is the remaining args, that is the command you want to run (and its args)
// var command = process.argv[1] + ' ' + process.argv[2];
// var commandArgs = process.argv.slice(3);
// if arg1 evaluation resulted in a value, append this value to the list of args
// if (res) {
//   commandArgs.push(res);
// }
// execute the command
var prc = spawn('./node_modules/.bin/ng.cmd', ['serve', '--hmr', '--open', '--project=app2']);
// console.log('hello world');
