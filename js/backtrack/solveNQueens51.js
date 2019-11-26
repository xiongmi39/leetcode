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
	let cur = [1,1];
	backtrack(list,[],n,cur,condition);
	format(list);
    return format(list);
};

function backtrack(list,tmparr,n,cur,condition){
	//n行全部放满，得到一个结果
	if(tmparr.length == n){
		list.push([...Array.from(tmparr)]);
		return list;
	}
	for (let i = cur[1]; i <= n+1; i++) {
		if(i>n){
			return ;
		}
		for (let j = 1; j <= n+1; j++) {
			//这一行都无处可放，剪枝
			if(j>n){
				return ;
			}
			cur[0] = j;
			// cur[1] = i;
			if(checkValue(cur,condition)){
				//当前格子不满足条件，往右找下一格
				continue;
			}else{
				//当前格满足条件，退出循环放置皇后
				tmparr.push(cur[0]);
				setQueen(cur,condition,true);
				backtrack(list,tmparr,n,[cur[0],cur[1]+1],condition);
				setQueen(cur,condition,false);
				tmparr.pop();
			}
		}			
	}
}

function setQueen(cur,condition,flg){
	condition.row[cur[0]] = flg;
	condition.leftl[cur[0]+cur[1]]= flg;
	condition.rightl[cur[1]-cur[0]] = flg;
	return true;	
}

function checkValue(cur,condition){
	return condition.row[cur[0]]||condition.leftl[cur[0]+cur[1]] || condition.rightl[cur[1]-cur[0]];
}

function format(list){
let glist =	list.map((arr)=>{
	let garr = 	arr.map((q)=>{
			let val = "";
			for (let i = 1; i <= arr.length; i++) {
				if(i == q){
					val += "Q";
				}else{
					val+=".";
				}
			}
			return val;
		});
		return garr;
	});
	return glist;
}

let testcase = solveNQueens(4);
console.log(testcase);

export default solveNQueens;
