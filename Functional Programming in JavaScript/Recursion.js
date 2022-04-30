function countDown(n) {
    if (n < 0) return;
    console.log('Count down: ', n);
    countDown(n - 1);
}
countDown(10);

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(' ')
console.log('Factorial: ', factorial(4));