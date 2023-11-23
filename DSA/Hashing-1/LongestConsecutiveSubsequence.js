/* here u r storing all lements in set, then iterating the array,
 if element -1 is there in set then u dongt do anythinh as longest 
 subsequence is alredy calculate for it, else u keep pn checking if elemnt +1 is there
 is there u increment length and element by, else u check for another element in arr
*/

function longestConsecutive(nums) {
  if (nums.length === 0) {
    return 0;
  }

  const numSet = new Set(nums);
  let maxLength = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}

// Example usage:
const nums = [100, 4, 200, 1, 3, 2];
const result = longestConsecutive(nums);
console.log(result);
