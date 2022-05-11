var myVar = 'Chris';

function myFunction() {
    let functionVar = 'Function Scope'
    let myVar = 'Function Var';

    console.log(myVar);
    console.log(functionVar);
}


myFunction()

console.log(myVar)