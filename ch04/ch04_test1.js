var url = require('url');

var urlStr = 'https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EC%BD%94%EB%A1%9C%EB%82%98';

var curUrl = url.parse(urlStr);

console.dir(curUrl);

console.log('query -> ' + curUrl.query);

var curStr = url.format(curUrl);

console.log('url -> ' + curStr);

var queryString = require('querystring');
var params = queryString.parse(curUrl.query);

console.log('검색어 : ' + params.query);
