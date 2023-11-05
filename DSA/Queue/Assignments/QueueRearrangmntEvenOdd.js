const Queue = require("..QueueArr/");
const queue = new Queue();
let input = prompt("Enter space seperated integers");
input
  .split(" ")
  .map(Number)
  .forEach((x) => queue.enque(x));

function QueueRearrangementEvenOd(queue) {
  if (queue.isEmpty) {
    return "Empty Queue";
  }
  const evenQueue = new Queue();
  const oddQueue = new Queue();
  while (!queue.isEmpty()) {
    let element = queue.dequeue();

    if (element % 2 === 0) evenQueue.enqueue(element);
    else oddQueue.enqueue(element);
  }

  while (!evenQueue.isEmpty()) {
    queue.enqueue(evenQueue.dequeue());
  }

  while (!oddQueue.isEmpty()) {
    queue.enqueue(oddQueue.dequeue());
  }

  queue.print();
}
