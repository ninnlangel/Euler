const MAXIMUM = 10000;

function sumOfProperDivisors(number) {
    let sum = 0;
    let length = Math.floor(number / 2);
    
    for (let i = 1; i <= length; i++) {
        let remainder = number % i;
        if (remainder == 0) { sum += i };
    }

    return sum;
}

function isAmicablePair(number, sum) {
    return sum <= MAXIMUM &&
           sumOfProperDivisors(sum) == number &&
           sum != number;
}

let result = [];

for (let i = 0; i <= MAXIMUM; i++) {
    let sum = sumOfProperDivisors(i);
    if (isAmicablePair(i, sum)) {
        result.push(sum, i)
    }
}

result = Array.from(new Set(result));
result = result.reduce((sum, n) => sum + n);

console.log(result);