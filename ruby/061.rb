# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

# @param {ListNode} head
# @param {Integer} k
# @return {ListNode}
def rotate_right(head, k)
  return nil if head.nil?

  dummy_node = ListNode.new(0)
  dummy_node.next = head

  length = 0
  temp = dummy_node.next
  list_tail = temp
  while !temp.nil? do
    list_tail = temp
    length += 1
    temp = temp.next
  end

  k = k % length
  return head if k == 0

  k = length - k
  k_node = dummy_node
  while k > 0 do
    k_node = k_node.next
    k -= 1
  end

  list_tail.next = dummy_node.next
  dummy_node.next = k_node.next
  k_node.next = nil

  dummy_node.next
end