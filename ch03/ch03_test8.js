var users = [{name:'김자영',age:25}, {name:'박상묵', age:27}, {name:'김시루', age :1}];

console.log('사용자 수 : ' + users.length);

users.push({name:'이추추',age:5});

console.log('사용자 수 : ' + users.length);

var elem = users.pop();
console.log('사용자 수 : ' + users.length);

console.log('pop으로 꺼낸 세번째 원소');
console.log(elem);
