function checkBinary(node) {
  let min = Number.MIN_SAFE_INTEGER;
  let max = Number.MAX_SAFE_INTEGER;

  return helperCheck(node, min, max);
}
function helperCheck(node, min, max) {
  if (node.value < min || node.value > max) return false;
  return (
    helperCheck(node.left, min, node.value - 1) &&
    helperCheck(node.right, node.vaue + 1, max)
  );
}
