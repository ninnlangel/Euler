const DURATION = 100;
const START = 1901;
const YEARS = Array.from(new Array(DURATION), (x, i) => i + START);
const DAYS = ['Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri'];

function zellerCongruence(day, month, year) {
    if (month == 1 || month == 2) {
        month += 12
        year--
    }
    let weekDay;
    let k = year % 100;
    let j = Math.floor(year / 100);
    weekDay = day + Math.floor((13 * (month + 1)) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) + Math.floor(5 * j);
    return weekDay % 7;
}

var result = 0;

for (year in YEARS) {
    // console.log("Year is ", YEARS[year]);
    for (let i = 1; i <= 12; i++) {
        // console.log("Month is : ", i);
        (zellerCongruence(1, i, YEARS[year]) == 1) ? result++ : {};
    }
}

console.log(result);