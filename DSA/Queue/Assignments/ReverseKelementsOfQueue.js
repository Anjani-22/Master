const Queue = require("..QueueArr/");
const Stack = require("../../Stacks/StackArr");
const queue = new Queue();
let input = prompt("Enter space seperated integers");
let inputK = prompt("enter no of elements to be reversed");
const K = Number(inputK.trim());
input
  .split(" ")
  .map(Number)
  .forEach((x) => queue.enque(x));

function reverseKelements(queue, K) {
  const stack = new Stack();
  while (K > 0) {
    stack.push(queue.dequeue());
    K--;
  }
  const helperQueue = new Queue();
  while (!queue.isEmpty()) {
    helperQueue.enqueue(queue.dequeue());
  }

  while (!stack.isEmpty()) {
    queue.enqueue(stack.pop());
  }

  while (!helperQueue.isEmpty()) {
    queue.enqueue(helperQueue.dequeue());
  }

  queue.print();
}
