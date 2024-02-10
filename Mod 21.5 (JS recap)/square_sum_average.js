const calculate = (arrOfNumbers) => {
    const squaredArray = arrOfNumbers.map(num => num ** 2);
    console.log(squaredArray);
    
    let sum = 0;
    for (let i = 0; i < squaredArray.length; i++) {
        sum += squaredArray[i];
    }
    console.log(sum);
    
    const average = sum / arrOfNumbers.length;
    
    return average;
  };
  
  const input = [4, 6, 10, 12];
  
  console.log(calculate(input));