function draw(n){
    let arr = [];
    text = '';
    for(var i=0; i < n ; i++){
        for(var j=0; j < n ; j++){
            if(j <= i){
                arr.push(text +='*');
            }else{
                arr.push(text +='-');
            }
        }
        text += '\n';
    }
    console.log(text);
    console.log(arr);
}
draw(4);