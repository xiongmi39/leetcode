
/*输入: "00110011"
输出: 6
解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。*/
function pickBinaryStr(str){
	for(let i in str){
		console.log(i);
	}
};

let binarystr = '00110011';
pickBinaryStr(binarystr);

export default pickBinaryStr;