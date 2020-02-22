const squareSide = 20;

// Factorial function.
function factorial(number) {
    if (number > 1) {
        return number * factorial(number - 1);
    } else {
        return 1;
    }
}

// Bit of math :
let totalPossibilities = (factorial(2 * squareSide) / (factorial(squareSide) * factorial(squareSide)))

console.log("Total : ", totalPossibilities);