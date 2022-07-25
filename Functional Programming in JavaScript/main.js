const name = ['AAAA', 'BBBBBB', 'C']

console.log(name)
console.log(name.filter(function(name) { 
    return name.length >= 4;
}))

Vehicle.prototype.honk = function(){
    console.log('Hello')
}

var Vehicle = function(wheelsCount, color){
    this.wheels = wheelsCount
    this.color - color
}


var car = new Vehicle(4, 'red');

console.log(car)
car.honk()