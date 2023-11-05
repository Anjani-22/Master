import LinkedList from "./LinkedListClass.js";

function mergeSortedLL(head1, head2) {
  const head = null;
  let current = head;

  let current1 = head1;
  let current2 = head2;

  if (current1.data < current2.data) {
    current = current1;
    current1 = current1.next;
  } else {
    current = current2;
    current2 = current2.next;
  }

  while (current1.next && current2.next) {
    if (current1.data < current2.data) {
      current.next = current1.next;
      current = current.next;
      current1 = current1.next;
    } else {
      current.next = current2.next;
      current = current.next;
      current2 = current2.next;
    }
  }

  while (current1.next) {
    current.next = current1.next;
    current = current.next;
    current1 = current1.next;
  }

  while (current2.next) {
    current.next = current2.next;
    current = current.next;
    current2 = current2.next;
  }

  return current;
}
