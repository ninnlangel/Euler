// Prepare arrays of words.
const words0to19 = [null, "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const words10s = [null, "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

// Define a function to parse a number and return it in words.
function numberToEnglish(number, numberInEnglish = []) {
    if (number >= 0 && number < 20) {
        numberInEnglish.push(words0to19[number]);
        return numberInEnglish;
    } else if (number < 100 && number >= 20) {
        numberInEnglish.push(words10s[Math.floor(number / 10)]);
        if ((number % 10) > 0) {
            numberInEnglish.push(words0to19[number % 10]);
        }
        return numberInEnglish;
    } else if (number >= 100 && number < 1000) {
        let hundreds = Math.floor(number / 100);
        numberInEnglish.push(words0to19[hundreds], "hundred");
        if ((number % 100) > 0) { numberInEnglish.push("and") };
        return numberToEnglish(number % 100, numberInEnglish);
    } else if (number >= 1000) {
        let thousands = Math.floor(number / 1000);
        numberInEnglish.push(words0to19[thousands], "thousand");
        if ((number % 1000) < 100 && (number % 1000) > 0) { numberInEnglish.push("and") };
        return numberToEnglish(number % 1000, numberInEnglish);
    } else {
        console.log("Number is out of bounds :", number);
    }
    return numberInEnglish;
}

let result = 0;

for (let i = 1; i <= 1000; i++) {
    let a = numberToEnglish(i)
    result += a.join('').length
}

console.log(result);