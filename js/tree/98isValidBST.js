/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 import {treeNode } from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
var isValidBST = function(root) {
	if(root !== null && root.left == null && root.right == null){
		return true;
	}
    // let list = {pre:null,flg:true};
    // return getInorder(list,root);
    let pre = null;
    let flg = true;
    function getInorder2(root){
    	if(flg == false || root == null){
    		return flg;
    	}
    	getInorder2(root.left);
    	if(pre !== null && pre >= root.val){
    		flg = false;
    		return flg;
    	}
    	pre = root.val;
    	getInorder2(root.right);
    	return flg;
    }
    return getInorder2(root);
};
function getInorder(list,root){
	if(list.flg == false){
		return list.flg;
	}
	if(root == null){
		return list.flg;
	}
	getInorder(list,root.left);
	if(list.pre !== null && list.pre >= root.val){
		list.flg = false;
		return list.flg;
	}
	list.pre = root.val;
	getInorder(list,root.right);
	return list.flg;
}
function getInorder2(root){

}


let tool = new Tool();
// let root = tool.arrToTree([1,null,2,3]);
let root = tool.arrToTree([2,1,3]);
let testcase = isValidBST(root);
console.log(testcase);
export default isValidBST;