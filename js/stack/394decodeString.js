/**
 * @param {string} s
 * @return {string}
 */
// var decodeString = function(s) {
// 	let str = "";
// 	let multi = 0;
// 	let stack = [];
// 	for(let item of s){
// 		if(item === '['){
// 			stack.push([multi,str]);
// 			str = "";
// 			multi = 0;
// 		}else if(item === "]"){
// 			let [m,st] = stack.pop();
// 			let tmp = str;
// 			str = "";
// 			while(m>0){
// 				str += tmp;
// 				m--;
// 			}
// 			str = st+str;
// 		}else if(item >= 0 && item <=9){
// 			multi = multi*10+parseInt(item);
// 		}else{
// 			str += item;
// 		}
// 	}
// 	return str;
// };

//sample
var decodeString = function(s) {
    const len = s.length;
    let stack = '';
    for(let i = 0; i < len; i++) {
        if(s[i] !== ']') stack += s[i];
        else {
            const start = stack.lastIndexOf('[');
            let kStart = start;
            while(kStart - 1 >=0 && stack[kStart - 1].match(/\d/)) kStart--;
            let k = +stack.substring(kStart, start);
            const repeatStr = stack.substring(start + 1).repeat(k);
            stack = stack.substring(0, kStart);
            stack += repeatStr;
        }
    }
    return stack;
};
let testcase = decodeString("3[a]2[bc]");
console.log(testcase);
export default decodeString;