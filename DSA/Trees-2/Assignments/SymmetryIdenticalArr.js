const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("enter num arr space seperated", symmetry);

function symmetry(input) {
  let tree = input.trim().split(" ").map(Number);
  if (arr.length === 0) return true;
  let level = 0;

  return identical(arr[2 * level + 1], parentIndex, arr);
}

function identical(parentIndex1, parentIndex2, tree) {
  if (parentIndex1 > tree.length || parentIndex1 > tree.length) return true;

  return (
    tree[parentIndex1] === tree[parentIndex2] &&
    identical(2 * parentIndex1 + 1, 2 * parentIndex2 + 1, arr) &&
    identical(2 * parentIndex1 + 2, 2 * parentIndex2 + 2, arr)
  );
}
