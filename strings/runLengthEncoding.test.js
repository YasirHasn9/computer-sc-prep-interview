// We are given a string, and we should return its Run Length encoding
// for example
// input: AAABBCC
// output 3A2B2C

// Long run should be less then 10 which means we can't decode AAAAAAAAAAAA into 12A
// but we can do 9A3A

// STAR
// Situation: we have a non-empty string
// Task: we should return a decoded version of it
// Action: Iterate over the string and check if we they consecutive characters
// if they are, then create a length that represents its length
// and if we have more that 9, then we should start over and count from 1
// and if we dont have consecutive ones, then we just count them and reset the length to one each to we have different char

// Result: length of character + character

function runLengthEncoding(str) {
  const encodedStrings = [];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    const cur = str[i];
    let prev = str[i - 1];
    if (cur !== prev || count === 9) {
      encodedStrings.push(count.toString());
      encodedStrings.push(prev);
      count = 0;
    }
    count++;
  }

  // to handle the last char
  encodedStrings.push(count.toString());
  encodedStrings.push(str[str.length - 1]);
  return encodedStrings.join("");
}

describe("runLengthEncoding", () => {
  it("Function should return the run length encoding of each char", () => {
    expect(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD")).toMatch("9A4A2B4C2D");
    expect(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD")).toBe("9A4A2B4C2D");
  });
});
