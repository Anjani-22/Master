function ifArrMinHeap(arr, p = 0) {
  if (arr.length <= 1) return true;

  if (p > arr.length) return true;

  l = 2 * p + 1;
  r = 2 * p + 2;

  if (
    (l < arr.length && arr[i] > arr[l]) ||
    (r < arr.length && arr[i] > arr[r])
  )
    return false;

  return ifArrMinHeap(arr, l) && ifArrMinHeap(arr, r);
}
