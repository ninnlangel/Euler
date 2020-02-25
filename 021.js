/* 
Project Euler Problem 21

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly 
into n). If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a 
and b are called amicable numbers. For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 
11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 
and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

// Timing the execution :
let startTime = Date.now()

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

function getAmicablePartner(number) {
    let amicablePair = sumOfProperDivisors(number);
    if (sumOfProperDivisors(amicablePair) == number && amicablePair != number) {
        return amicablePair;
    } else {
        return null;
    }
}

function findAmicablePairsWithinRange(rangeMin, rangeMax) {
    let amicablePairs = new Set(); // Using a set avoids having to manage duplicates
    for (let i = rangeMin; i <= rangeMax; i++) {
        let pair = getAmicablePartner(i);
        if (pair != null) {
            if (pair <= rangeMax) {
                amicablePairs.add(pair);
                amicablePairs.add(i);
            }
        }
    }
    return amicablePairs;
}

// Running with exercise specifics :
let amicablePairs = findAmicablePairsWithinRange(1, 10000);

// Summing pairs and displaying result.
let result = Array.from(amicablePairs); // Must convert set to array for reduction.
result = result.reduce((sum, n) => sum + n);

console.log(result)

// Display time the program ran.
console.log("duration : ", Date.now() - startTime, "ms");