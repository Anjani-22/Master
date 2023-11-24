/*creates map with distint sum at each elemnent while iterating array
sumMap.has(currentSum - targetSum), then  startIndex = sumMap.get(currentSum - targetSum) + 1;
            endIndex = i;
            return nums.slice(startIndex, endIndex + 1);

            else map.set(currrntSum, i  )
*/

function subarrayWithSumK(nums, targetSum) {
  const sumMap = new Map();
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    // Check if a subarray with sum (currentSum - targetSum) exists
    if (sumMap.has(currentSum - targetSum)) {
      const startIndex = sumMap.get(currentSum - targetSum) + 1;
      const endIndex = i;
      return nums.slice(startIndex, endIndex + 1);
    }

    // Store the current sum along with its index
    sumMap.set(currentSum, i);
  }

  // No subarray found
  return null;
}

const nums = [1, 4, 20, 3, 10, 5];
const targetSum = 33;

const result = subarrayWithSumK(nums, targetSum);
console.log(result); // Output: [20, 3, 10]
