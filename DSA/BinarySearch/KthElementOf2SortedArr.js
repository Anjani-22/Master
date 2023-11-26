function findKthSmallestBinarySearch(arr1, arr2, k) {
  let left = Math.min(arr1[0], arr2[0]);
  let right = Math.max(arr1[arr1.length - 1], arr2[arr2.length - 1]);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count1 = 0,
      count2 = 0;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] <= mid) {
        count1++;
      }
    }

    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] <= mid) {
        count2++;
      }
    }

    if (count1 + count2 < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
