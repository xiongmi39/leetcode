/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
import {ListNode } from '../linkList/ListNode'
import {linkTool } from '../linkList/linkTool'
 import {treeNode as TreeNode} from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
// var sortedListToBST = function(head) {
// 	return buildTree(head);
// 	function buildTree(head){
// 		if(head == null){
// 			return null;
// 		}
// 		if(head.next == null){
// 			return new TreeNode(head.val);
// 		}
// 		let one  = head;
// 		let two = head;
// 		let pre = null;
// 		while(two !== null){
// 			if(two.next !== null){
// 				pre = one;
// 				one = one.next;			
// 				two = two.next.next;
// 			}else{
// 				two = null;
// 			}
			
// 		}
// 		let node = new TreeNode(one.val);
// 		let right = one.next;
// 		let left = head;
// 		pre.next = null;
// 		one = null;
// 		node.left =   buildTree(left);
// 		node.right = buildTree(right);  
// 		return node;	
// 	}
// };

//中序
var sortedListToBST = function(head) {
    let size = 0;
    let countsize = head;
    while(countsize !== null){
    	countsize = countsize.next;
    	size++;
    }
    return buildTree(0,size-1);
    function buildTree(l,r){
    	if(l>r){
    		return null;
    	}
    	let mid = Math.ceil((r+l)/2);
    	let leftnode = buildTree(l,mid-1);
    	let node = new TreeNode(head.val);
    	head = head.next;
    	node.left = leftnode;
    	node.right = buildTree(mid+1,r);
    	return node;
    }
};

let tool = new linkTool();
let head = tool.arrToLinkList([-10, -3, 0, 5, 9]);
let testcase = sortedListToBST(head);
console.log(testcase);
export default sortedListToBST;