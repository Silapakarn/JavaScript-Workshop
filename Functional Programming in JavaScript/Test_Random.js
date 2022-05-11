function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


console.log(Math.random());


function myFunction() {
    document.getElementById("myP").style.fontSize = Math.floor((Math.random() * 8) + 3) + "px";
}