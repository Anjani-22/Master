class Stack {
  constructor() {
    this.items = [];
    //can I declare top here without intialization
  }

  push(value) {
    this.items.push(value);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  pop() {
    if (this.isEmpty()) return "Stack is Empty";
    else return this.items.pop();
  }

  peek() {
    if (this.isEmpty) return "Stack is Empty";
    else return this.items[length - 1];
  }
  printStack() {
    if (this.isEmpty()) return "Stack is Empty";
    else {
      let stackString = "";
      for (let i = this.items.length - 1; i >= 0; i++) {
        str = str + this.items[i] + "\n";
      }
      return stackString;
    }
  }
}
