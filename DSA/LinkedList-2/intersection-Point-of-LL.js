function intersectionPointOfLL(list1, list2) {
  let current = list1.head;
  let count1 = 0;
  while (current !== null) {
    current = current.next;
    ++count1;
  }

  current = list2.head;
  let count2 = 0;
  while (current !== null) {
    current = current.next;
    ++count2;
  }

  let diff = Math.abs(count1 - count2);
  let current1;
  let current2;
  if (count1 > count2) {
    current1 = list1.head;
    while (diff) {
      current1 = current1.next;
      diff--;
    }
  } else {
    current2 = list2.head;
    while (diff) {
      current2 = current2.next;
      diff--;
    }
  }
  while ((current1 != null || current2 != null) && current1 != current2) {
    current1 = current1.next;
    current2 = current2.next;
  }

  if (current1 == null || current2 == null) {
    return "No intersection point";
  }
  return current1.head;
}
