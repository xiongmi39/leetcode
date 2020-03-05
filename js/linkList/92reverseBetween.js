/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
    import {ListNode } from '../linkList/ListNode'
import {linkTool } from '../linkList/linkTool'
var reverseBetween = function(head, m, n) {
	if(!head){
		return head;
	}
	let dummy = new ListNode(0);
	dummy.next = head;
	let pre = dummy;
	let right = dummy;
	while(n>0){
		if(m>1){
			pre = pre.next;
			m--;
		}
		right = right.next;
		n--;
	}
	let left = pre.next;
	while(pre.next !== right){
		pre.next = left.next;
		let tmp = right.next;
		right.next = left;
		left.next = tmp;
		left = pre.next;
	}
	return dummy.next;
};

let tool = new linkTool();
let head = tool.arrToLinkList([1,2,3,4,5]);
let testcase = reverseBetween(head,2,4);
console.log(testcase);
export default reverseBetween;