/* the smallest case wi be when set is empty so return [[]] for it, else recursive call on set excrpt the first element, 
assuming this powerSt gives power set for remaing elsent except first, for loop throught hat add and first elemnt to each of these
set(arrays) inside power set without first, and push this in powerset with first element, so it will consistes of all arrys with first, now each of these 2 power set consists of multiple arrays, spread it and return the result
*/

function powerSet(set) {
  if (set.length === 0) {
    return [[]];
  }

  const firstElement = set[0];
  const remainingSet = set.slice(1);
  const subsetsWithoutFirstElement = powerSet(remainingSet);

  const subsetsWithFirstElement = [];
  for (const subset of subsetsWithoutFirstElement) {
    const newSubset = [...subset, firstElement];
    subsetsWithFirstElement.push(newSubset);
  }

  return [...subsetsWithoutFirstElement, ...subsetsWithFirstElement];
}

//other Way is here u just increment the index and include and exlude element at every index when it reaches lenght of arr, its ushed to powerset
//this is basicallu inlclusinf and excluding at every index

function powerSetRecursive(nums, index, subset, powerSet) {
  // Base case: Reach the end of the input array
  if (index === nums.length) {
    // Add the current subset to the power set
    powerSet.push([...subset]);
    return;
  }

  // Include the current element in the subset
  subset.push(nums[index]);
  powerSetRecursive(nums, index + 1, subset, powerSet);

  // Exclude the current element from the subset
  subset.pop();
  powerSetRecursive(nums, index + 1, subset, powerSet);
}

function powerSetMain(input) {
  const nums = input.split(" ").map(Number);
  const powerSet = [];
  const subset = [];

  powerSetRecursive(nums, 0, subset, powerSet);

  return powerSet;
}
