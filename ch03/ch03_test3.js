var add2 = function(a, b){
    return a + b;
}

var result = add2(22, 15);

console.log('더하기 결과 : ' + result);

var person = {};
person.name = '다비치';
person['age'] = 27;
person.add = function(a, b){
    return a + b;
}

console.log('더하기 : ' + person.add(20,30));
console.log('person : ' + person);
