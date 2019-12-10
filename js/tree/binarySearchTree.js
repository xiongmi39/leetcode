import {treeNode as bsTreeNode}  from './bsTreeNode'

export default class binarySearchTree{
	constructor(compareFn = defaultConpareFn){
		this.root = null;
		this.compareFn = compareFn;
	}
	insert(key){
		if(this.root === null){
			let node = new bsTreeNode(key);
			this.root = key;
		}else{
			insertNode(root,key);
		}

	}
	insertNode(node,key){
		if(compareFn(key,node.key) == utils.COMPARE_LESSTHAN){
			if(node.left == null){
				let newnode = new bsTreeNode(key);
				node.left = newnode;
			}else{
				insertNode(node.left,key);
			}
		}else{
			if(node.right == null){
				let newnode = new bsTreeNode(key);
				node.right = newnode;
			}else{
				insertNode(node.right,key);
			}
		}
	}
	search(key){
		if(compareFn(key,root.key) == utils.COMPARE_EQUAL){
			return true;
		}else {
			searchNode(root,key);
		}
	}
	searchNode(node,key){
		if(compareFn(key,node.key) == utils.COMPARE_EQUAL){
			return true;
		}else if(compareFn(key,node.key) == utils.COMPARE_LESSTHAN){
			searchNode(node.left,key);
		}else{
			searchNode(node.right,key);
		}
	}
	// 中序遍历
	inOrderTraverse(callback){
		this.inOrderTraverseNode(this.root,callback);
	}
	inOrderTraverseNode(node,callback){
		this.inOrderTraverseNode(node.left,callback);
		callback(node.key);
		this.inOrderTraverseNode(node.right,callback);
	}
	// 先序遍历
	preOrderTraverse(callback){
		this.preOrderTraverseNode

	}
	preOrderTraverseNode(node,callback){
		callback(node.key);
		this.preOrderTraverseNode(node.left,callback);
		this.preOrderTraverseNode(node.right,callback);
	}
	// 后序遍历
	postOrderTraverse(callback){
		this.postOrderTraverseNode(node,callback);
	}
	postOrderTraverseNode(node,callback){
		this.postOrderTraverseNode(node.left,callback);
		this.postOrderTraverseNode(node.right,callback);
		callback(node.key);		
	}
	min(){
		this.minNode(this.root);
	}
	minNode(node){
		if(node.left == null){
			return node;
		}else{
			this.minNode(node.left);
		}
	}
	max(){
		this.maxNode(this.root);
	}
	maxNode(node){
		if(node.right == null){
			return node;
		}else{
			this.maxNode(node.right);
		}
	}
	remove(key){
		this.removeNode(root,key);
	}
	removeNode(node,key){
		if(key === node.key){
			if(node.left === null && node.right === null){
				node.key = null;
				return null;
			}
			if(node.right == null){
				
			}
		}		
		if(key < node.key){
			removeNode(node.left,key);			
		}
		if(key > node.key){
			removeNode(node.right,key);
		}

	}

}