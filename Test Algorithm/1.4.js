function draw(n) {
    text = ''; 
        for (let i=1; i < n+1; i++) {
            for (let j=0; j < n; j++) {
                text += i;
                }
                text += '\n';
        }
        console.log(text);
}

draw(3);