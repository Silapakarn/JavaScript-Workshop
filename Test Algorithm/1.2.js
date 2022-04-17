function draw(n){
    text = '';
    for(var i=0; i < n; i++){
        for(var j=0; j < n; j++){
            text += '*';
        }
        text += '\n';
    }
    console.log(text);
}

draw(4);