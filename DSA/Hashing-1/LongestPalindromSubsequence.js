function LongestPalindromSubsequence(str) {
  const [start, end] = helper(str, 0, str.length - 1);
  return str.subString(start, end + 1);
}

function helper(str, i, j) {
  if (i === j) return [i, j];

  if (i > j) return [-1, -1];

  if (str[i] === str[j]) {
    [s, e] = helper(str, i + 1, j - 1);

    return s - i === 1 && j - e === 1 ? [i, j] : [s, e];
  } else {
    [ls, le] = helper(str, i + 1, j);
    [rs, re] = helper(str, i, j - 1);

    return re - rs > le - ls ? [rs, re] : [ls, le];
  }
}
