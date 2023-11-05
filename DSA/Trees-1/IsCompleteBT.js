function isCompleteBT(node) {
  if (!node) {
    return true;
  }
  if (node.right) {
    if (!node.left) return false;
  }

  return isCompleteBT(node.left) && isCompleteBT(node.left);
}
