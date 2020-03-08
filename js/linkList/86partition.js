/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
   import {ListNode } from '../linkList/ListNode'
import {linkTool } from '../linkList/linkTool'
var partition = function(head, x) {
	if(!head){
		return head;
	}
	let dummy = new ListNode(0);
	dummy.next = head;
	let min = dummy;
	while(min&& min.next){
		if(min.next.val >= x){
			break;
		}
		min = min.next;
	}
	let left = min;
	let right = min.next;
	let dymright = right;
	min.next = null;	
	if(left == null){
		return right;
	}
	if(right == null){
		return dummy.next;
	}
	while(right && right.next){
		if(right.next.val < x){
			left.next = right.next;
			left = left.next;
			right.next = right.next.next;
		}else{
			right = right.next;
		}
		
	}
	left.next = dymright;
	return dummy.next;
};

let tool = new linkTool();
let head = tool.arrToLinkList([3,1,2]);
let testcase = partition(head,3);
console.log(testcase);
export default partition;