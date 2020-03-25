var MaxQueue = function() {
    this.list = [];
    this.maxlist = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if (this.list.length === 0) {
        return -1;
    }
    return this.maxlist[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    while (value > this.maxlist[this.maxlist.length - 1]) {
        this.maxlist.pop();
    }
    this.list.push(value);
    this.maxlist.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if (this.list.length === 0) {
        return -1;
    }
    let temp = this.list.shift();
    if (this.maxlist[0] === temp) {
        this.maxlist.shift();
    }
    return temp;
};



var MaxQueue = function() {
    this.q = [];
    this.max = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.max.length == 0){
        return -1;
    }
    return this.max[this.max.length-1];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.q.push(value);
    if(this.max.length == 0 || value >= this.max[this.max-1]){
        this.max.push(value);
    }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    
    if(this.q.length == 0){
        return -1;
    }
    let tmp = this.q.shift();
    if(tmp == this.max[0]){
        this.max.shift();
    }
    return tmp;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */