/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/
var calc = {};

// 더하기 계산
calc.add = function(a, b){
    return a + b;
};

// 빼기 계산
console.log('모듈로 분리하기 전 - calc.add : ' + calc.add(10, 10));
