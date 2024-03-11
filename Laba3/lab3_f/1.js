function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
  }
  
  function removeDuplicates(num) {
    return parseInt([...new Set(num.toString().split(''))].join(''));
  }
  
  function countDigitOccurrences(num, digit) {
    const digitStr = digit.toString();
    const numStr = num.toString();
    let count = 0;
    for (let i = 0; i < numStr.length; i++) {
      if (numStr[i] === digitStr) {
        count++;
      }
    }
    return count;
  }
  
  function longestSequenceOfZerosOrOnes(num, digit) {
    const binaryStr = num.toString(2);
    const regex = new RegExp(`${digit}+`, 'g');
    const matches = binaryStr.match(regex);
    if (matches) {
      const longestSequence = Math.max(...matches.map(match => match.length));
      return longestSequence;
    } else {
      return 0;
    }
  }
  
  console.log(reverseNumber(123)); // Выведет 321
  console.log(removeDuplicates(111333456)); // Выведет 13456
  console.log(countDigitOccurrences(1355567, 5)); // Выведет 3
  console.log(longestSequenceOfZerosOrOnes(21345, 0)); // Выведет длину самой длинной последовательности нулей
  console.log(longestSequenceOfZerosOrOnes(21345, 1)); // Выведет длину самой длинной последовательности единиц