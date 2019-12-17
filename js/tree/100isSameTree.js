/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 import {treeNode } from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
// var isSameTree = function(p, q) {
// 	let flg = true;
// 	getIsSame(p,q);
// 	return flg;
//     function getIsSame(p,q){
//     	if(p == null && q == null){
//     		return true;
//     	}
//     	if(p == null || q == null){
//     		flg = false;
//     		return flg;
//     	}
//     	getIsSame(p.left,q.left);
//     	getIsSame(p.right,q.right);
//     	if(p!==null && q !== null && p.val !==q.val){
//     		flg = false;
//     		return flg;
//     	}
//     	return flg;
//     }
// };

var isSameTree = function(p, q) {
	return getIsSame(p,q);
    function getIsSame(p,q){
    	if(p == null && q == null){
    		return true;
    	}
    	if(p == null || q == null){
    		return false;
    	}
    	if(p.val !==q.val){
    		return false;
    	}
    	return getIsSame(p.left,q.left) && getIsSame(p.right,q.right);
    }
};

let tool = new Tool();
// let root = tool.arrToTree([1,null,2,3]);
let p = tool.arrToTree([1,null,3]);
let q = tool.arrToTree([1,2,3]);
let testcase = isSameTree(p,q);
console.log(testcase);

export default isSameTree;