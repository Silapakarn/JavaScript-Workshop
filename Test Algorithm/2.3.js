function draw(n){
    text = '';
    for(var i=0; i < n ; i++){
        for(var j=0; j < n ; j++){
            if(j <= i ){
                text += '*';
            }else{
                text += '-'
            }
        }
        text += '\n';
    }
    
    for(var i=n; i > 1 ; i--){
        for(var j=1; j <= n ; j++){
            if(j >= i){
                text += '-'
            }else{
                text += '*'
            }
        }
        text += '\n';
    }
    console.log(text);     
}

draw(4);