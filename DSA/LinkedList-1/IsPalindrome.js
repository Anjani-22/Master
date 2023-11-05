function isPalindrom(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //if we had multiple files that needs to be re-used then what will main.js in pkg json

  //reverse seconf half
  let current = slow;
  let prev = null;
  while (current) {
    let temp = current.next;

    current.next = prev;

    prev = current;
    current = temp;
  }

  let firstHalf = head;
  let secondHalf = prev;

  while (secondHalf) {
    if (firstHalf.data != secondHalf.data) return false;

    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  return true;
}
