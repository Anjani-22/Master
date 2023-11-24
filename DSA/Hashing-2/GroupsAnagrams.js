/*
 create hash map or obj, with key as sorted array and value array of anagrams, iterate through arr of words, sort them and check if it existas in hashmap or obj[sortedword], else obj[sortedword]=[word] //push array with word in it else push the word inot it i.e obj[sortedword].push(word)
 retunr map.values or Object.value(anagrams)
*/

function groupAnagrams(words) {
  const anagrams = {};

  // Helper function to sort characters in a word
  const sortWord = (word) => {
    return word.split("").sort().join("");
  };

  words.forEach((word) => {
    const sortedWord = sortWord(word);

    // Use the sorted word as a key in the object
    if (!anagrams[sortedWord]) {
      anagrams[sortedWord] = [word];
    } else {
      anagrams[sortedWord].push(word);
    }
  });

  // Convert the object values to an array
  const result = Object.values(anagrams);

  return result;
}

// Example usage:
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(words);
console.log(result);
