function hieghtBT(node) {
  if (!node) return 0;
  let LH = hieghtBT(node.left);
  let RH = hieghtBT(node.right);

  return Math.max(LH, RH) + 1;
}
