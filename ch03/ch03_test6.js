var users = [{name : '박상묵', age:27}, {name:'김자영',age:25}];

var oper = function(a,b){
    return a+b;
};

users.push(oper);

console.dir(users);
console.log('세번째 배열 요소를 함수로 실행 : ' + users[2](10,10));
