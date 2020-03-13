/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = ['s'];
    let dic = {'(':')','{':'}','[':']','s':'sb'};
    for(let i of s){
        if(dic[i]){
            stack.push(i);
        }else{
            if(dic[stack[stack.length -1]] === i){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    if(stack.length == 1){
        return true;
    }
    return false;
};

let testcase = isValid("()[]{}");
console.log(testcase);
export default isValid;