//import Stack from "./Stacks/StackLL.js";

const Stack = require("../StackLL");
function nextGreaterElement(arr) {
  console.log(arr);
  let nge = new Array(arr.length).fill(-1);
  let stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    while (!stack.isEmpty() && element > stack.peek()) {
      let top = stack.pop();
      let index = arr.indexOf(top);

      while (nge[index] != -1) {
        index = arr.indexOf(top, index);
      }

      nge[index] = element;
    }
    stack.push(element);
  }

  while (!stack.isEmpty()) stack.pop();

  console.log(nge);
}
