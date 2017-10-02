/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k === 1) return head;

  var current = head;
  var head = null;
  var partialHead = null;
  var partialTail = null;
  var lastTail = null;
  var num = 0;
  while(current) {
    var temp = current;
    current = current.next;
    temp.next = null;
    if (partialHead === null) {
      partialHead = temp;
    } else {
      temp.next = partialHead;
      partialHead = temp;
    }

    if (partialTail === null) partialTail = temp;

    ++num;
    if (num === k) {
      if (head === null) head = partialHead;
      num = 0;
      if (lastTail !== null) lastTail.next = partialHead;
      lastTail = partialTail;
      partialHead = null;
      partialTail = null;
    }
  }

  // if something left, we need to reverse left partial list again.
  if (partialHead !== null) {
    var current = partialHead.next;
    partialHead.next = null;
    while(current !== null) {
      var temp = current;
      current = current.next;
      temp.next = partialHead;
      partialHead = temp;
    }
  }

  if (head === null) head = partialHead;
  if (lastTail !== null) lastTail.next = partialHead;

  return head;
};