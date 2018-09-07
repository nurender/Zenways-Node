var arg = process.argv;
var calc = require('./abc.js');
if(arg[2].indexOf('+')!=-1){
    var values = arg[2].split('+')
    sum(parseInt(values[0]), parseInt(values[1]))
} else if(arg[2].indexOf('-')!=-1){
    var values = arg[2].split('-')
    subtract(values[0], values[1])
}