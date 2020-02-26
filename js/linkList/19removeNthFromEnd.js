/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
   import {ListNode } from '../linkList/ListNode'
import {linkTool } from '../linkList/linkTool'
var removeNthFromEnd = function(head, n) {
	let preHead = new ListNode(0);
	preHead.next = head;
	let l = preHead;
	let r = preHead;
	let countl = 0;
	let countr = 0;
	while(r !== null){
		if(countr - countl <= n){
			r = r.next;
			countr++;
		}else{
			r = r.next;
			l = l.next;
			countl++;
			countr++;
		}
	}
	l.next = l.next.next;	
	return preHead.next;
};

let tool = new linkTool();
let head = tool.arrToLinkList([1,2]);
let testcase = removeNthFromEnd(head,2);
console.log(testcase);
export default removeNthFromEnd;