var logger = function(inputMethod, inputName) {
    var inputResult = inputMethod(inputName);
    console.log(inputResult)
}

var testFunction = function(name) {
    return 'Name: ' + '' + name;
}


var drinkFunction = function(beverage) {
    return 'I am drinking: ' + '' + beverage;
}

logger(testFunction, 'Karn');
logger(drinkFunction, 'Beer');