function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index of the target element if found.
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Return -1 if the target element is not found in the array.
}

const sortedArray = [10, 20, 30, 40, 50, 60];
const target = 30;
const position = binarySearch(sortedArray, target);
console.log(`Target ${target} found at position ${position}`);
