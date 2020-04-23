var users = [{name:'김자영',age:25}, {name:'박상묵', age:27}, {name:'김시루', age :1}];

delete users[1];

console.dir(users);

users.forEach(function(elem, index){
    console.log('사용자 #'+index);
    console.dir(elem);
});

users.splice(1,0,{name:'홍길동', age:244});
console.dir(users);

users.splice(2,1);
console.dir(users);
