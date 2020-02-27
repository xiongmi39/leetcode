/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
import {ListNode } from '../linkList/ListNode'
import {linkTool } from '../linkList/linkTool'
// var mergeKLists = function(lists) {
// 	if(lists.length ==0){
// 		return null;
// 	}
// 	if(lists.length == 1){
// 		return lists[0];
// 	}
// 	return merge(lists,0,lists.length-1);
// 	function merge(lists,left,right){
// 		if(left == right){
// 			return lists[left];
// 		}
// 		let mid = left + Math.floor((right-left)/2);
// 		let l1 = merge(lists,left,mid);
// 		let l2 = merge(lists,mid+1,right);
// 		return mergelink(l1,l2);
// 	}
// 	function mergelink(l1,l2){
// 		if(l1 == null){
// 			return l2;
// 		}
// 		if(l2 == null){
// 			return l1;
// 		}
// 		if(l1.val < l2.val){
// 			l1.next = mergelink(l1.next,l2);
// 			return l1;
// 		}else{
// 			l2.next = mergelink(l1,l2.next);
// 			return l2;
// 		}
// 	}
// };

var mergeKLists = function(lists) {
	if(lists.length ==0){
		return null;
	}
	if(lists.length == 1){
		return lists[0];
	}
	let arr = [];
	for (let list of lists) {
		while(list){
			arr.push(list.val);
			list = list.next;
		}
	}
	arr.sort((a,b)=>a-b);
	let preHead = new ListNode(0);
	let ans = preHead;
	for (let i = 0; i < arr.length; i++) {
		let node = new ListNode(arr[i]);
		ans.next = node;
		ans = ans.next;
	}
	return preHead.next;
};

let tool = new linkTool();
let arr = [[1,4,5],[1,3,4],[2,6]];
arr = arr.map((a)=> tool.arrToLinkList(a));
let testcase = mergeKLists(arr);
console.log(testcase);
export default mergeKLists;