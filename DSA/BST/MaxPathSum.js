function maxPathSum(root) {
  const output = helper(root, 0);

  return Math.max(...output);
}

function helper(node, sum) {
  if (!node) return [sum];
  sum = sum + node.value;
  output = helper(node, sum);
  return [sum, ...output];
}
