/*
creates a obj and places keys as distince element and Just checks if obj[num] exist if it does then num is dublicated else sets obj[num]=true 
 */

function hasDuplicates(nums) {
  const seen = {};

  for (const num of nums) {
    // If the number is already in the "seen" object, it's a duplicate
    if (seen[num]) {
      return true;
    }

    // Mark the number as seen
    seen[num] = true;
  }

  // No duplicates found
  return false;
}
