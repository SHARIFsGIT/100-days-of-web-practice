function numOfDigits(num) {
    if (num === 0) return 1; // Edge case: when input is zero, return 1
    
    let count = 0; // Initialize count of digits
    
    while (num !== 0) {
        count++;
        num = Math.floor(num / 10); // Remove the last digit by dividing by 10
    }
    
    return count;
}

// Test cases
console.log(numOfDigits(1000));
console.log(numOfDigits(2313421));
console.log(numOfDigits(1305981031));