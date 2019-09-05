
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
function printBinaryStr(str="",outArr=[]){
	let pre = 0,cur = 1;
	for (var i = 0; i < str.length; i++) {

		if(str[i] == str[i+1]){
			cur++;

		}else{
			pre = cur;
			cur=1;

		}
		if(str.length <=2){
			return outArr;
		}
		if(cur == pre){
			outArr.push(str.substr(0,cur*2));
			return	printBinaryStr(str.substr(1),outArr);		
		}else{
			continue;
		}
	}
}

function getStr(str) {
  // 建立数据结构，堆栈，保存数据
  let r = []
  // 给定任意子输入都返回第一个符合条件的子串
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  // 通过for循环控制程序运行的流程
  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r
}

 let binarystr = '00110';
// let binarystr = '00110011';

// let outArr = printBinaryStr(binarystr);
// console.log(pickBinaryStr(binarystr));
// console.log(outArr);
console.log(getStr(binarystr));


export default pickBinaryStr;