/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let visited = {};
    let flg = 'un';
    if(start<0 || start>= arr.length || arr.indexOf(0) <0){
    	return false;
    }
    return dfs(arr,start);
    function dfs(arr,start){
    	if(flg === true){
    		return true;
    	}
    	if(arr[start] == 0){
    		flg = true;
    		return true;
    	}
    	if(start<0 || start>= arr.length || visited[start]){
    		flg = false;
    		return false;
    	}
    	visited[start] = true;
    	return dfs(arr,start+arr[start])||dfs(arr,start-arr[start]);
    }
};

let testcase = canReach([4,2,3,3,1,2],0);
console.log(testcase);
export default canReach;