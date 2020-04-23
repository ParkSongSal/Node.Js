/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/
console.log('Hello Node.Js');

console.log('숫자입니다. %d', 10);
console.log('문자열입니다. %s', '안녕 Node.Js');

var person = {
    name:'다비치',
    age:17,
    member:'이해리'
};
console.log('JSON객체입니다. %j', person.name, person.member);

console.dir(person);

console.time('duration_time');
var result2 = 0;
for(var i =0; i < 10000; i++){
    result2 += i;
}

console.timeEnd('duration_time');

console.log('파일 Name : %s', __filename);      //현재 실행중인 파일 경로, 파일명 출력
console.log('파일 Path : %s', __dirname);  //현재 실행중인 파일의 폴더 경로 출력
