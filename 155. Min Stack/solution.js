
var MinStack = function() {
    this.arrStack = []
    this.tempStack = []
    this.minElement = Number.MAX_VALUE
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arrStack.push(val)
    this.minElement = Math.min(this.minElement, val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.arrStack.pop() === this.minElement) {
        this.minElement = Number.MAX_VALUE
        this.tempStack = []
        while(this.arrStack.length > 0) {
            let popVal = this.arrStack.shift()
            this.tempStack.push(popVal)
            this.minElement = Math.min(this.minElement, popVal)
        }
        this.arrStack = [...this.tempStack]
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arrStack[this.arrStack.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minElement
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2