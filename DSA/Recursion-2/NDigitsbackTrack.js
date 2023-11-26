function generateNDigitNumbers(digits, n) {
  const result = [];

  function backtrack(path) {
    if (path.length === n) {
      result.push(Number(path.join("")));
      return;
    }

    for (let digit of digits) {
      path.push(digit); // Choose
      backtrack(path); // Explore
      path.pop(); // Backtrack
    }
  }

  backtrack([]);
  return result;
}

const inputDigits = [1, 2];
const n = 3;
const output = generateNDigitNumbers(inputDigits, n);
console.log(output);
