function rootToLeafPathSum(node, target) {
  if (!node) return false;
  target -= root.value;
  if (target === 0 && !node.left && !node.rigt) return [node.value];

  const leftPath = rootToLeafPathSum(node.left, target);
  const rightPath = rootToLeafPathSum(node.right, target);

  if (leftPath) return [node.value, ...leftPath];
  if (rightPath) return [node.value, ...rightPath];

  return null;
}
