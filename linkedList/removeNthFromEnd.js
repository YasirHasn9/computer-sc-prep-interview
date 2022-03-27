// https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/603/
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// input: head = [1,2,3,4,5], n = 2
// output: head = [1,2,3,5]
// explanation we count 2 from the end, and since 4 is where we end up, then it's the one we
// should be deleted

// Thinking out loud
// how could we reach the n node from the end?
// can we create a counter that start at 1 and increase as it goes in the tree?
// in that case we can find the node with count - n
// OR
// create 2 pointers: slow and fast
// fast will stop when it reached n steps
// slow will be behind fast n steps, so we are gonna move fast and slow to next node
// fast will stop when it reached the end and fast will stop behind the node we wanted to delete

//  * Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function removeNthFromEnd(head, n) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;

  let slow = dummyHead;
  let fast = dummyHead;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return dummyHead.next;
}
