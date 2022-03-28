// https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/771/
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

class ListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

function mergeTwoLists(l1, l2) {
  //edge cases
  // in both of the trees are empty
  if (!l1 && !l1) return null;
  // create a dummy head
  const dummyHead = new ListNode();
  // create head to dummy head to have it as a reference
  let head = dummyHead;
  // while each of the list is not null
  while (l1 && l2) {
    // whichever value is less then its should our new head
    if (l1.value <= l2.value) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }

  // who ever runs faster then the other list should next of the head
  if (!l1) {
    head.next = l2;
  } else {
    head.next = l1;
  }

  return dummyHead.next;
}
