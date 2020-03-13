/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(this.min.length == 0 || this.min[this.min.length-1] >= x){
        this.min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min.shift();
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


 export default MinStack;