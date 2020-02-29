/* 

    Project Euler Problem 22
    
    Generated on : Tue Feb 25 2020

    Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. 
    Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to 
    obtain a name score.

    For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th 
    name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

    What is the total of all the name scores in the file?
*/

// Timing the execution :
let startTime = Date.now()

// Declaring variables
const fs = require('fs');
let result = 0;
const alphabet = '_abcdefghijklmnopqrstuvwxyz'.split(''); // array of letters, underscore at beginning allows to use the index directly as value of letter.

// Load and order names
let names = fs.readFileSync('Assets/022_names.txt', 'utf8'); // get list
names = names.replace(/"/g, ''); // remove quotes
names = names.toLowerCase().split(',').sort(); // Downcase and into an array.

// Declaring functions

// Sum of alphabet-position of each letter in string
function calculateAlphabeticalValue(word) {
    let wordAsArray = word.split('');
    let wordAsNumbers = wordAsArray.map(letter => alphabet.findIndex(value => value == letter));
    let alphabeticalValue = wordAsNumbers.reduce((sum, letter) => sum += letter);
    return alphabeticalValue;
}

// Running with exercise specifics :
for (let i = 0; i < names.length; i++) {
    let value = calculateAlphabeticalValue(names[i]);
    let score = (i + 1) * value;
    result += score;
};

// Displaying result.
console.log("Result: ", result)

// Display time the program ran.
console.log("Duration : ", Date.now() - startTime, "ms");