/* here again store the sum=arr[i]+arr[j] in hashmap along with indices i, j, if sum alresdy exists in arr
check its indeices l, k if they all 4 are distincet it means u have found 4 elents where  arr[k]+arr[l]=arr[i]+arr[j]
*/

function hasEqualSumIndices(arr) {
  const sumMap = new Map();

  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sum = arr[i] + arr[j];
      if (sumMap.has(sum)) {
        const [k, l] = sumMap.get(sum);
        if (k !== i && k !== j && l !== i && l !== j) {
          return true;
        }
      } else {
        sumMap.set(sum, [i, j]);
      }
    }
  }

  return false;
}
