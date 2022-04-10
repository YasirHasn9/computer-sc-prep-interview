// leetCode https://leetcode.com/problems/min-stack/
// the idea is to Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

class Stack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(val) {
    this.stack.push(val);
    // if (!this.min.length || this.min[this.min.length - 1] >= val) {
    //   this.min.push(val);
    // }
    if (this.min.length > 0) {
      this.min.push(
        this.min[this.min.length - 1] > val
          ? this.min[this.min.length - 1]
          : val
      );
    }
  }

  pop() {
    let poppedValue = this.stack.pop();
    this.min.pop();
    return poppedValue;
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.min[this.min.length - 1];
  }
}

describe("Construct Stack", () => {
  it("A stack that supports push, pop, top, and retrieving the minimum element in constant time.", () => {
    const stack = new Stack();
    stack.push(-2); // [-2,0,-3]
    stack.push(0);
    stack.push(-3);
    let min = stack.getMin();
    expect(stack.getMin()).toBe(min);
    let popped = stack.pop();
    // stack.top();
    expect(popped).toBe(-3);
    min = stack.getMin();
    expect(stack.getMin()).toBe(min);
  });
});
