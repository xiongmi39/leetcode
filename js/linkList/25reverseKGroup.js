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
// var reverseKGroup = function(head, k) {
// 	return reversePair(head,k);
// 	function reversePair(head,k){
// 		let cur = head;
// 		let count = 0;
// 		while(count!== k && cur){
// 			cur = cur.next;
// 			count++;
// 		}
// 		if(count == k){
// 			cur = reversePair(cur,k);
// 			while(count >0){
// 				count--;
// 				let tmp = head.next;
// 				head.next = cur;
// 				cur = head;
// 				head = tmp;
// 			}
// 			head = cur;
// 		}
// 		return head;
// 	}
// };

//尾插法
var reverseKGroup = function(head, k) {
	let count = k;
	let dummy = new ListNode(0);
	dummy.next = head;
	let tail = dummy;
	let pre = dummy;
	while(true){
		while(count >0 && tail){
			count --;
			tail = tail.next;
		}
		if(tail == null){
			break;
		}
		let tmp = tail.next;
		let tmppre = head;
		while(pre.next !== tail){
			count++;
			pre.next = head.next;
			head.next = tail.next;
			tail.next = head;
			head = pre.next;
		}
		count++;
		pre = tmppre;
		head = tmp;
		tail = pre;
	}
	return dummy.next;
};



let tool = new linkTool();
let head = tool.arrToLinkList([1,9,7,0,1,8,2,0,8]);
let testcase = reverseKGroup(head,8);
console.log(testcase);
export default reverseKGroup;
