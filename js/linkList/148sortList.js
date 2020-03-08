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
var sortList = function(head) {
	if(!head){
		return head;
	}
	return sortLink(head);
	function sortLink(head){
		if(!head.next){
			return head;
		}
		let dummy = head;
		let slow = head;
		let fast = head.next;
		while(fast&&fast.next){
			fast = fast.next.next;
			slow = slow.next;
		}
		let left = sortLink(slow.next);
		slow.next = null;
		let right = sortLink(dummy);
		let ans = new ListNode(0);
		let dummyans = ans;
		while(left || right){
			if(left == null){
				ans.next = right;
				break;
			}
			if(right == null){
				ans.next = left;
				break;
			}
			if(left.val <= right.val){
				ans.next = left;
				left = left.next;
			}else{
				ans.next = right;
				right = right.next;
			}
			ans = ans.next;
		}
		return dummyans.next;
	}
};

let tool = new linkTool();
let head = tool.arrToLinkList([4,2,1,3]);
let testcase = sortList(head);
console.log(testcase);
export default sortList