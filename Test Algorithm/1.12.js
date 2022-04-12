function draw(n){
    let text = '';
    for(let i = n-1; i >= 0; i--){
        for(let j = 0; j < n; j++){
            if(j == i){
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