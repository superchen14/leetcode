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
def delete_duplicates(head)
  return if head.nil?

  result = nil
  result_current = nil

  current_value = head.val
  current_count = 0
  current = head

  while !current.nil? do
    if current.val == current_value
      current_count += 1
    else
      if current_count == 1
        if result.nil?
          result = ListNode.new(current_value)
          result_current = result
        else
          result_current.next = ListNode.new(current_value)
          result_current = result_current.next 
        end
      end
      current_value = current.val
      current_count = 1
    end

    current = current.next
  end

  if current_count == 1
    if result.nil?
      result = ListNode.new(current_value)
      result_current = result
    else
      result_current.next = ListNode.new(current_value)
      result_current = result_current.next 
    end
  end

  result
end