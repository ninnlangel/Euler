/* 

    Project Euler Problem 24
    
    Generated on : Fri Mar 13 2020

    A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation 
    of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, 
    we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

    012   021   102   120   201   210

    What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

// Timing the execution :
let startTime = Date.now()

// Declaring variables
let position = 999999;
let result = [];
let sample = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Declaring functions
function factorial(number) {
    if (number > 1) {
        return number * factorial(number - 1);
    } else {
        return 1;
    }
}

function permutationAtPos(position, sample) {
    if (position > factorial(sample.length)) {
        result = "Position is beyond the number of possibilities"
    } else {
        if (sample.length == 1) {
            result.push(sample[0])
        } else {
            num = Math.floor(position / factorial(sample.length - 1));
            result.push(sample[num]);
            sample.splice(num, 1);
            permutationAtPos(position % factorial(sample.length), sample);
        }
    }
    return result;
}

// Running with exercise specifics :
result = permutationAtPos(position, sample);

// Displaying result.
console.log(result.join(''));

// Display time the program ran.
console.log("Duration : ", Date.now() - startTime, "ms");