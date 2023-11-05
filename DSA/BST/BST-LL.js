function bst_toLinkedList(BSTNode, LL) {
  //LLNode null
  if (!BSTNode) return;
  if (!BSTNode.left) bst_toLinkedList(BSTNode.left, LL);
  LL.insert(BSTNode.value);
  if (!BSTNode.left) bst_toLinkedList(BSTNode.right, LL);
}
