/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (head === null) return;
  if (head.next === null) return;

  const getLastNode = node => {
    while(node.next) {
      node = node.next;
    }

    return node;
  }

  const getNode = (node, nextNode) => {
    while(node.next !== nextNode) {
      node = node.next;
    }

    return node;
  }

  let current = head;
  let next = current.next;
  let lastNode = getLastNode(next);
  while(lastNode !== next && lastNode !== current && current) {
    current.next = lastNode;
    lastNode.next = next;
    lastNode = getNode(next, lastNode);
    lastNode.next = null;
    current = next;
    next = current.next;
  }
};