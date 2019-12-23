export  class linktreeNode{
	constructor(val, left, right, next){
		// this.id = id;
		this.val = val === undefined ? null : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
		this.next = next === undefined ? null : next;
	}
}