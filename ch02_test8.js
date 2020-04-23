var path = require('path');

var directories = ['Users', 'Mars', 'docs'];

var dirStr = directories.join();

console.log('dir : ' + dirStr);

var dirStr2 = directories.join(path.sep);
console.log('dir2 : ' + dirStr2);

var filepath = path.join('/Users/Mars', 'notepad.exe');;
console.log('filepathㄴㄴㄴㄴㄴ : ' + filepath);

var dirname = path.dirname(filepath);
console.log('파일 경로 : ' + dirname);

var basename = path.basename(filepath);
console.log('파일명 : ' + basename);

var extname = path.extname(filepath);
console.log('확장자명 : ' + extname);
