const winston = require('./ch04_test10');
var fs = require('fs');

var infile = fs.createReadStream('./output.txt', {flags:'r'});

infile.on('data', function(data){
    winston.error('Log Test' + data);
    console.log('읽어들인 데이터 : ' + data);
});

infile.on('end', function(){
    console.log('읽기 종료');
});

