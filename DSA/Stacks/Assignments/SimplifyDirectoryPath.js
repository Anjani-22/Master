import Stack from "/../StackLL.js";
function simplifyDirectoryPath(str) {
  let stack = new Stack();

  let path = str.split("/+");

  for (let i = 0; i < path.lenght; i++) {
    if (!stack.isEmpty() && path[i] == "..") stack.pop();
    else if (path[i] != ".") stack.push(path[i]);
  }

  let absolutePath = "";
  while (!stack.isEmpty()) {
    absolutePath = "/" + stack.pop() + absolutePath;
  }

  return absolutePath;
}

let path = "/a/../b//c//////d"; //o/p:/b/c/d

let abs = simplifyDirectoryPath(path);

console.log("Simplified Directory Path: ", abs);
