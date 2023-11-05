function identical(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;

  return (
    node1.value === node1.value &&
    identical(node1.left, node2.left) &&
    identical(node1.right, node2.right)
  );
}
