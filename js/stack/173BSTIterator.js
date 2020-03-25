import {treeNode } from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    return getLinkList(root);
    function getLinkList(root){        
    	let head = root;
    	let pre = root;
    	let stack = [];
    	while(head){
    		if(!head.left){
    			stack.push(head.val);
    			head = head.right;
    		}else{
    			head = head.left;
    			let tmp = head;
    			while(tmp.right){
    				tmp = tmp.right;
    			}
    			pre.left = null;
    			tmp.right = pre;
    			
    		}
    		pre = head;
    	}
    	return stack;
    }   
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {

};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {

};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

let tool = new Tool();
let root = tool.arrToTree([7,3,15,null,null,9,20]);
let testcase = BSTIterator(root);
console.log(testcase);
 export default BSTIterator;