class QueueArr {
  constructor() {
    this.item = [];
  }
  idEmpty() {
    return this.item.length === 0;
  }
  enqueue(data) {
    this.item.push(data);
  }
  dequeue() {
    if (this.isEmpty()) return "Under Flow";
    else this.item.shift();
  }
  peek() {
    if (this.isEmpty()) return "Under Flow";
    else return this.item[0];
  }
  size() {
    return this.item.length;
  }
  print() {
    this.item.forEach(console.log(`  ${x}`));
  }
}

const queue = new QueueArr();

// Enqueue elements
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// Dequeue the front element
queue.dequeue();

// Peek at the front element
const frontElement = queue.peek();

// Check if the queue is empty
const isEmpty = queue.isEmpty();

console.log("Front element:", frontElement); // Should print "Front element: 2"
console.log("Is the queue empty?", isEmpty);

module.exports = QueueArr;
