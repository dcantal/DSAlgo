class Stack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        if(this.stack.length < 1) {
            this.stack.push([val, val]);
        } else {
            this.stack.push([val, Math.max(this.stack[this.stack.length-1][1], val)]);
        }
    }

    pop() {
        this.stack.pop();
    }

    max() {
        return this.stack[this.stack.length - 1][1];
    }
}

const test  = new Stack();
test.push(1);
console.log(test.max());
test.push(3);
console.log(test.max());
test.push(4);
console.log(test.max());
test.pop();
console.log(test.max());
test.push(6);
console.log(test.max());
test.push(4);
console.log(test.max());
test.pop();
console.log(test.max());
test.pop();
console.log(test.max());