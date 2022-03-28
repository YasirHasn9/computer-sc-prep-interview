/*
we need to initialize 3 pointers
1. pervious because its a singly lined list, node don't have references to previous nodes
2. cur to see where are at the moment
3. temp to hold the next node before we change the reference
 */

function reverseList(head) {
  let prev = null;
  let cur = head;
  let tmp = null;
  while (cur) {
    // As I explained earlier, I save the next pointer in the tmp variable.
    tmp = cur.next;
    // Then I reverse the pointer of the current node to its previous node.
    cur.next = prev;
    //  The previous node becomes the node we are currently at.
    prev = cur;
    // And the current nodes becomes the
    cur = temp;
  }
  return prev;
}
function recursiveLinkedList(head) {
  if (!head || !head.next) return head;

  let temHead = recursiveLinkedList(head.next);
  head.next.next = head;
  head.next = null;

  return temHead;
}
