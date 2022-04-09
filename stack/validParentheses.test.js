// given
// string represents parentheses
// the idea is to write a function: It returns true if the parentheses are balanced
// for example str = "({)}" is balanced because there is an opening bracket "(" and there a closing one ")"
// and also there "{" and  "}" the distance between them is balanced as well

// how can we get to the solution?
// first, create a variable to hold only the opening bracket
//  the idea is to visit this variable to see if we have an opening bracket

// second, we create an object that hold the closing bracket as keys and closing bracket as values
// the idea is we create a stack that we add only the opening bracket to it.
// and then we pop each bracket and check against our object

function isValidParentheses(str) {
  const openBracket = "({[";
  const matchingBracket = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  const stack = [];
  for (const bracket of str) {
    if (openBracket.includes(bracket)) {
      stack.push(bracket);
    } else {
      if (stack.length === 0) return false;
      if (stack[stack.length - 1] === matchingBracket[bracket]) stack.pop();
      else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

describe("isValidParentheses()", () => {
  it("Function should return true for balanced brackets or false otherwise", () => {
    expect(isValidParentheses("()")).toBeTruthy();
    expect(isValidParentheses("()[]{}")).toBeTruthy();
    expect(isValidParentheses("{{({})}}")).toBeTruthy();
    expect(isValidParentheses("(]")).toBeFalsy();
  });
});
