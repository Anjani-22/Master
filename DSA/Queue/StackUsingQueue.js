const Queue = require("./QueueArr");

class Stack {
  constructor() {
    this.mainQueue = new Queue();
    this.helperQueue = new Queue();
    this.size = 0;
    this.top;
  }
  push(element) {
    this.mainQueue.enqueue(element);
    this.top = element;
    this.size++;
  }
  pop() {
    if (this.isEmpty()) {
      return "Queue Empty";
    } else {
      while (!this.mainQueue.size() == 1) {
        this.helperQueue.enqueue(this.mainQueue.dequeue());
      }
      const poppedElement = this.mainQueue.dequeue();
      while (!this.helperQueue.isEmpty()) {
        let dequedElement = this.helperQueue.dequeue();
        this.mainQueue.enqueue(dequedElement);
      }
      this.top = dequedElement;
    }
    return poppedElement;
  }

  isEmpty() {
    return this.size === 0;
  }
}
