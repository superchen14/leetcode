/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null) return null;
  if (head.next === null) return null;

  let oneStepNode = head.next;
  let twoStepNode = head.next.next;
  if (twoStepNode === null) return null;
  while(oneStepNode !== twoStepNode) {
    oneStepNode = oneStepNode.next;
    twoStepNode = twoStepNode.next;
    if (twoStepNode === null) return null;
    twoStepNode = twoStepNode.next;
    if (twoStepNode === null) return null;
  }

  oneStepNode = head;
  while(oneStepNode !== twoStepNode) {
    oneStepNode = oneStepNode.next;
    twoStepNode = twoStepNode.next;
  }

  return oneStepNode;
};