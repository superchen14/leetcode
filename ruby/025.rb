# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @param {Integer} k
# @return {ListNode}
def reverse_k_group(head, k)
  return head if head.nil?
  return head if k == 1

  result = head
  current = head
  while true do
    return head if current.nil?
    temp = k
    current_k = current
    values = []
    while temp > 0 do
      values.push(current_k.val)
      current_k = current_k.next
      break if current_k.nil?
      temp -= 1
    end
    return head if values.length < k

    values.reverse!
    temp = k
    while temp > 0 do
      current.val = values.shift
      current = current.next
      temp -= 1
    end
  end
end