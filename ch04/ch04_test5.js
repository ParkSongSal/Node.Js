var fs = require('fs'); //FileSystem


//동기 방식
var data = fs.readFileSync('./package.json', 'utf8');

//console.log(data);


//비동기 방식
fs.readFile('./package.json', 'utf8', function(err, data){
    console.log(data);
});
