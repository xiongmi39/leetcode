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
//递归
// var reverseList = function(head) {
// 	return reverse(head);
// 	function reverse(head){
// 		if(head == null || head.next == null){
// 			return head;
// 		}
// 		let pre = reverse(head.next);
// 		head.next.next = head;
// 		head.next = null;
// 		return pre;
// 	}
// };

//迭代
var reverseList = function(head) {
	let pre = null;
	let cur = head;
	while(cur !== null){
		let tmp = cur.next;
		cur.next = pre;
		pre = cur;
		cur = tmp;
	}
	return pre;
};

let tool = new linkTool();
let head = tool.arrToLinkList([1,2,3,4,5]);
let testcase = reverseList(head);
console.log(testcase);
export default reverseList;