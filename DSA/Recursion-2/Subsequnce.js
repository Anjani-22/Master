function subsequences(str) {
  if (str.length === 0) {
    return [""];
  }

  const char = str[0];
  const rest = str.substring(1);
  const subsequencesWithoutChar = subsequences(rest);

  const subsequencesWithChar = [];
  for (const subsequence of subsequencesWithoutChar) {
    subsequencesWithChar.push(subsequence);
    subsequencesWithChar.push(char + subsequence);
  }

  return subsequencesWithoutChar.concat(subsequencesWithChar);
}

//const str = "abc";
const allSubsequences = subsequences(str);
console.log(allSubsequences);
/**************************************************/

function subsequences(str, index, subsequences) {
  if (index === str.length) {
    subsequences.push(str.substring(0, index));
    return;
  }

  const char = str[index];

  subsequences(str, index + 1, subsequences);
  subsequences(
    str,
    index + 1,
    subsequences.map((subsequence) => char + subsequence)
  );
}

const str = "abc";
const subsequences = [];
subsequences(str, 0, subsequences);
console.log(subsequences);
