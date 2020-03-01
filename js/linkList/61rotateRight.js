/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 import {ListNode } from '../linkList/ListNode'
import {linkTool } from '../linkList/linkTool'
var rotateRight = function(head, k) {
	if(head == null){
		return head;
	}
	if(k == 0){
		return head;
	}
	let tail = head;
	let len = 1;
	while(tail.next){
		tail = tail.next;
		len++;
	}
	if(k>len){
		k = k%len;
	}
	let count = len-k;
	tail.next = head;
	while(count > 0){
		count--;
		tail = tail.next;
	}
	head = tail.next;
	tail.next = null;
	return head;
};

let tool = new linkTool();
let head = tool.arrToLinkList([]);
let testcase = rotateRight(head,1);
console.log(testcase);
export default rotateRight;