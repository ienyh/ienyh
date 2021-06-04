
// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}


/**
 * 快慢指针法
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) return false;
  let quick = head.next, slow = head;
  while (slow !== quick) {
    slow = slow.next;
    if (!slow.next || !quick.next.next) return false;
    quick = quick.next.next;
  }
  return true;
};