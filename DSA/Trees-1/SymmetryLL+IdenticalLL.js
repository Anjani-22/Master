function symmetry(node) {
  if (!node.left && !node.right) return true;

  return identical(node.left, node.right);
}

function identical(node1, node2) {
  if (!node.left && !node.right) return true;

  return (
    node1.value === node2.value &&
    identical(node1.left, node2.left) &&
    identical(node1.right, node2.right)
  );
}
