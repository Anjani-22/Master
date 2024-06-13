//flaten array

var flat = function (arr, n) {
  if (n == 0) return arr;
  const output = [];
  for (subarray of arr) {
    if (Array.isArray(subarray) && n > 0) {
      output.push(...flat(subarray, n - 1));
    } else {
      output.push(subarray);
    }
  }
  return output;
};

//2pointer longenst palindrom
function longestPalindrome(str) {
  let start = 0;
  let end = 0;

  for (let i = 0; i < str.length; i++) {
    const len1 = expandCenter(str, i, i);

    const len2 = expandCenter(str, i, i + 1);

    const currentLen = Math.max(len1, len2);
    if (currentLen > end - start) {
      start = i - Math.floor((currentLen - 1) / 2);
      end = start + currentLen;
    }
  }

  return str.slice(start, end);
}

function expandCenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  // return length excluding center characters
  return right - left - 1;
}

//max sub array
function maxSubarray(arr) {
  let maxSoFar = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum + arr[i];
    if (a[i] > currentSum) {
      startIndex = i;
      endIndex = i + 1;
      currentSum = arr[i];
      maxSoFar = arr[i];
    } else {
      if (currentSum > maxSoFar) {
        maxSoFar = currentSum;
        endIndex = i + 1; // Update end index (points to element after current)
      }
    }
  }
  return { sum: maxSoFar, subarray: arr.slice(startIndex, endIndex) };
}
