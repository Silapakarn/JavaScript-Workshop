const persons = [
    { name: "John", age: 17 },
    { name: "kan", age: 10 },
    { name: "kon", age: 15 }
];


//Closures 

function outer() {
    const name = 'Outer';

    return function inner() {
        console.log('Outer name: ', name);
    }
    inner();
}
const innerFunction = outer();
innerFunction();