function getGrade(mark) {
    if (mark >= 80) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'F';
    }
}
const examResult = 95;

const grade = getGrade(examResult);
console.log(grade);
