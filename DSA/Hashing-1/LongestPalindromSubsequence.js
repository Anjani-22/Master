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

//iterarate whole array , then at each element expand left , right,
/*
function longestPalindrome(s) {
    if (s.length === 0) {
        return "";
    }

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

// Example usage:
const inputString = "babad";
const result = longestPalindrome(inputString);
console.log(result);

*/
