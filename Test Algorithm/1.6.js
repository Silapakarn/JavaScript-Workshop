function draw(n){
    text = '';
    let count = 1;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            text += count;
            count++
        }
        text += '\n';
    }
    console.log(text);
}

draw(4);