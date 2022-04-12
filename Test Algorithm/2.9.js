function draw(n){
    text = '';
    for(var i=1; i < n+1 ; i++){
        for(var j=0; j < (n-i) ; j++){
            text += '-'
        }

        for(var k=0; k < ((2 * i) - 1) ; k++){
            text += '*'
        }

        for(var g=0; g < (n-i) ; g++){
            text += '-'
        }
        text += '\n';
    }
    console.log(text);
}
draw(4);