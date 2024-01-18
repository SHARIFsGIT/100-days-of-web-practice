function isLeapYear(year){
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
        return year;
    }
    else {
        return year;
    }
}
var myYear = isLeapYear(1952);
console.log(myYear, 'is leap year');

var myYear = isLeapYear(1953);
console.log(myYear, 'is not a leap year');

var myYear = isLeapYear(1800);
console.log(myYear, 'is not a leap year');

var myYear = isLeapYear(1600);
console.log(myYear, 'is leap year');