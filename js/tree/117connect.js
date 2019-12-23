/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
 import {linktreeNode as Node} from '../tree/linkTreeNode'
 import {Tool } from '../tree/tool'
var connect = function(root) {
	//cur为当前层节点链表，tail为下一层节点链表，dummy为tail的开头节点位置
	let cur = root;
	while(cur !== null){
		//存储链表tail的开头节点位置dummy！！！
		let dummy = new Node();
		let tail = dummy;
		//遍历cur的左右节点，不为空的节点，加入tail的末尾
		while(cur!== null){
			let left = cur.left;
			if(left !== null){
				tail.next = left;
				tail = tail.next;   		
			}
			let right = cur.right;
			if(right !== null){   		
				tail.next = right;
				tail = tail.next;//tail来到cur下一层节点的末尾    		
			}
			//遍历当前层节点直到最后一个
			cur = cur.next;
		}
		//cur来到下一层的开头节点！！！
		cur = dummy.next;		
	}
    return root; 
};
let tool = new Tool();
let root = tool.arrToLinkTree([1,2,3,4,5,null,7]);
let testcase = connect(root);
console.log(testcase);
export default connect;