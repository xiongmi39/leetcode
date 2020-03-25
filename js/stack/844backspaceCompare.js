/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    return getStr(S) === getStr(T);
   function getStr(str){
       let stack = [];
       for (let a of str){
           if(a === '#'){
               stack.pop();
           }else{
               stack.push(a)
           }
       }
       console.log(stack.join(''));
       return stack.join('');
   }
};

let testcase = backspaceCompare("xywrrmp","xywrrmu#p");
console.log(testcase);
export default backspaceCompare;