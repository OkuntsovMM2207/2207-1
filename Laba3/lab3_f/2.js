function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return str[i];
      }
    }
  }
  
  function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  
  function uniqueChars(str) {
    return str.split('').filter((value, index, self) => self.indexOf(value) === index).join('');
  }
  
  console.log(firstNonRepeatingChar('фывфавыапрс')); // Выведет 'п'
  console.log(generateRandomString(5)); // Выведет, например, '2fvg6'
  console.log(uniqueChars('позволяеткопироватьтекстиз')); // Выведет 'позвляеткираьс'