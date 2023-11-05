function lca(root, value1, value2) {
  let path1 = searchPathBackTrack(value1, root, []);
  let path2 = searchPathBackTrack(value2, root, []);
  let i = 0;

  if (!path1 || !path2) return -1; //no lca found

  while (path1[i] !== path2[2]) i++;
  return i;
}

function searchPathBackTrack(value, node, path) {
  if (path[0]) return path; //elemnt found if path[0] has element
  if (!node) return;
  if (node.value === value) return path.push[node.value];
  searchPathBackTrack(value, node.left, path);
  searchPathBackTrack(value, node.right, path);
  return path.push(node.value);
}
