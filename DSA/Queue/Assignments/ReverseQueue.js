const Queue = require("..QueueArr/");
const Stack = require("../../Stacks/StackArr");
const queue = new Queue();
let input = prompt("Enter space seperated integers");
input
  .split(" ")
  .map(Number)
  .forEach((x) => queue.enque(x));

function reverseQueue(queue) {
  const stack = new Stack();

  while (!queue.isEmpty()) {
    stack.push(queue.deque());
  }

  return stack.print();
}

const output = reverseQueue(queue);
console.log(`Reversed Queue  ${output}`);
