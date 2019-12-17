/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 import {treeNode } from '../tree/bsTreeNode'
 import {Tool } from '../tree/tool'
var inorderTraversal = function(root) {
    let list = [];   
    // return getInorder([],root);
    // return getInorder2([],root);
    // return getInorder3([],root);
    return getInorder4([],root);
};
// 递归
function getInorder(list,node){
	if(node == null){
		return list;
	}
	getInorder(list,node.left);
	list.push(node.val);
	getInorder(list,node.right);
	return list;
}
//栈
function getInorder2(list,node){
	let stack = [];
	let cur = node;
	while(cur !== null || stack.length !== 0){	
		while(cur !== null){
			stack.push(cur);
			cur = cur.left;			
		}
		cur = stack.pop();
		list.push(cur.val);		
		cur = cur.right;					
	}
	return list;
}

//颜色标记法
function getInorder3(list,node){
	let stack = [['w',node]];
	let cur ;
	while(stack.length !== 0){
		cur = stack.pop();
		if(cur[1] == null){
			continue;
		}else{
			if(cur[0] == 'g'){
				list.push(cur[1].val);
			}else{
				stack.push(['w',cur[1].right]);
				stack.push(['g',cur[1]]);
				stack.push(['w',cur[1].left]);			
			}			
		}
	}
	return list;
}

//莫里斯遍历
function getInorder4(list,node){
	let cur = node;
//如果没有左节点，右子树成为current
//如果有左节点，让当前节点成为左子树最右节点的右节点，左子树成为current
	while(cur !== null){
		if(cur.left == null){
			list.push(cur.val);
			cur = cur.right;
			node = node.right;
		}else{
			cur = cur.left;
			node.left = null;
			if(cur.right){
				let pointer = cur.right;
				while(pointer.right){
					pointer = pointer.right;
				}
				pointer.right = node;				
			}else{
				cur.right = node;
			}
			node = cur;
		}
	}
	return list;
}


let tool = new Tool();
// let root = tool.arrToTree([1,null,2,3]);
let root = tool.arrToTree([1,2,3,4,5,6]);
// let root = tool.arrToTree([3,1,2]);
let testcase = inorderTraversal(root);
console.log(testcase);

export default inorderTraversal;