//import { Node } from "./LinkedList-1/LinkedListClass.js";

const { Node } = require("../LinkedList-1/LinkedListClass");
class StackLL {
  constructor() {
    this.top == null; //head
    this.size = 0;
  }
  push(element) {
    let newNode = new Node(element);
    if (this.isEmpty()) top = newNode;
    else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }
  pop() {
    if (!this.isEmpty()) return "Empty Stack";
    else {
      let temp = this.top.next;
      this.top.next = null;
      this.top = temp;
      this.size--;
    }
    peek();
    {
      if (!this.isEmpty()) return "Empty Stack";
      else return this.top.data;
    }
  }
  isEmpty() {
    return top === null;
  }

  print() {
    if (!this.isEmpty()) return "Empty Stack";
    let current = top;
    let str = "";
    while (current) {
      str = str + current.data + "\n";
      current = current.next;
    }
    console.log(str);
  }

  size() {
    return this.size;
  }
}

module.exports = StackLL;
