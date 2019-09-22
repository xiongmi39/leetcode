/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    for (var i =0; i < bits.length-1;) {
    	if(bits[i] == 1){
    		i+=2;
    	}else{
    		i++;
    	}    	    	
    }
    if(i == bits.length-1){
    	return true;
    }
    return false;
};

function isOneBitCharacter2(bits){
	let i = bits.length-2;
	while(i>=0 && bits[i]>0){
		i--;
	}
return (bits.length-2-i)%2==0;
}
let testcase = isOneBitCharacter2([1,1,1,0]);
console.log(testcase);
export default isOneBitCharacter;
