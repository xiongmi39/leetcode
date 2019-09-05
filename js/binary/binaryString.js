
/*输入: "00110011"
输出: 6
解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。*/
//计数
function pickBinaryStr(str){
	let pre = 0;
	let cur = 1;
	let n = 0;
	for (let i = 0,len = str.length; i<len-1;i++ ) {
		if(str[i] == str[i+1]){
			cur++;
		}else{
			pre = cur;
			cur = 1;
		}
		if(pre >= cur){
			n++;
		}
	}
	return n;
};
//打印所有符合要求的字串
function printBinaryStr(outArr=[],str=''){
	let pre = 0,cur = 1;
	for (var i = 0; i < str.length-1; i++) {
		if(str[i] == str[i+1]){
			cur++;
			if(str.length <=2){
				return outArr;
			}
		}else{
			pre = cur;
			cur=1;
		}
		if(cur == pre){
		outArr.push(str.substr(0,pre*2));
		return	printBinaryStr(outArr,str.substr(1));		
		}
	}
}

let binarystr = '00110011';
// pickBinaryStr(binarystr);
let outArr = printBinaryStr([],binarystr);
console.log(outArr);


export default pickBinaryStr;