import LinkListNode from './LinkListNode'

export default class LinkedList{
	constructor(head,tail = null){
		this.head = head;
		this.tail = tail;
	}

	append(val){
		let newNode = new LinkListNode(val);
		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
			return this;
		}
		this.tail.next = newNode;
		this.tail = newNode;
		return this;
	}

	arrayToLinkedList(arr){
		return	arr.map((i)=>{
			this.append(arr[i]);
		})
	}
}