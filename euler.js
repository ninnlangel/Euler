/* 
    Generator of base file for Euler Project problem solving.

    Usage : node euler.js exercise_number

*/

const fs = require('fs');

// Main program here :
if (hasParams(process.argv)) {
    let paramsNumber = Number(process.argv[2]);
    if (isNumber(paramsNumber)) {
        console.log("Creating file for exercise :", paramsNumber);
        createFile(paramsNumber);
    } else {
        console.log("Number must consist only of digits : 12, 012, 001, 100 are all possibilites.")
    }
} else {
    console.log("Must supply an exercise number.");
}

// Function declarations
function hasParams(params) {
    return params.length >= 3 ? true : false
}

function isNumber(number) {
    return !isNaN(number);
}

function padNumber(number) {
    let paddedNumber = '' + number;
    while (paddedNumber.length < 3) { // We want numbers to be in XXX format.
        paddedNumber = '0' + paddedNumber;
    }
    return paddedNumber;
}

function createFile(exercise) {
    // create filename
    let filename = padNumber(exercise) + '.js';
    let fileContent = generateFileContent(exercise);
    // get file content from ./assets/euler_sample.js
    if (fs.existsSync(filename)) {
        console.log('This file already exists. Check your exercise number?');
    } else {
        fs.writeFile(filename, fileContent, (err) => {
            if (err) throw err;
            console.log('Created file :', filename, "successfully!");
        });
    }
}

function generateFileContent(exercise) {
    let date = new Date().toDateString()
    let fileContent = `
/* 

    Project Euler Problem ${exercise}
    
    Generated on : ${date}

    Insert problem definition here.

*/

// Timing the execution :
let startTime = Date.now()

// Declaring variables
let result;

// Declaring functions



// Running with exercise specifics :



// Displaying result.
console.log(result)

// Display time the program ran.
console.log("Duration : ", Date.now() - startTime, "ms");
`;
    return fileContent
}