/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  let temp = head;
  let i = 0;
  while(temp) {
    temp.index = i;
    i += 1;
    temp = temp.next;
  }

  list = [];
  temp = head;
  while(temp) {
    list.push(new RandomListNode(temp.label));
    temp = temp.next;
  }

  i = 0;
  while(i < list.length - 1) {
    list[i].next = list[i + 1];
    i += 1;
  }

  temp = head;
  i = 0;
  while(temp) {
    if (temp.random !== null) {
      list[i].random = list[temp.random.index];
    }
    temp = temp.next;
    i += 1;
  }

  return list.length === 0 ? null : list[0];
};