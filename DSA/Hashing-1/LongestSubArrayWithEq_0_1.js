/*iterate array 
calculate sum for 0 add -1 and for 1 add 1,
if sum is 0 it means all the values till i has equla no of  0 and 1, so start 0, end =i,
if sum is new add it in hasmap with value as it current index i,
if sum already exist sin mp that means all the numbers from prev sum to this values 0

for sum = 4, index 5,

again at index 11 sum is 4, that mean from 6 to 10 index sum was 0, therefore start map.get(sum) + 1, end= i-1;
*/

function findMaxLengthIndices(nums) {
  const sumMap = new Map();
  let maxLength = 0;
  let endIndex = -1;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;

    if (sum === 0) {
      // If the running sum is 0, update the endIndex
      endIndex = i;
      maxLength = i + 1;
    } else if (sumMap.has(sum)) {
      // If the running sum has been seen before, update maxLength and endIndex
      const startIndex = sumMap.get(sum) + 1;
      const currentLength = i - startIndex + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        endIndex = i;
      }
    } else {
      // If the running sum is encountered for the first time, store its index in the map
      sumMap.set(sum, i);
    }
  }

  const startIndex = endIndex - maxLength + 1;

  return {
    startIndex,
    endIndex,
  };
}
