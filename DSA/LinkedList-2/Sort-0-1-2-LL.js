import LinkedList from "../LinkedList-1/LinkedListClass";

let input = prompt("Enter string of 0,1,2 sepearaed by space");

let l = new LinkedList();
let nums = input
  .split(" ")
  .map(Number)
  .filter((x) => x === 0 || x === 1 || x === 2)
  .forEach((num) => l.append(num));

sort_0_1_2_LL(l.head);

//Sorting LL containing 0's, 1's, & 2's
function sort_0_1_2_LL(head) {
  l.print();

  let current = head;

  let count_0 = 0;
  let count_1 = 0;
  let count_2 = 0;

  while (current) {
    if (current.data == 0) count_0++;
    else if (current.data == 1) count_1++;
    else if (current.data == 2) count_2++;
    current = current.next;
  }

  console.log("***********************************");

  current = l.head;

  while (count_0) {
    current.data = 0;
    current = current.next;
    count_0--;
  }

  while (count_1) {
    current.data = 0;
    current = current.next;
    count_1--;
  }

  while (count_2) {
    current.data = 0;
    current = current.next;
    count_2--;
  }

  l.print;
}
