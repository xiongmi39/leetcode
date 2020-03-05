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
 	let pB = headB;
 	let pA = headA;
 	while(pA !== pB){
 		// pB = pB ? pB.next : headA;
 		// pA = pA ? pA.next :headB;
 		if(pB == null){
 			pB = headA;
 		}else{
 			pB = pB.next;
 		}
 		if(pA == null){
 			pA = headB;
 		}else{
 			pA = pA.next;
 		}
 	}
 	return pA;
 };

 let testcase = getIntersectionNode();
 console.log(testcase);
 export default getIntersectionNode;