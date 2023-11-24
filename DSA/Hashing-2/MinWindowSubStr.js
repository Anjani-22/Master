/* Here we are first storing fre of each char of str t in hashmap, then we keep both left and right pointer intialized to0
first we increment right and check char of str if its present in hashmap then decrement its freq count and increase count if freq>0, if count eqas to str lenght
then enter the inner loop update max lenght and start pointer, check if left char is ther in hasmap if yes increment freq count as you have encountered agian, if freq>0 decrement count increase left pointer inned loop condition if count==t.lenght
*/

function minWindowSubstring(s, t) {
  // Create a hash table to store the frequency of characters in 't'
  const charFrequency = {};
  for (const char of t) {
    if (!charFrequency[char]) {
      charFrequency[char] = 0;
    }
    charFrequency[char]++;
  }

  // Initialize the sliding window pointers
  let left = 0,
    right = 0;

  // Initialize the minimum window length and starting index
  let minWindowLength = Infinity,
    minWindowStart = 0;

  // Count of characters in the current window that are also in 't'
  let count = 0;

  // Sliding window approach to find the minimum window
  while (right < s.length) {
    // Include the character at 'right' in the current window
    const currentChar = s[right];
    if (charFrequency[currentChar] !== undefined) {
      charFrequency[currentChar]--;
      if (charFrequency[currentChar] >= 0) {
        count++;
      }
    }

    // Expand the window until all characters in 't' are included
    while (count === t.length) {
      // Check if the current window is smaller than the minimum window found so far
      const currentWindowLength = right - left + 1;
      if (currentWindowLength < minWindowLength) {
        minLength = currentWindowLength;
        mainWindowStart = left;
      }

      // Exclude the character at 'left' from the current window
      const leftChar = s[left];
      if (charFrequency[leftChar] !== undefined) {
        charFrequency[leftChar]++;
        if (charFrequency[leftChar] > 0) {
          count--;
        }
      }

      // Slide the window to the right
      left++;
    }

    // Move the right pointer to expand the window
    right++;
  }

  // If no window was found, return an empty string
  if (minLength === Infinity) {
    return "";
  }

  // Return the minimum window substring
  return s.substring(mainWindowStart, mainWindowStart + minLength);
}
