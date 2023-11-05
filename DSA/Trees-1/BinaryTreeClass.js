class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeWithDistinctElements {
  constructor() {
    this.root = null;
  }

  insert(x) {
    this.root = recusiveInsert(this.root, x);
  }
  recursiveInsert(node, data) {
    if (!node) {
      return new BinaryTreeNode(data);
    } else if (data < node.value) {
      node.left = this.recursiveInsert(node.left, data);
    } else if (data < node.value) {
      node.right = this.recursiveInsert(node.right, data);
    }

    return node;
  }

  search(x) {
    return this.recursiveSearch(this.root, x);
  }
  recursiveSearch(searchData, node) {
    if (node.value === searchData) return true;
    else if (searchData < node.value)
      return this.recursiveSearch(searchData, node.left);
    else if (searchData > node.value)
      return this.recursiveSearch(searchData, node.right);
    else if (!node) return false;
  }

  delete(x) {
    return this.recursiveDelete(data, this.root);
  }

  recursiveDelete(data, node) {
    if (!node) return null;
    if (data < node.value) node.left = this.recursiveDelete(data, node.left);
    else if (data > node.value)
      node.right = this.recursiveDelete(data, node.right);
    else {
      if (!node.left) return node.right;
      else if (!node.right) return node.left;
      else {
        node.value = minValue(node.right, data);
        node.right = this.recursiveDelete(node.value, node.right);
      } //innner else
    } //outer else
    return node;
  } //method

  minValue(minValue, node) {
    while (node.left) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }

  preOrder() {
    this.recursivePreOrder(this.root);
  }
  recursivePreOrder(node) {
    //+LR
    if (node) {
      process.stdout.write(`  ${node.value}`);
      this.recursivePreOrder(node.left);
      this.recursivePreOrder(node.right);
    }
  }
  postOrder() {
    this.recursivePostOrder(this.root);
  }
  recursivePreOrder(node) {
    //LR+
    if (node) {
      this.recursivePreOrder(node.left);
      this.recursivePreOrder(node.right);
      process.stdout.write(`  ${node.value}`);
    }
  }
  inOrder() {
    this.recursiveInOrder(this.root);
  }
  recursiveInOrder(node) {
    //L+R
    if (node) {
      this.recursiveInOrder(node.left);
      process.stdout.write(`  ${node.value}`);
      this.recursiveInOrder(node.right);
    }
  }
}

const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

// Perform operations
tree.inOrder(); // In-order traversal
tree.preOrder(); // Pre-order traversal
tree.postOrder(); // Post-order traversal

console.log(tree.search(3)); // Search for a node
tree.delete(3); // Delete a node
tree.inOrder(); // In-order traversal after deletion
