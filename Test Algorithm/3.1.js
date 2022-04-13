function draw(n) {

    let text = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= (n - i); j++) {
            text += "-";
        }
        
        for (let k = 0; k < ((2 * i) - 1); k++) {
            text += "*";
        }
        
        for (let g = 1; g <= (n - i); g++) {
            text += "-";
        }
        text += "\n";
    }


    for(let i = 1; i < n; i++){
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