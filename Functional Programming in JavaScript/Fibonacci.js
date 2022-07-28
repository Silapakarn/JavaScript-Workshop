//•	Please use any language that you good at the most and write a function that accept input n and return the n-th element in Fibonacci sequence. While the Fibonacci Sequence is the series of numbers. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function Fibonacci(n) {

  // debugger
    if (n === 0) {
      return 0;
    }

    if (n === 1) {
      return 1;
    }

    if (n === 2) {
      return 1;
    }
  
    let fib_prev = 1;
    let fib_curr = 1;
  
    for (let j = 3; j <= n; j++) {
      const next = fib_prev + fib_curr;

      fib_prev = fib_curr;
      fib_curr = next;
    }
    return fib_curr;
}

console.log('================================')

console.log(Fibonacci(2)) //[0,1]
console.log(Fibonacci(10)) //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
