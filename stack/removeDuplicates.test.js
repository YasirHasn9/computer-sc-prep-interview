// Problem: we are given a string(s) and and number(k) that represents the number of a duplicate letter in the string
// Idea:  we need to search the string and if we find a letter with (k) duplicate we should delete form the string
// and concatenate the res.
// For Example, if we have
// Input:
// s = deeedbbcccbdaa
//  k = 3
// Output:
// aa because we have 3ds, 3es, 3bs, 3cs, so we deleted them

// Now, how would we approach this solution
// 1. create a stack
// 2. we are gonna push each char with its frequency as [char, frequency] to the stack
// 3. if we have a char with frequency === k, then pop
// 4. iterate over the stack again
// 5. create an string with same frequency

function removeDuplicates(str, k) {
  let stack = [];
  for (let c of str) {
    if (stack.length > 0 && stack[stack.length - 1][0] === c) {
      stack[stack.length - 1][1]++;
    } else {
      stack.push([c, 1]);
    }

    if (stack[stack.length - 1][1] === k) stack.pop();
  }

  let res = "";
  for (let pair of stack) {
    let char = new Array(pair[1]).fill(pair[0]).join("");
    res += char;
  }
  return res;
}

describe("removeDuplicates", () => {
  it("Function should receive string and a number, remove the duplicate value with that number and return a string", () => {
    expect(removeDuplicates("deeedbbcccbdaa", 3)).toBe("aa");
  });
});
