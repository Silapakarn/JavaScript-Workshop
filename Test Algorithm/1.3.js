function draw(n){
    text = '';
    for(var i = 1; i < n+1 ; i++) {
        for(var j = 1; j < n+1 ; j++){
            text += i;
        }
        text += '\n';
    }
    console.log(text);
}

draw(3);