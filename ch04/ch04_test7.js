var fs = require('fs');

                        //w = 쓰기 , r = 읽기
fs.open('./output.txt', 'w', function(err, fd){
    if(err){
        console.log('File Open시 Error 발생...');
        console.dir(err);
        return;
    }
    console.log('File Open Success...');

    var buf = new Buffer('안녕!\n');
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
        if(err){
            console.log('File Write시 Error 발생...');
            console.dir(err);
            return;
        }

        console.log('File Write Success...');

        fs.close(fd, function(){
            console.log('File Close Success...');
        });
    });
});
