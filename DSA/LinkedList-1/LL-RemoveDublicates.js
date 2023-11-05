import LinkedList from "./LinkedListClass.js";
function removeDublicates(head) {
  const linkedSet = new Set();
  console.log("inside rd");
  if (!head) {
    return "LinkedList Empty";
  }
  if (!head.next) {
    return head;
  }
  let prev = head;
  currentNode = head.next;
  linkedSet.add(prev.data);
  console.log("before while");
  while (currentNode) {
    console.log("inside");
    let data = currentNode.data;
    if (linkedSet.has(data)) {
      prev.next = currentNode.next;
      currentNode = currentNode.next;
    } else {
      linkedSet.add(data);
      prev = prev.next;
      currentNode = currentNode.next;
    }
  }
  console.log(linkedSet);
}
let l = new LinkedList();

l.append("B");
l.append("C");
l.append("A");
l.append("B");
l.append("C");
l.print();
console.log("before l.head.....................");
let head = l.head;
console.log("before reove dublicate function call.....................");

removeDublicates(head);
console.log(".....................");
l.print();
