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
var deleteDuplicates = function(head) {
	let dummy = new ListNode(0);
	dummy.next = head;
	let pre = dummy;
	while(pre.next){
		if(pre.next.next && pre.next.val == pre.next.next.val){
			let tmp = pre.next;
			while(tmp.next && tmp.val == tmp.next.val){
				tmp.next = tmp.next.next;
			}
			pre.next = tmp.next;
		}else{
			pre = pre.next;
		}
	}
	return dummy.next;
};

let tool = new linkTool();
let head = tool.arrToLinkList([1,2,3,3,4,4,5]);
let testcase = deleteDuplicates(head);
console.log(testcase);
export default deleteDuplicates;