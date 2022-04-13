function draw(n){
    text = '';
    for(let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) {
            if (j >= i) {
                text += '*';
            } else {
                text += '-';
            }
        }

        for (let g = n-1; g > 0; g--){
            if (g > i) {
                text += '*';
            } else {
                text += '-';
            }
        }
        text += '\n';
    }
    console.log(text);
}
draw(4);