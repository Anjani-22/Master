/*
for this just iterate entire arr find the the freqnecy of each lemtnt in hashmap,

then iterate map if freq of any element is one , return that element, u can iterate as for([key, value] of map.entries() ){....if(value==1)return key} 
*/

function firstNonRepeatingElement(arr) {
  const elementFrequency = new Map();

  // Count the frequency of each element
  for (const element of arr) {
    elementFrequency.set(element, (elementFrequency.get(element) || 0) + 1);
  }

  // Find the first non-repeating element
  for (const element of arr) {
    if (elementFrequency.get(element) === 1) {
      return element;
    }
  }

  // If no non-repeating element is found, return null or an appropriate value
  return null;
}
