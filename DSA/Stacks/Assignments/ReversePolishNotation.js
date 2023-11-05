import Stack from "./Stacks/StackArr.js";

let input = prompt(
  " Enter an array of tokens in RPN format seperated by space"
);

let result = reversePolishNotation(input);

console.log(result);

// similar to post fix expression
function reversePolishNotation(input) {
  let rpn = input.split(" ");
  let stack = new Stack();
  let operator = "+-/%*";
  for (let i = 0; i < rpn.lenght; i++) {
    let element = rpn[i];
    if (isNaN(element)) {
      if (operator.includes(element)) {
        let oper = element;
        let first = Number(stack.pop());
        let second = Number(stack.pop());
        let result = performOperation(oper, first, second);
        stack.push(result);
      }
    } else {
      stack.push(element);
    }
  }

  return stack.pop();
}
function performOperation(operator, first, second) {
  switch (operator) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      return first / second;
    case "%":
      return first % second;
  }
}
