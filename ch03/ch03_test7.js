var users = [{name:'김자영',age:25}, {name:'박상묵', age:27}, {name:'김시루', age :1}];



//방법1
for(var i=0;i<users.length;i++){
    console.log('사용자 #'+ i + ": " + users[i].name + " / " + users[i].age+"세");
}

console.log('=====================================');

//방법2
users.forEach(function(elem, index){
    console.log('사용자 #' + index + ' :' + elem.name + " / " + elem.age);
})
