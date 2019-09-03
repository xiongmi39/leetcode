// import LinkListNode from './LinkListNode';
// import LinkedList from './LinkedList';

function LinkListNode(value){
		this.value = value;
		this.next = undefined;
}

function LinkedList (head,tail){

		this.head = head;
		this.tail = tail;

	this.append =function(val){

		let newNode = new LinkListNode(val);
		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
			return this;
		}
		this.tail.next = newNode;
		this.tail = newNode;
		return this;
	};

	this.arrayToLinkedList=function(arr){
		return	arr.map((i)=>{
			this.append(arr[i]);
		})
	};
}
var reverseList = function(head) {
    let cur = head;
    let pre = null;
    while(cur != null){
    	cur.next = pre;
    	pre = cur;
    	cur = cur.next;
    }
};

let arrTest = ['0','1','2','3'];
let linkdList = new LinkedList();
linkdList.arrayToLinkedList(arrTest);
console.log(linkdList);