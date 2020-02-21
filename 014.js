let startTime = Date.now()
const MAX_NUMBER = 10000000 // Max number we'll test.
const METHOD = 'smarter'

// Store the longest chain length and corresponding number
let longestChain = {
    number: 0,
    length: 0
}

function updateLongestChain(number, length) {
    if (longestChain.length < length) {
        longestChain.number = number;
        longestChain.length = length;
    }
}
s
// Define a method that generates next number in Collatz chain.
const nextNumber = num => num % 2 == 0 ? (num /= 2) : ((num *= 3) + 1);

// Define a method which cycles the chain and stores it's length, checking
// at each number if it's in the storedChainStarts and completing it if necessary. 
const smarterChainLoop = (num, chain = []) => {
    if (allNumbers[num] == undefined) {
        chain.unshift(num);
        return smarterChainLoop(nextNumber(num), chain);
    } else {
        // we update allNumbers with the chain length for each item in current chain.
        let storedChainLength = allNumbers[num];
        chain.forEach((number, index) => {
            let chainLengthAtNumber = index + 1 + storedChainLength;
            if (number <= MAX_NUMBER) {
                allNumbers[number] = chainLengthAtNumber
            };
        });
        return (chain.length + storedChainLength);
    }
};

// Define a method which cycles the chain and stores it's length, checking
// at each number if it's in the storedChainStarts and completing it if necessary. 
function smartChainLoop(num, length = 0) {
    length++;
    if (num == 1) {
        return length;
    } else {
        return smartChainLoop(nextNumber(num), length);
    }
};

// Create array of all numbers to test and set the first two.
let allNumbers = new Array(MAX_NUMBER).fill(undefined)
allNumbers[0] = 0;
allNumbers[1] = 1;

// // Loop all numbers and build chain.
// allNumbers.forEach((number, index) => {
//     if (number == undefined) {
//         chainLoop(index);
//     }
// });

// Loop all numbers and build chain.
if (METHOD == 'smart') {
    allNumbers.forEach((number, index) => {
        if (number == undefined) {
            let length = smartChainLoop(index);
            allNumbers[index] = length;
            updateLongestChain(index, length);
        }
    });
} else {
    allNumbers.forEach((number, index) => {
        if (number == undefined) {
            let length = smarterChainLoop(index);
            updateLongestChain(index, length);
        }
    });
}




console.log(longestChain);
console.log("duration : ", Date.now() - startTime, "ms");