function findingSmallest(numbers) {
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    return smallest;
  }
  
  const numbersArray = [10, 33, 5, 99, 6];
  const smallestElement = findingSmallest(numbersArray);
  console.log(smallestElement);