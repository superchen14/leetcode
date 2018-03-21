/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let temp = n + 1;
  let nthNode = dummy;
  while(temp > 0) {
    nthNode = nthNode.next;
    --temp;
  }

  let dummyHead = dummy;
  while(nthNode !== null) {
    dummyHead = dummyHead.next;
    nthNode = nthNode.next;
  }

  dummyHead.next = dummyHead.next.next;
  return dummy.next;
};