function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentElement = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currentElement) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = currentElement;
  }
}

const unsortedArray = [5, 2, 9, 1, 5, 6];
insertionSort(unsortedArray);
console.log(unsortedArray);
