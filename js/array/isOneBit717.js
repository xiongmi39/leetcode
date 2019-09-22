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

let testcase = isOneBitCharacter([1,1,1,0]);
console.log(testcase);
export default isOneBitCharacter;
