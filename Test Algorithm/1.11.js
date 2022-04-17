function draw(n){
    text = '';
    for(var i=0; i < n ; i++){
        for(var j=0; j < n ; j++){
            if(i == j){
                text += '-';
            }else{
                text += '*';
            }
        }
        text += '\n';
    }
    console.log(text);
}

draw(3);