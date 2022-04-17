function draw(n){
    text = '';
    for(var i = n-1; i >= 0; i--){
        for(var j = 0; j < n ; j++){
            if(j >= i){
                text += '*';
            }else{
                text += '-';
            }
        }
        text += '\n';
    }
    console.log(text);
}

draw(4);