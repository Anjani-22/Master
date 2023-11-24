/* here u need to find 4 lemets whose sum quals to target, so by
fitst approach- you can find a[i], a[j] its sum and the l=j+1, k=last index, check a[l]+a[k]+a[i]+ a[j]==target,
if u nede to remove dublicates you can skil iteration for two for loops ,
iniside inner for loop whil is used to find next t index as left and right and again, the are incremented or der to skip duicates



2d appriach is in 2 loops u cal culate sum , and check if trget - currentSum exists in map , if yesthe check if all 4 indices are distince and retrun them 
*/
function fourSum(nums, target) {
  const result = [];

  if (nums.length < 4) {
    return result; // Not enough elements to form a quadruplet
  }

  nums.sort((a, b) => a - b); // Sort the array in ascending order

  for (let i = 0; i < nums.length - 3; i++) {
    // Early exit if the minimum sum is greater than the target
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
    }

    // Skip duplicate elements in the outer loop
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      // Skip duplicate elements in the inner loop
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          // Skip duplicate elements
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }

          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

//2ndapproach

function fourSum(nums, target) {
  const result = [];
  const pairMap = {};

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const currentSum = nums[i] + nums[j];
      const diff = target - currentSum;

      if (pairMap.hasOwnProperty(diff)) {
        for (const pair of pairMap[diff]) {
          const [a, b] = pair;
          if (a !== i && a !== j && b !== i && b !== j) {
            const quadruplet = [nums[i], nums[j], nums[a], nums[b]].sort(
              (a, b) => a - b
            );
            result.push(quadruplet);
          }
        }
      }

      // Store the current pair in the hashmap
      if (!pairMap.hasOwnProperty(currentSum)) {
        pairMap[currentSum] = [];
      }
      pairMap[currentSum].push([i, j]);
    }
  }

  // Remove duplicate quadruplets
  const uniqueResult = result.filter((value, index, self) => {
    const strValue = JSON.stringify(value);
    return self.findIndex((q) => JSON.stringify(q) === strValue) === index;
  });

  return uniqueResult;
}

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

const result = fourSum(nums, target);
console.log(result); // Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
