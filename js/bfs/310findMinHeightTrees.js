/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
	if(n ==1){
		return [0];
	}
    let adj = {};
    let degree = new Array(n).fill(0);
    for (let i = 0; i < edges.length; i++) {
    	let [x,y] = edges[i];
    	if(!adj[x]){
    		adj[x] = [];
    	} 
    	adj[x].push(y);
    	if(!adj[y]){
    		adj[y]=[];
    	}
    	adj[y].push(x);
    	degree[x]++;
    	degree[y]++;
    }
        let  q = [];
    for (let i = 0; i < degree.length; i++) {
    	if(degree[i] == 1){
    		q.push(i);
    	}
    }
    let copyq = [...Array.from(q)];
    while(q.length!=0){   
    let tmp = []; 	
    	while(q.length !== 0){
    		let cur = q.shift();
    		if(!adj[cur]){
    			continue;
    		}
    		for (let i = 0; i < adj[cur].length; i++) {
    			degree[adj[cur][i]]--;
    			if(degree[adj[cur][i]] == 1){
    				tmp.push(adj[cur][i]);
    			}
    		}   		
    	}
    	if(tmp.length == 0){
    		break;
    	}
    	q = tmp;
    	copyq = [...Array.from(tmp)];
    }
    return copyq;
};

let testcase = findMinHeightTrees(2,[[0,1]]);
console.log(testcase);
export default findMinHeightTrees;