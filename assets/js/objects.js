
/* function resultNumber(obj, fieldName) {
  obj[fieldName] = Math.random();
}

result = resultNumber(object, 'randNumber');

console.log(result) */

const car = {
  speed: 0,
  moveforward: function(){return this.speed = 50},
  moveBack: function() {return this.speed = 20},
  stop: function() {return this.speed = 0} 
}
