var names = ['김자영','다비치','엔분의일','윤딴딴'];

var users = [{name:'박상묵', age:27}, {name:'김자영', age:25}];

users.push({name:'시루',age:1});

console.log('사용자 수 : ' + users.length);
console.log('첫번째 사용자 : ' + users[0].name);

for(var i=0;i<users.length;i++){
    console.log('사용자 정보 : ' + users[i].name + " / " + users[i].age+"세");
}
