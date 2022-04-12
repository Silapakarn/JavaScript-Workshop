function draw(n){
    text = '';
    let count = 1;
    for(var i=n-1; i >= 0 ; i--){
        for(var j=0; j < n ; j++){
            if(j >= i){
                text += count;
                count++
            }else{
                text += '-';
            }
        }
        text += '\n';
    }

    for(var i=1; i < n ; i++){
        for(var j=0; j < n ; j++){
            if(j >= i){
                text += count;
                count++
            }else{
                text += '-';
            }
        }
        text += '\n';
    }
    console.log(text);
}
draw(3);