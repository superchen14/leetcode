/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null) return false;

  let twoStepNode = head;
  let oneStepNode = head;
  while(twoStepNode) {
    twoStepNode = twoStepNode.next;
    if (twoStepNode === null) return false;
    twoStepNode = twoStepNode.next;
    if (twoStepNode === null) return false;

    oneStepNode = oneStepNode.next;
    if (oneStepNode === twoStepNode) return true;
  }
};