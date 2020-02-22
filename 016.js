const POWER = 1000;
let number = BigInt(Math.pow(2, 1000));

let result = number.toString().split('').reduce((n, t) => Number(n) + Number(t));

console.log(result)