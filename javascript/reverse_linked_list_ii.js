/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (m === n) return head;

  let dummy = {val: 0, next: head};
  let beforeM = dummy;
  while(m > 1) {
    beforeM = beforeM.next;
    --m;
  }
  let theM = beforeM.next;

  let theN = dummy;
  while(n > 0) {
    theN = theN.next;
    --n;
  }
  let afterN = theN.next;
  theN.next = null;

  while(theM) {
    let temp = theM;
    theM = theM.next;
    temp.next = afterN;
    afterN = temp;
  }
  beforeM.next = afterN;

  return dummy.next;
};