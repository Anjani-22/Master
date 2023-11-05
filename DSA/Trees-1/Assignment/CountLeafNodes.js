function countleafNodes(node) {
  if (!node) return 0;
  let count = [0];
  helperCountNodes(node, count);
  return count[0];
}

function helperCountNodes(node, count) {
  if (!node.left && !node.right) {
    count[0] += 1;
    return;
  }

  helperCountNodes(node.left, count);
  helperCountNodes(node.right, count);
}
