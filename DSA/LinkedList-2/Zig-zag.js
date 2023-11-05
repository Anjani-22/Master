import LinkedList from "../LinkedList-1/LinkedListClass";

function zig_Zag() {
  let input = prompt("Enter a list of nums seprated by space");
  let nums = input.split(" ").map(Number);

  let l = new LinkedList();
  nums.forEach((num) => l.append(num)); //what if instead of "l", I had used directly "LinkedList" that is written after import.

  count = 0;

  let current = l.head;

  while (current) {
    if (count % 2 == 0 && current.data > current.next.data) {
      let temp = current.data;
      current.data = current.next.data;
      current.next.data = temp;
    } else if (count % 2 != 0 && current.data < current.next.data) {
      let temp = current.data;
      current.data = current.next.data;
      current.next.data = temp;
    }

    count++;
    current = current.next;
  }
  l.print();
}
