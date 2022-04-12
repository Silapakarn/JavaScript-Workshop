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

        for (let g = 1; g < n; i++){
            if (g < i) {
                text += '*';
            } else {
                text += '-';
            }
        }
        text += '\n';
    }
    console.log(text);
}
draw(3);