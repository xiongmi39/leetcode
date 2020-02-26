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
var insertionSortList = function(head) {
	if(head === null){ return head}
	let cur = head;
	let preHead = new ListNode(0);
	let pre = preHead;
	let next = null;
	while(cur){
		next = cur.next;
		while(pre.next && pre.next.val < cur.val){
			pre = pre.next;
		}
		cur.next = pre.next;
		pre.next = cur;
		pre = preHead;
		cur = next;
		
	}
	return preHead.next;
};

let tool = new linkTool();
let head = tool.arrToLinkList([4,2,1,3]);
let testcase = insertionSortList(head);
console.log(testcase);
export default insertionSortList;