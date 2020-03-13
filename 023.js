/* 

    Project Euler Problem 23
    
    Generated on : Sat Feb 29 2020

    A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, 
    the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
    A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this 
    sum exceeds n.

    As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of 
    two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be 
    written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even
    though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than 
    this limit.

    Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

// Timing the execution :
let startTime = Date.now()

// Declaring variables
let abundantNumbers = [];
let max = 28123;
let result = max * (max + 1) / 2;

// Declaring functions
function isDivisor(num, div) {
    return num % div == 0;
}

function sumOfProperDivisors(number) {
    let length = Math.floor(number / 2);
    let sum = 0;
    for (let i = 1; i <= length; i++) {
        if (isDivisor(number, i)) {
            sum += i
        }
    }
    return sum;
}

function isAbundant(num) {
    if (sumOfProperDivisors(num) > num) {
        return true;
    } else {
        return false;
    }
}

function isPairOfAbundantNumbers(number) {
    let limit = Math.floor(number / 2);
    for (let a of abundantNumbers) {
        if (a > limit) {
            return false;
        }
        if (abundantNumbers[a] && abundantNumbers[number - a]) {
            return true;
        }
    }
    return false;
}

// Get abundant numbers
for (let i = 0; i <= max; i++) {
    if (isAbundant(i)) {
        abundantNumbers[i] = true
    }
}

// Remove from total all abundantNumbers which are writable as abundant pairs
for (let i = 1; i < 28124; i++) {
    if (isPairOfAbundantNumbers(i)) {
        result -= i;
    }
}

// Displaying result.
console.log(result)

// Display time the program ran.
console.log("Duration : ", Date.now() - startTime, "ms");