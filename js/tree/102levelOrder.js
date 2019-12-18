/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
import {treeNode } from '../tree/bsTreeNode'
import {Tool } from '../tree/tool'

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 //迭代
// var levelOrder = function(root) {
//     let nodes = [root];
//     let out = [];
//     let i = 0;
//     let curcount = 1;
//     let layernodes = 0;
//     let tmparr = [];
//     while(i<=nodes.length){
//     	if(curcount == 0){
//     		curcount = layernodes*2;
//     		if(tmparr.length !== 0){
//     			out.push(tmparr);
//     		}
//     		layernodes = 0;
//     		tmparr = [];
//     	}
//     	if(nodes[i] == null){

//     	}else{
//     		tmparr.push(nodes[i].val);
//     		if(nodes[i].val !== null){
//     			layernodes++;
//     		}
//     		nodes.push(nodes[i].left);
//     		nodes.push(nodes[i].right);
//     	} 
//     	curcount--;   	
//     	i++;   	
//     }
//     return out;
// };


//递归
var levelOrder = function(root) {
	if(root == null){
		return [];
	}
    let levels = [];
    layertree(levels,root,0);
    return levels;
};

function layertree(levels,node,level){
	if(levels.length < level+1){
		levels.push([]);
	}
	if(node.val !== null){
		levels[level].push(node.val);
	}
	if(node.left !== null){
		layertree(levels,node.left,level+1);
	}
	if(node.right !== null){
		layertree(levels,node.right,level+1);
	}		
}

//[1,2,null,3,null,4,null,5]
// [1,2,3,4,5]
let tool = new Tool();
// let root = tool.arrToTree([1,2,null,3,null,4,null,5,null,6,null,7]);
// let root = tool.arrToTree([1,2,3,4,5]);
let root = tool.arrToTree([3,9,20,null,null,15,7]);
// let root = tool.arrToTree([3,9,20,null,null,15,7]);
let testcase = levelOrder(root);
console.log(testcase);

export default levelOrder;