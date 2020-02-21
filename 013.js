const fs = require('fs');
const numbers = fs.readFileSync('./013/numbers.txt', 'utf8').split('\n').map(n => parseInt(n));

let total = numbers.reduce((tot, num) => tot + num);

let result = String(total).replace(/\./g, "").slice(0, 10);

console.log(result);