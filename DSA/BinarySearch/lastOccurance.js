function lastOccurance(arr, target) {
  return helper(arr, 0, arr.length, target);
}

function helper(arr, l, h, target) {
  const mid = Math.floor(l + h - h / 2);
  if (arr[mid] < target) return helper(arr, 0, mid - 1, target);
  else if (arr[mid] > target) return helper(arr, mid + 1, h, target);
  else if (arr[mid] === target) {
    if (mid === arr.length - 1 || arr[mid + 1] > target) return mid;
    else return helper(arr, mid + 1, h, target);
  } else return -1;
}
