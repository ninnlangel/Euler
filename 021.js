const MAXIMUM = 10000;

function sumOfProperDivisors(number) {
    let sum = 0;
    for (let i = 1; i <= Math.floor(number / 2); i++) {
        ((number % i) == 0) ? (sum += i) : {};
    }
    return sum;
}

function amicablePair(number) {
    let sum = sumOfProperDivisors(number)
    if (sum <= MAXIMUM && sumOfProperDivisors(sum) == number && sum != number) {
        return sum;
    } else {
        return false;
    }
}

let result = [];

for (let i = 0; i <= MAXIMUM; i++) {
    let number = amicablePair(i);
    if (number != false) {
        result.push(number, i)
    }
}

result = Array.from(new Set(result));
result = result.reduce((sum, n) => sum + n);

console.log(result);