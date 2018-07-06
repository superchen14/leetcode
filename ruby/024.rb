# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def swap_pairs(head)
  return head if head.nil?

  first = head.next
  return head if first.nil?

  second = swap_pairs(first.next)

  first.next = head
  head.next = second

  first
end