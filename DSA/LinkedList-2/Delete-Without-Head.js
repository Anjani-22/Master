import LinkedList from "../LinkedList-1/LinkedListClass";

let input = prompt(
  "Enter list of numbers followed by num to deleted\n (Example: 1 2 3 1 here 1 is no to delete)"
);

let nums = input.split(" ").map(Number);
let numToDelete = nums.pop();

let l = new LinkedList();
nums.forEach(l.append);

let current = l.head;
let nodeToDelete = null;
while (current) {
  if ((current.data = numToDelete)) {
    nodeToDelete = current;
    break;
  }
  current = current.next;
}
nodeDeletionWithoutHead(nodeToDelete);

l.print();
function nodeDeletionWithoutHead(nodeToDelete) {
  if (nodeToDelete === null || nodeToDelete.next === null) {
    // we are not deleting if element is last because to delete without head we are just updateing nodeToDelete with the data of next node and removing the next node, which is not possible if nodetodelte.next == null
    return;
  }

  nodeToDelete.data = nodeToDelete.next.data;
  nodeToDelete.next = nodeToDelete.next.next;
}
