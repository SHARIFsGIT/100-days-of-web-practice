function time(hour){
    const min = hour * 60;
    return min;
}
const givenHour = 10;
const minutes = time(givenHour);
console.log(`${givenHour} hour is ${minutes} minutes`);