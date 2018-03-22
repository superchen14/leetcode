/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const mergedArray = [];
  for (let i = 0; i < lists.length; ++i) {
    let list = lists[i];
    while(list) {
      mergedArray.push(list.val);
      list = list.next;
    }
  }

  mergedArray.sort((a, b) => a - b);
  let mergedList = null;
  let current = null;
  mergedArray.forEach(function(value){
    if (mergedList === null) {
      mergedList = new ListNode(value);
      current = mergedList;
    } else {
      var newNode = new ListNode(value);
      current.next = newNode;
      current = newNode;
    }
  })

  return mergedList;
};