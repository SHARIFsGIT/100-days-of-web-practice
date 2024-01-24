function JimOrDela (marksOfJim, marksOfDela) {
    if (marksOfJim > marksOfDela) {
        return "Jim";
    } else {
        return "Dela";
    }
}
const jimMarks = 84;
const delaMarks = 75;

const topper = JimOrDela(jimMarks, delaMarks);
console.log(topper);
