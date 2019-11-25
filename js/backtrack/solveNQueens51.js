/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
	let condition = {};
	condition.row = {};
	condition.leftl = {};
	condition.rightl = {};
	let list = [];
	backtrack(list,[],n,1,condition);
    return list;
};

function backtrack(list,tmparr,n,cur,condition){
	if(tmparr.length = n){
		return list.push(tmparr);
	}
	for (var i = 1; i < n.length; i++) {
		for (var j = 0; j < n.length; j++) {
			cur.x = i;
			cur.y = j;
			if(checkValue(cur,condition)){
				return;
			}
			tmparr.push(cur.y);
			setQueen(cur,condition,true);
			backtrack(list,tmparr,n,cur,condition);
			setQueen(cur,condition,false);
			tmparr.pop();
		}		

	}
}

function setQueen(cur,condition,flg){
	condition.row[cur.y] = flg;
	condition.leftl[cur.x+cur.y]= flg;
	condition.rightl[cur.y-cur.x] = flg;
	return true;	
}

function checkValue(cur,condition){
	return condition.row[cur.y]||condition.leftl[cur.x+cur.y] || condition.rightl[cur.y-cur.x];

}

function format(result){
	return '';
}

let testcase = solveNQueens(4);
console.log(testcase);

export default solveNQueens;
