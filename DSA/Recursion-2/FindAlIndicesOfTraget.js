function findAllIndices(arr, target, currentIndex = 0, indices = []) {
  // Base case: if currentIndex exceeds the array length
  if (currentIndex === arr.length) {
    return indices;
  }

  // If the current element is equal to the target, add the index to the indices array
  if (arr[currentIndex] === target) {
    indices.push(currentIndex);
  }

  // Recursive call for the next index
  return findAllIndices(arr, target, currentIndex + 1, indices);
}

// Example usage:
const arr = [1, 2, 3, 4, 2, 5, 2];
const target = 2;
const indices = findAllIndices(arr, target);

console.log(`Indices of ${target} in the array: ${indices}`);
