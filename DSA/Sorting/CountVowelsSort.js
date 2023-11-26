const strings = ["apple", "orange", "banana", "grape", "melon"];

// Create a function to count the number of vowels in a string
function countVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let char of string) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

// Use the `sort()` method with a custom comparison function
strings.sort((a, b) => countVowels(b) - countVowels(a));

console.log(strings); // Output: ["melon", "grape", "banana", "apple", "orange"]
