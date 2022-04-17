function draw(n){
    text = '';
    for(var i = n; i >= 1 ; i--){
        for(var j = n; j >= 1 ; j--){
            text += i;
        }
        text += '\n';
    }
    console.log(text);
}

draw(3);