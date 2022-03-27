// https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/553/
/**
 * Write a function to delete a node in a singly-linked list.
 * You will not be given access to the head of the list, instead
 * you will be given access to the node to be deleted directly.
 * It is guaranteed that the node to be deleted is not a tail node in the list.
 */

//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }

// Thinking out loud
// sicne we cant loop over the list because we dont have an access to the head,
// so we are gonna override the value of the deleted node with the value of the next
// node
// 1. get the value of the next node
// 2. override the node value
// make the next of our node to be the the next of next

function deleteNode(node) {
  const holdNextNodeValue = node.next.val;
  node.val = holdNextNodeValue;
  node.next = node.next.next;
}
