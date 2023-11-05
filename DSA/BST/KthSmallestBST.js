function kthSmallestBST(node, k) {
  if (k === 0) return node.value;
  if (!node) return;
  kthSmallest(node.left), k;
  k--;
  kthSmallest(node.right, k);
}
