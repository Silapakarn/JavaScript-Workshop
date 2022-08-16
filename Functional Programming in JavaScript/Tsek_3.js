// def shine(A):
//   count = 0
//   right = 0
//   for i in range(len(A)):
//     right = max(right, A[i])
//     if right == i+1:
//       count += 1
// return count


// A = [2,1,3,5,4]
// A = [2,3,4,1,5]
// A = [1,3,4,2,5]
function shine(A) { 

    let total = 0
    let right = 0

    for(let i = 0; i < A.length; i++) {
        right = Math.max(right, A[i])
        
        if(right == i + 1){
            total += 1
        }
    }
    return total
}

console.log(shine([2,1,3,5,4]))
console.log(shine([2,3,4,1,5]))
console.log(shine([1,3,4,2,5]))


// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

