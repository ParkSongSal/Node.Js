var fs = require('fs');

fs.writeFile('./output.txt', 'Hello', function(err){
    if(err){    //Error인경우
        console.log('Error 발생...');
        console.dir(err);
        return;
    }else{
        console.log('output.txt 파일에 데이터 쓰기 완료함.');
    }


});
