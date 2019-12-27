 import {graghNode as Node } from '../tree/graghNode'

 export class graphTool{
 	 objToGraph(obj,map){
 	 	if(!obj.neighbors){
 	 		if(map[obj.$ref]){
 	 			return map[obj.$ref];
 	 		}
 	 		let n = new Node(obj.$ref,[]);
 	 		map[n.val] = n;
 	 		return n;
 	 	}
 		let node = new Node(obj.val,[]);
 		map[node.val] = node;
 		for (let i = 0; i < obj.neighbors.length; i++) {
 			if(map[obj.neighbors[i].val]){
 				node.neighbors.push(map[obj.neighbors[i].val]);
 			}else{
 				node.neighbors.push(this.objToGraph(obj.neighbors[i],map));
 			}
 		}
 		return node;
 	}
 }