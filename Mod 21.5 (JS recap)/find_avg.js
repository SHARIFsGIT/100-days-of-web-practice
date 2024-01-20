function calculateAverageMarks(marks) {
    // Calculate the sum of all marks
    var sum = marks.reduce((acc, mark) => acc + mark, 0);

    // Calculate the average
    var average = sum / marks.length;

    // Round the average to two decimal places
    var roundedAverage = Math.round(average * 100) / 100;

    // Print the result
    console.log(roundedAverage);
}

// Test Cases
calculateAverageMarks([75.25, 65, 80, 35.45, 99.50]);
calculateAverageMarks([100, 100, 100, 100, 100]);
