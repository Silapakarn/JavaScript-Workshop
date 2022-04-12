function draw(n){
    text = '';
    for(let i=n; i > 0 ; i--){
        for(let j=0; j < n ; j++){
            if(j >= i){
                text += '-';
            }else{
                text += '*'
            }
        }
        text += '\n';
    }
    console.log(text);
}

draw(4);