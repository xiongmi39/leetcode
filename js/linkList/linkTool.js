import {ListNode } from '../linkList/ListNode'

export class linkTool{
	arrToLinkList(arr,linkList){
		if(arr.length == 0){
			return null;
		}
		let listnode = new ListNode(arr.shift());
		listnode.next = this.arrToLinkList(arr,listnode);
		return listnode;		
	}
	arrToCycle(arr,pos){
		if(arr.length == 0){
			return null;
		}
		let head = this.arrToLinkList(arr);
		if(pos == -1){
			return head;
		}
		let count = 0;
		let linkhead = head;
		let tmp ;
		while(linkhead.next){
			linkhead = linkhead.next;
			count++;
			if(count == pos){
				tmp = linkhead;
			}
		}
		linkhead.next = tmp;
		return head;		
	}
}