/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let stack = [];
    let total = 0;
    for(let i = 0;i<ops.length;i++){
        if(ops[i] == '+'){
        	if(stack.length >1){
        		stack.push(stack[stack.length-1]+stack[stack.length-2]);
        	}           
        }else if(stack.length > 0 && ops[i] == 'D'){
            stack.push(stack[stack.length-1]*2);
        }else if (ops[i] == 'C'){
            stack.pop();
        }else{
            stack.push(parseInt(ops[i]));
        }
    }
    while(stack.length >0){
        total += stack.pop();
    }
    console.log(stack);
    return total;
};

let testcase = calPoints(["5","2","C","D","+"]);
console.log(testcase);
export default calPoints;