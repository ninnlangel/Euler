/* 

    Project Euler Problem 25
    
    Generated on : Sat Mar 14 2020

    What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

*/

// Timing the execution :
let startTime = Date.now()

// Declaring functions
function fibonacciSequence(max) {
    let index = 1
    let a = BigInt(1);
    let b = BigInt(1);
    var nextNum = BigInt(0);
    while (a.toString().length < max) {
        nextNum = a + b;
        a = b;
        b = nextNum;
        index++;
    }
    return index;
}


// Running with exercise specifics :
let result = fibonacciSequence(1000);


// Displaying result.
console.log(result);

// Display time the program ran.
console.log("Duration : ", Date.now() - startTime, "ms");