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
var addTwoNumbers = function(l1, l2) {
	let preHead = new ListNode(0);
	let head = preHead;
	//是否有进位
	let check = false;
	while(l1 || l2 || check){
		let sum = 0;
		if(l1 !== null){
			sum += l1.val;
			l1 = l1.next;
		}
		if(l2 !== null){
			sum += l2.val;
			l2 = l2.next;
		}
		if(check){
			sum++;
		}
		head.next = new ListNode(sum%10);
		head = head.next;
		if(sum >= 10){
			check = true;
		}else{
			check = false;
		}
	}
	return preHead.next;
};

let tool = new linkTool();
let l1 = tool.arrToLinkList([5]);
let l2 = tool.arrToLinkList([5]);
let testcase = addTwoNumbers(l1,l2);
console.log(testcase);
export default addTwoNumbers;