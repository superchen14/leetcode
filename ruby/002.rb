# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
  result = nil
  result_tail = nil
  node_on_l1 = l1
  node_on_l2 = l2

  overflow = 0
  while !node_on_l1.nil? || !node_on_l2.nil? do
    sum = 0
    if node_on_l1.nil?
      sum = node_on_l2.val
    elsif node_on_l2.nil?
      sum = node_on_l1.val
    else
      sum = node_on_l1.val + node_on_l2.val
    end
    sum += overflow

    if sum >= 10
      overflow = 1
      sum -= 10
    else
      overflow = 0
    end

    if result.nil?
      result = ListNode.new(sum)
      result_tail = result
    else
      result_tail.next = ListNode.new(sum)
      result_tail = result_tail.next
    end

    node_on_l1 = node_on_l1.next unless node_on_l1.nil?
    node_on_l2 = node_on_l2.next unless node_on_l2.nil?
  end

  if overflow == 1
    result_tail.next = ListNode.new(overflow)
  end

  result
end