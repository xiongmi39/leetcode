import Utils from '../utils/utils.js';

function bfssearch(graph,arr=[]){
	if(Object.keys(graph).length == 0){
		return arr;
	}
	arr = arr.concat(Object.keys(graph));
	for(let i in graph){
	arr = bfssearch(graph[i],arr);
	}
return arr;	 	
}

function bfssearchb(graph,arr=[]){
	let tmparr = [];
	// for (let i in graph) {
	// 	arr.push(i);
	// 	tmparr.push(graph[i]);
	// }
	// for (let i = 0; i < tmparr.length; i++) {
	// 	if(Object.keys(tmparr[i]) == 0){
	// 		continue;
	// 	}
	// 	for (let j in tmparr[i]) {
	// 		// arr.push(j);
	// 		tmparr.push(j);
	// 	}
	// }
	for (let i in graph) {
		tmparr.push(graph[i]);
	}

	return tmparr;
}
let utils = new Utils();
let outgraph = bfssearchb(utils.grapha);
console.log(outgraph);

export default bfssearch;