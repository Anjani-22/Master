function lcaInBST(root, v1, v2) {
  if (!root) return null;

  if (v1 < root.value && v2 < root.value) return lca(root.left, v1, v2);
  else if (v1 > root.value && v2 > root.value) return lca(root.left, v1, v2);
  else return root.value;
}
