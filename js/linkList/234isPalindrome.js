/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 import {ListNode } from '../linkList/ListNode'
import {linkTool } from '../linkList/linkTool'
// var isPalindrome = function(head) {
// 	if(!head){
// 		return head;
// 	}
// 	let arr = [];
// 	while(head){
// 		arr.push(head.val);
// 		head = head.next;
// 	}
// 	let left = 0;
// 	let right = arr.length -1;
// 	while(left <= right){
// 		if(arr[left] !== arr[right]){
// 			return false;
// 		}else{
// 			left++;
// 			right--;
// 		}
// 	}
// 	return true;
// };

// var isPalindrome = function(head) {
// 	let fast = head;
// 	//中间
// 	let slow = head;
// 	while(fast && fast.next){
// 		fast = fast.next.next;
// 		slow = slow.next;
// 	}
// 	let right = reverse(slow);
// 	let left = head;
// 	while(right){
// 		if(left.val !== right.val){
// 			return false;
// 		}else{
// 			left = left.next;
// 			right = right.next;
// 		}
// 	}
// 	return true;
// 	//翻转链表
// 	function reverse(list){
// 		let pre = null;
// 		let cur = list;
// 		while(cur){
// 			let tmp = cur.next;
// 			cur.next = pre;
// 			pre = cur;
// 			cur = tmp;
// 		}
// 		return pre;
// 	}
// };

var isPalindrome = function(head) {
	let frontlink = head;
	return reverse(head);
	function reverse(list){
		if(list !== null){
			if(!reverse(list.next)){
				return false;
			}
			if(list.val !== frontlink.val){
				return false;
			}else{
				frontlink = frontlink.next;
			}
		}
		return true;
	}
};

let tool = new linkTool();
let head = tool.arrToLinkList([1,2,1]);
let testcase = isPalindrome(head);
console.log(testcase);
export default isPalindrome;