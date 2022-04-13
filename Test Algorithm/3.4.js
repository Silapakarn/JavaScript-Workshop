function draw(n) {
    let arr = [];
    let text = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= (n - i); j++) {
            arr.push(text += "-");
        }
        
        for (let k = 0; k < ((2 * i) - 1); k++) {
            arr.push(text += "*");
        }
        
        for (let g = 1; g <= (n - i); g++) {
            arr.push(text += "-");
        }
        text += "\n";
    }

    for(let i = 1; i < n; i++){
        for (let j = 0; j < n; j++) {
            if (j >= i) {
                arr.push(text += "*");
            } else {
                arr.push(text += "-");
            }
        }

        for (let g = n-1; g > 0; g--){
            if (g > i) {
                arr.push(text += "*");
            } else {
                arr.push(text += "-");
            }
        }
        text += '\n';
    }
    console.log(text);
    console.log(arr);
}
draw(3);