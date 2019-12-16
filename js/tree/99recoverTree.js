/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 import {treeNode } from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
var recoverTree = function(root) {
	let pre = null;
	let list = [];
	list =  getInorder([],root);
	if(list.length == 0){
		return root;
	}
	let tmp = list[list.length-1].val;
	list[list.length-1].val = list[0].val;
	list[0].val = tmp;  
	return root;  		

    function getInorder(list,root){
    	if(root == null){
    		return list;
    	}
    	getInorder(list,root.left);
    	if(pre !== null && pre.val > root.val){
    		list.push(pre);
    		list.push(root);
    	}
    	pre = root;
    	getInorder(list,root.right);
    	return list;
    	
    }
};
let tool = new Tool();
let root = tool.arrToTree([3,1,4,null,null,2]);
let testcase = recoverTree(root);
console.log(testcase);
export default recoverTree;