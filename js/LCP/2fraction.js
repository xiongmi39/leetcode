/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function(cont) {
    let [m,n] = [cont[cont.length-1],1];
    let i = cont.length-2;
    [m,n] = getfrac([m,n],cont,i);
    let g = gcd(m,n);
    return [m/g,n/g];
};

function getfrac([m,n],cont,i){
	if(i < 0){
		return [m,n];
	}
	let tmp = n;
	n = m;
	m = cont[i]*m+tmp;	
	return getfrac([m,n],cont,i-1);
}

function gcd(a,b){
	let g = 1;
	if(a%b == 0){
		g = b;
		return g;
	}else{
		return g = gcd(b,a%b);
	}
}

let testcase = fraction([3,2,0,2]);
// let testcase = gcd(17,3);
console.log(testcase);

export default fraction;