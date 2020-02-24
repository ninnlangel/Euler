// Factorial function.
function factorial(num) {
    number = BigInt(num)
    if (number > 1) {
        return BigInt(number) * BigInt(factorial(number - BigInt(1)));
    } else {
        return 1;
    }
}

let result = (factorial(100));

console.log(result.toString().split('').reduce((total, num) => Number(total) + Number(num), 0));