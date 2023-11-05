import Stack from "./StackArr.js";

function stack_Sort(originalStack) {
  let helperStack = new Stack();

  while (!originalStack.isEmpty()) {
    let temp = originalStack.pop();

    while (!helperStack.isEmpty() && helperStack.peek() > temp) {
      //largest element on top of helper stack should be there
      originalStack.push(helperStack.pop());
    }

    helperStack.push(temp);
  }

  //pushing all the elements from helper stack to the empty stack of original stack, so that it has elements in increasins order

  while (!helperStack.isEmpty()) {
    originalStack.push(helperStack.pop());
  }
}

let stack = new Stack();

stack.push(5);
stack.push(3);
stack.push(2);
stack.push(6);
stack.push(10);
console.log(`Original Stack:  ${stack.printStack()}`);
stack_Sort(stack);

console.log("************************");

stack_Sort(stack);

console.log(`Sorted Stack:  ${stack.printStack()}`);
