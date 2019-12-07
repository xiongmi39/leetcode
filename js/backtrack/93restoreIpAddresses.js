/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let list = [];
    backtrack(list,[],s,3);
    return list;
};

function backtrack(list,tmparr,s,n){
	if(n==0){
		if(s.length>1 && s.charAt(0) == '0'){
			return;
		}
		if(parseInt(s) <=255){
			return list.push([...Array.from(tmparr),s].join('.'));
		}else{
			return;
		}
	}
	for (var i =1 ; i < 4; i++) {
		let val = s.substring(0,i);
		if(val.charAt(0) == '0' && val.length >1){
			continue;
		}
		if(parseInt(val,10) > 255){
			continue;
		}
		tmparr.push(val);
		backtrack(list,tmparr,s.substring(i,s.length),n-1);
		tmparr.pop();
	}
}

// function backtrack(list,tmparr,s,j,k,l){
// 	if(l > s.length){
// 		return;
// 	}
// 	let a = s.substring(0,j);
// 	let b = s.substring(j,k);
// 	let c = s.substring(k,l);
// 	let d = s.substring(l,s.length);

// 	if(parseInt(a)<=255 && parseInt(a)>= 0 && parseInt(b)>= 0 && parseInt(b)<=255 && parseInt(c)>=0 && parseInt(c)<=255 && parseInt(d)>=0 && parseInt(d)<= 255){
// 		list.push([a,b,c,d].join("."));
// 	}

// 	if(j<3){
// 		backtrack(list,tmparr,s,j+1,k+1,l+1);
// 	}else if(j>=2 && k<6){
// 		backtrack(list,tmparr,s,j,k+1,l+1);
// 	}else if(k>=6 && l < s.length-1){
// 		backtrack(list,tmparr,s,j,k,l+1);
// 	}
// }

// function backtrack(list,tmparr,s,j,k,l){
// 	let a = s.substring(0,j);
// 	let b = s.substring(j,k);
// 	let c = s.substring(k,l);
// 	let d = s.substring(l,s.length);
// 	if(parseInt(a)<=255 && parseInt(a)>= 0 && parseInt(b)>= 0 && parseInt(b)<=255 && parseInt(c)>=0 && parseInt(c)<=255 && parseInt(d)>=0 && parseInt(d)<= 255){
// 		list.push([a,b,c,d].join("."));
// 	}
// 	for (let a = j; a < 3; a++) {
// 		for (let b = a; b < 6; b++) {
// 			for (let c = b; c < s.length; c++) {
// 				backtrack(list,tmparr,s,a,b,c);
// 			}
// 		}
// 	}

// }


let testcase = restoreIpAddresses("255255255255");
// let testcase = restoreIpAddresses("010010");
// let testcase = restoreIpAddresses("25525511135");
// let testcase = restoreIpAddresses('123456');
console.log(testcase);

export default restoreIpAddresses;