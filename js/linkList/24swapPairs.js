/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
import {ListNode } from '../linkList/ListNode'
import {linkTool } from '../linkList/linkTool'
// var swapPairs = function(head) {
// 	if(head == null){
// 		return head;
// 	}
// 	let preHead = new ListNode(0);
// 	let pre = preHead;
// 	let left = head;
// 	let right = left.next;
// 	pre.next = left;
// 	while(left !== null && left.next !== null){
// 		right = left.next;
// 		let tmp = right.next;
// 		pre.next = right;
// 		right.next = left;
// 		left.next = tmp;
// 		pre = left;
// 		left = tmp;
// 	} 
// 	return preHead.next;
// };


var swapPairs = function(head) {
	return reverse(head);
	function reverse(head){
		if(head == null|| head.next == null){
			return head;
		}
		let pre = reverse(head.next.next);
		head.next.next = head;
		let tmp = head.next;
		head.next = pre;
		return tmp;
	}
};


let tool = new linkTool();
let head = tool.arrToLinkList([1,2,3,4]);
let testcase = swapPairs(head);
console.log(testcase);
export default swapPairs;