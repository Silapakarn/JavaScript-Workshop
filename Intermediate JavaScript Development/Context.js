console.log('Global:', this);


function ContextFunction() {
    console.log('ContextFunction:', this);
}


const myObj = {
    contexMethod: function() {
        console.log('contexMethod:', this);

        var innerMethod = function() {
            console.log('innerMethod:', this);
        }
        innerMethod();
    }
}


ContextFunction();
myObj.contexMethod();


console.log('Using Call ->');
ContextFunction.call(myObj, );