var Calc = require('./calc3');

var calc1 = new Calc();
calc1.emit('stop');

console.log('Calc 에 stop 이벤트 전달함.');


console.log('Calc 에 stop 이벤트 전달함.'+ calc1.add(10,20));
