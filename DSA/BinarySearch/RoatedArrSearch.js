function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Target found, return its index.
    }

    if (nums[left] <= nums[mid]) {
      // Left subarray is sorted.
      if (target >= nums[left] && target < nums[mid]) {
        // Target is in the left subarray.
        right = mid - 1;
      } else {
        // Target is in the right subarray.
        left = mid + 1;
      }
    } else {
      // Right subarray is sorted.
      if (target > nums[mid] && target <= nums[right]) {
        // Target is in the right subarray.
        left = mid + 1;
      } else {
        // Target is in the left subarray.
        right = mid - 1;
      }
    }
  }

  return -1; // Target not found in the array.
}

const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
const target = 1;
const position = search(rotatedArray, target);
console.log(`Target ${target} found at position ${position}`);
