var person1 = {name: '김자영', age:25};

var person2 = {name: '박상묵', age:27};

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){
    console.log(speed +'km 속도로 걸어갑니다.');
};

var person3 = new Person('김시루',1);
var person4 = new Person('이추추',5);

person3.walk(10);



