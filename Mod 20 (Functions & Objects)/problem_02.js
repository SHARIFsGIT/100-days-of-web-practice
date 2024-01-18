function make_avg(num1, num2, num3) {
    var avg = (num1 + num2 + num3) / 3;
    return avg;
}
var average = make_avg(5, 10, 15);
console.log(average.toFixed(2));