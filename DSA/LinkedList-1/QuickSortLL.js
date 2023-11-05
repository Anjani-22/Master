import LinkedList from "./LinkedListClass";

function quickSort(head) {
  if (!head) {
    return;
  }
  let pivot = head;

  let beforeLL = new LinkedList();
  let afterLL = new LinkedList();

  let beforeCurr;
  let afterCurr;

  let current = head;

  while (current) {
    if (current.data < pivot.data) {
      if (!beforeCurr) {
        beforeLL.head = current;
        beforeCurr = beforeLL.head;
      }
      beforeCurr.next = current;
      beforeCurr = beforeCurr.next;
    } else {
      if (!afterCurr) {
        afterLL.head = current;
        afterCurr = afterLL.head;
      }
      afterCurr.next = current;
      afterCurr = afterCurr.next;
    }
  }
  quickSort(beforeLL.head);
  quickSort(afterLL.head);

  beforeCurr.next = pivot;
  pivot.next = afterCurr;
}

let l1 = new LinkedList();
l1.append(3);
l1.append(6);
l1.append(2);
l1.append(4);
l1.append(0);
l1.append(5);
l1.append(1);

l1.print();

quickSort(l1.head);
console.log("........................");
l1.print();
