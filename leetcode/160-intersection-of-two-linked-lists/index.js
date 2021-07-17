/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  const visited = new Set();
  
  while (headA) {
    visited.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (visited.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }
}