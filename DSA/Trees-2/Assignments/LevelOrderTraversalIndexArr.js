const readLine = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question(
  "Enter node size, node elements, then its children seperated by space",
  levelOrderTraversal
);

function levelOrderTraversal(input) {
  const nums = input.split(" ").map(Number);

  const size = nums[0];
  const parent = nums.slice(1, size + 1);
  const children = nums.slice(size + 1, nums.length);
  const tree = new Array(size).fill(-1);

  for (let i = 0, j = 0; i < size; i++, j++) {
    let node = parent[i];

    let left = children[j];
    let right = children[j++];

    if (tree.includes(node)) {
      let p = tree.indexOf(node);

      /*if (left != -1)*/ nums[2 * p + 1] = left;
      /*if (right != -1)*/ nums[2 * p + 2] = right;
    } else {
      if (left != -1 && nums.includes(left)) {
        let childindex = nums.indexOf(left);
        let p = (childindex - 1) / 2;

        if (p < 0) tree.unshift(p);

        nums[p] = node;
      } else if (right != -1 && nums.includes(right)) {
        let childindex = nums.indexOf(right);
        let p = (childindex - 2) / 2;

        if (p < 0) tree.unshift(p);

        nums[p] = node;
      } else if (tree[0] === -1) {
        let p = 0;
        tree[p] = node;
        /*if (left != -1)*/ nums[2 * p + 1] = left;
        /*if (left != -1)*/ nums[2 * p + 2] = right;
      } else {
        console.log("Invalid Input");
      } //inner else
    } //outer else
  } //for

  let map = new Map();
  map = levelOrderTraversal((min = 0), (max = 0), map, (index = 0), tree);

  map.forEach((key, value) => {
    console.log(`${key} : ${value}`);
  });

  //   const queue = [];
  //   const root = tree[0];
  //   queue.push(root);
  //   const levelOrderTraversalstr = "";
  //   while (queue.length !== 0) {
  //     let currentNode = queue.shift();
  //     let index = tree.indexOf(currentNode);
  //     let leftChild = tree[2 * index + 1];
  //     let rightChild = tree[2 * index + 2];

  //     if (left !== -1) queue.push(leftChild);
  //     if (left !== -1) queue.push(rightChild);

  //     levelOrderTraversalstr += currentNode + " "; //How to print each level order in different line
  //   }
  //return levelOrderTraversalstr;
}

levelOrderTraversal(min, max, map, index, tree);
{
  map.set(`Level ${index} `, []);
  for (let i = min; i <= max; i++) {
    map.get(`Level + ${index}`).push(tree[i]);
  }

  if (max === tree.length) return map;

  return levelOrderTraversal(2 * min + 1, 2 * max + 2, map, index + 1, tree);
}
