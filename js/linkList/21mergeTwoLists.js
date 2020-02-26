/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
   import {ListNode } from '../linkList/ListNode'
import {linkTool } from '../linkList/linkTool'
var mergeTwoLists = function(l1, l2) {
	let head = new ListNode(0);
	let preHead = head;
	while(l1 !== null || l2 !== null){
		if(l1 == null){
			preHead.next = l2;
			preHead = preHead.next;
			l2 = l2.next;
		}else if(l2 == null){
			preHead.next = l1;
			preHead = preHead.next;
			l1 = l1.next;
		}else{
			if(l1.val == l2.val){
				preHead.next = l1;
				l1 = l1.next;
				preHead = preHead.next;
				preHead.next = l2;
				l2 = l2.next;
				preHead = preHead.next;

			}
			else if(l1.val < l2.val){
				preHead.next = l1;
				preHead = preHead.next;
				l1= l1.next;
			}else {
				preHead.next = l2;
				preHead = preHead.next;
				l2 = l2.next;
			}
		}
	}
	return head.next;
};

let tool = new linkTool();
let l1 = tool.arrToLinkList([1,2,4]);
let l2 = tool.arrToLinkList([1,3,4]);
let testcase = mergeTwoLists(l1,l2);
console.log(testcase);
export default mergeTwoLists;