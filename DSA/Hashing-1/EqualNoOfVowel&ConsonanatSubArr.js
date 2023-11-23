/*
here similar approact to 0 and 1, there u were adding sum in hashmap here u add diff of vovwel and consonant count
at each elemnt
So basically u iterate array, keep count of vowel and consonantts, find their diff, check if diffeve is there ij hasmap, if its there
then current index - map.get(diff) gives lentth where vowel and consonant were euqal as since diff is repeatin git meansall elemnets in between had equal no of vowel and cons
else add the new diff in hashmap
 */

function isVowel(char) {
  return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}

function longestSubarrayWithEqualVowelsConsonants(arr) {
  const vowelCount = new Map();
  let maxLen = 0;
  let countVowels = 0;
  let countConsonants = 0;

  // Initialize the map with 0 count at index -1
  vowelCount.set(0, -1);

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i].toLowerCase();

    if (isVowel(char)) {
      countVowels++;
    } else {
      countConsonants++;
    }

    const diff = countVowels - countConsonants;

    if (vowelCount.has(diff)) {
      // Update max length if the current difference has been seen before
      maxLen = Math.max(maxLen, i - vowelCount.get(diff));
    } else {
      // Store the current difference along with the index
      vowelCount.set(diff, i);
    }
  }

  return maxLen;
}

// Example usage:
const inputArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
const result = longestSubarrayWithEqualVowelsConsonants(inputArray);
console.log(result);
