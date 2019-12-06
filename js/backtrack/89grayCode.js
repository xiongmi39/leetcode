/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
	if(n==0){
		return [0];
	}
    let list = [];
    backtrack(list,'',0,n);
    return list;
};

function backtrack(list,now,x,n){
	if(now.length == n){
		return	list.push(parseInt(now,2));
	}else if(x == 0){
		backtrack(list,now+'0',0,n);
		backtrack(list,now+'1',1,n);
	}else{
		backtrack(list,now+'1',0,n);
		backtrack(list,now+'0',1,n);
	}

}



let testcase = grayCode(2);
console.log(testcase);

export default grayCode;