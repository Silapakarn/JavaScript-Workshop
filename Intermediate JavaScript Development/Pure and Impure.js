var myVar = 'Chris';

function setNameImpure(newName) {
    myVar = newName;
}

console.log(myVar);
setNameImpure('Karn');
console.log(myVar);


function setNamePure(newName) {
    return newName;
}

console.log(' ');

console.log(myVar);
var myNewName = setNamePure('Dragon');
console.log(myVar);
console.log(myNewName)