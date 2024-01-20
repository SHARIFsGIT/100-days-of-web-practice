function temperatureConverter(fahrenheit) {
    var celsius = (fahrenheit - 32) / 1.8;
    var roundedCelsius = Math.round(celsius * 100) / 100;
    return roundedCelsius;
}

// Test Cases
console.log(temperatureConverter(50));   // Output: 10
console.log(temperatureConverter(103));  // Output: 39.44