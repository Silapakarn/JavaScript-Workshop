var myArray = [1, 2, 3, 4, 5]
var myArray1 = ['Karn', 'Dragon', 'Hello']
var myArray2 = ['How', 'Are', 'You']

console.log(myArray.splice(1, 3));
console.log('')

console.log(myArray1.join(' '))
console.log(myArray1.join(' and '))
console.log('')

console.log(myArray2)
console.log(myArray2.reverse())
console.log('')

var myNumber = [1, 20, 50]
console.log(myArray2.sort())
console.log(myNumber.sort())

function numeric(num1, num2) {
    return num1 - num2;
}
console.log(myNumber.sort(numeric))
console.log('')


console.log(myArray)
console.log(myArray.splice(2, 2))
console.log(myArray)