function countVowels(str) {
  // Define vowels (both lowercase and uppercase)
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Example usage:
console.log(countVowels("Hello")); // Output: 3 (e, o, o)
console.log(countVowels("world"));
