function bubbleSort(arr) {
  let n = arr.length;

  for (
    let i = 0;
    i < n - 1;
    i++ // we need n-1 outer itertions
  ) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // t.c: N^2, s.c => constant
  return arr;
}
