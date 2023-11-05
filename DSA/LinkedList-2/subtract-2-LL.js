import LinkedList from "../LinkedList-1/LinkedListClass";
import reverse_K_nodes from "../LinkedList-1/LL-Reverse-K-nodes";
function subtract_from_2_LL(list1, list2) {
  let result = new LinkedList();

  let current1 = list1.head;
  let current2 = list2.head;
  let borrow = 0;
  let res_len = 0;

  while (current1 || current2) {
    let val1 = current1 ? current1.data : 0;
    let val2 = current2 ? current2.data : 0;

    let diff = val1 - val2 - borrow;
    borrow = 0;
    if (diff < 0) {
      diff += 10;
      borrow = 1;
    }

    if (current1) current1 = current1.next;
    if (current1) current2 = current2.next;

    result.append(diff);
    res_len++;
  }

  //   if (borrow) {
  //     diff = Math.pow(10, res_len) - diff;

  //     while (diff) {}
  //   }Complete this code when answer should be negative like 16-18 = -2;

  result.head = reverse_K_nodes(result);
  return result.head;
}

let list1 = new LinkedList();
list1.append("5");
list1.append("4"); //54 in reverse, actual 45;

list1.print();

let list2 = new LinkedList();
list1.append("3");
list1.append("1"); //54 in reverse, actual 45;

list1.print();

console.log("________________");

let result = subtract_from_2_LL(list1, list2);

result.print();
