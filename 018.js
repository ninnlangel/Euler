const fs = require('fs');
const pyramid = []
fs.readFileSync('./assets/018_pyramid', 'utf8').split('\n').forEach(line => pyramid.push(line.split(' ')));

// Pyramid is an array of arrays.
function sumLineBeforeLast(pyramid) {
    if (pyramid.length == 1) {
        return pyramid;
    } else {
        let line = pyramid.length - 2;
        pyramid[line].forEach((n, i) => largestSum(line, i, pyramid));
        pyramid.pop();
        return sumLineBeforeLast(pyramid);
    }
}

// Sum biggest number method
function largestSum(line, index, pyramid) {
    if ((pyramid[line + 1][index]) > (pyramid[line + 1][index + 1])) {
        pyramid[line][index] = Number(pyramid[line + 1][index]) + Number(pyramid[line][index]);
    } else {
        pyramid[line][index] = Number(pyramid[line + 1][index + 1]) + Number(pyramid[line][index]);
    }
}

console.log(sumLineBeforeLast(pyramid));