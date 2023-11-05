//enque at end(same), deque change, push to other helperstack
const { StackLL } = require("./../Stacks/StackLL");

class QueueUsingStack {
  constructor() {
    this.mainStack = new StackLL();
    this.helperStack = new StackLL();
  }

  enqueue(x) {
    this.mainStack.push(x);
  }
  dequeue() {
    if (this.helperStack.isEmpty() && this.mainStack.isEmpty())
      return "Queue is Empty";
    while (!this.mainStack.isEmpty()) {
      this.helperStack.push(this.mainStack.pop());
    }
    return this.helperStack.pop();
  }
  peek() {
    //front
    if (this.helperStack.isEmpty() && this.mainStack.isEmpty())
      return "Queue is Empty";
    while (!this.mainStack.isEmpty()) {
      this.helperStack.push(this.mainStack.pop());
    }

    return this.helperStack.top.data;
  }

  isEmpty() {
    return this.helperStack.isEmpty() && this.mainStack.isEmpty();
  }

  print() {
    if (this.helperStack.isEmpty() && this.mainStack.isEmpty())
      return "Queue is Empty";
    while (!this.mainStack.isEmpty()) {
      this.helperStack.push(this.mainStack.pop());
    }

    this.helperStack.print();
  }

  size() {
    return this.mainStack.size() + this.helperStack.size();
  }
}
