function firstNonRepeatedChar(str) {
  const charCount = {};

  // First pass: Count the frequency of each character
  for (let char of str) {
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  // Second pass: Find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
