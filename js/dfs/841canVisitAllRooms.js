/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = new Set();
    dfs(rooms,visited,0);  
    let path = Array.from(visited);
    let sum = Array.from(visited).reduce((pre,cur)=>{
    	return pre+cur;
    });
    let a = rooms.length;
    return sum == (a-1)*a/2;
    function dfs(adj,tmparr,i){
    	if(tmparr.has(i)){
    		return false;
    	}
    	tmparr.add(i);
    	for (let j = 0; j < adj[i].length; j++) {
    		dfs(adj,tmparr,adj[i][j]);
    	}
    }
};

let testcase = canVisitAllRooms([[1,3],[3,0,1],[2],[0]]);
console.log(testcase);
export default canVisitAllRooms;