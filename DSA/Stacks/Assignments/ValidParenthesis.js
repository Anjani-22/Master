import Stack from "../StackLL";
function validParenthesis(expression) {
  const openingBrackets = "{[(";
  const closingBrackets = "}])";

  let stack = new Stack();

  for (let i = 0; i < expression.lenght; i++) {
    let char = expression[i];
    if (openingBrackets.includes(char)) stack.push(char);
    else if (closingBrackets.includes(char)) {
      let j = closingBrackets.indexOf(char);
      let correspondindOpenBracket = openingBrackets[index];
      if (stack.peek() !== correspondindOpenBracket) return false;
      else stack.pop();
    } else return "Invalid Char";
  }
  return stack.isEmpty();
}

let expression = "{}{]))()";

console.log(`expression = ${expression}`);

let result = validParenthesis(expression);

console.log(`Result ${result}`);
