import ListNode from './LinkListNode'

export default class LinkedList{
	constructor(head,tail = null){
		this.head = head;
		this.tail = tail;
	}

	append(val){
		let newNode = new ListNode(val);
		this.tail.next = newNode;
		this.tail = newNode;
	}

	arrayToLinkedList(arr){
		this.head = arr[0];
		for(var i = 1; i< arr.length;i++){
			this.append(arr[i]);
		}
		return this;
	}
}