function isLeapYear(year) {
    // Returns true if the year is leap year otherwise false
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function findLeapYears(years) {
    const leapYears = [];
    for (let i = 0; i < years.length; i++) {
        const year = years[i];
        if (isLeapYear(year)) {
            leapYears.push(year);
        }
    }
    return leapYears;
}
const yearsArray = [2023, 2024, 2025, 2028, 2030];
const leapYearsResult = findLeapYears(yearsArray);
console.log("Leap years:", leapYearsResult);