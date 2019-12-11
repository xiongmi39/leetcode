import {treeNode } from '../tree/bsTreeNode'

export  class Tool{
	arrToTree(arr){
		if(arr.length == 0){
			return null;
		}
		if(arr.length == 1){
			let tree = new treeNode(arr[0]);
			return tree;
		}
		let cur = arr[0];
		let tree = new treeNode(cur);
		arr.shift();
		this.buildTree([tree],arr);
		return tree;
	}

	buildTree(headNodes,leafs){
		if(leafs.length == 0){
			return tree;
		}
		let i = 0;
		let j = 0;
		while(j < leafs.length){
			if(j%2 == 0){
				if(leafs[j] == null){
					headNodes[i].left = null;
					j++;
					continue;
				}else{
					headNodes[i].left = new treeNode(leafs[j]);
					headNodes.push(headNodes[i].left);
				}

				j++;
				continue;
			}else{
				if(leafs[j] == null){
					headNodes[i].right = null;
				}else{
					headNodes[i].right = new treeNode(leafs[j]);
					headNodes.push(headNodes[i].right);
				}

				j++;
			}
			i++;	
		}
		return headNodes;
	}
}



// let testcase = arrToTree([3,9,20,null,null,15,7]);
// let testcase = arrToTree([3,null,20,null,9,15,7]);
// let testcase = arrToTree([1,2,3,4,5,6,7]);
// console.log(testcase);
