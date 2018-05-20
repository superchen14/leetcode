/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) return null;
  
  let lengthA = 0;
  let tempA = headA;
  while(tempA) { ++lengthA; tempA = tempA.next; }

  let lengthB = 0;
  let tempB = headB;
  while(tempB) { ++lengthB; tempB = tempB.next; }

  if (lengthA > lengthB) {
    let delta = lengthA - lengthB;
    while(delta > 0) { headA = headA.next; --delta; }
  } else {
    let delta = lengthB - lengthA;
    while(delta > 0) { headB = headB.next; --delta; }
  }

  while(headA !== null && headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
};