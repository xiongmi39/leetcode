/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
import {treeNode as TreeNode} from '../tree/bsTreeNode'

var buildTree = function(preorder, inorder) {
	if(!preorder.length && inorder.length){
		return null;
	}
	let headval = preorder[0];
	let headidx = inorder.indexOf(headval);
	if(headidx <0){
		return null;
	}
	let midleftTree = inorder.slice(0,headidx);
	let midrightTree = inorder.slice(headidx+1);
	let preLeft = preorder.slice(1,headidx+1);
	let preRight = preorder.slice(headidx+1);

    let tree = new TreeNode(headval);
    tree.val = headval;
    tree.left  = buildTree(preLeft,midleftTree);
    tree.right = buildTree(preRight,midrightTree);
    return tree;
};

let testcase = buildTree([3,9,20,15,7],[9,3,15,20,7]);
// console.log(testcase);

export default buildTree;