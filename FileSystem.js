
var rw = require('random-words');
var fs = require('fs');
fs.open('abc.tex', 'w', (err, data) => {
    if(err){
        console.log("err", err);
        
    }else{
        console.log(data);
        
    }
});