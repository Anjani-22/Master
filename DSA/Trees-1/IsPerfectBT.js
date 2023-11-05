function isPerfectBT(node) {
  if (node.left && !node.right) return false;
  if (node.right && !node.left) return false;

  if (!node.left && !node.right) return true;
  return isPerfectBT(node.left) && isPerfectBT(node.right);
}
