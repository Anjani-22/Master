function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let foundIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      foundIndex = mid; // Store the index where K is found.
      break;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return foundIndex;
}

function findFrequency(arr, target) {
  const index = binarySearch(arr, target);

  if (index === -1) {
    return 0; // K not found in the array.
  }

  let frequency = 1;

  // Count K to the left.
  for (let i = index - 1; i >= 0 && arr[i] === target; i--) {
    frequency++;
  }

  // Count K to the right.
  for (let i = index + 1; i < arr.length && arr[i] === target; i++) {
    frequency++;
  }

  return frequency;
}

const sortedArray = [2, 3, 3, 3, 5, 5, 7, 8, 8, 8];
const target = 3;
const frequency = findFrequency(sortedArray, target);
console.log(`The frequency of ${target} is ${frequency}`);
