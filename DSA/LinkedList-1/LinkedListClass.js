class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    let newNode = new Node(data);
    newNode.next = null;
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print(head = this.head) {
    let current = head;
    while (current !== null) {
      console.log(current.data + " -> ");
      current = current.next;
    }
  }
}

module.exports = { LinkedList, Node };

// function slowFastPtr(slow, fast, k) {
//   //3,2,1,6,5,4,9,8,7

//   while (k) {
//     fast = fast.next;
//     k--;
//   }
//   slow = reverse(slow, fast);

//   slowFastPtr(slow, fast, k);
// }
// function reverse(slow, fast) {
//   let current = slow;
//   let prev = null;
//   while (current != fast) {
//     temp = current.next;
//     current.next = prev;

//     prev = current;
//     current = temp;
//   }
//   return;
// }
