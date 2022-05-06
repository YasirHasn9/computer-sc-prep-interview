// Problem: We are given string as a Roman number and we need to convert it into integer.
// Given rules
// I: 1
// V: 5
// X: 10
// L: 50
// C: 100
// D: 500
// M: 1000
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// numbers are written from largest to smallest, from left to right.
// each Roman number(symbol) can't be repeated more than 3 times, which means IIII isn't representing the number 4, but IV does because we subtract the I from V (I found the key here ).

// So technically, if the Roman is less then the one next to it then its a subtracting
// otherwise, its a addition
//  for example
// if the the Roman number was 1954
// we categorize the number like this      M   | D       C | L   X |5   1|
//                                       1000  |500     100|50   10|V   I|

//                               1954 =  1000  +     900    +  50   +   4
// pay attention to what I did, I simply rewrite the number by categorize its values
// now, count how 1000s do I have, its just one. Great, do I have a symbol that represent a 1000? yes I do, great
// How many 100s do I have?  its 900, do I have a symbol represents 900? no, i dont, then what do you have ?
// I go check the table and also I have to consider the constraints of the problems.
// I can make D + CCCC, oh I cant because I have a C repeated symbols which against the rules
// but we get 900 is we have CM, because we subtract the C from M which means 1000 - 100 = 900
// Great, move to 50, do I have a symbol represents 50? yes, i do. Move next
// 4, do I have a symbol represents a 4 ? no, great but I do have 5 and 1, which I can use the same method with 900 where I out the small number before the big the numbers so I can make  subtract.
// Okay, to get 4, we should put I before V = IV ==> V - I = 5-1 = 4.
// So the pattern is if the char at index 0 represents a symbol that is less the one at the index 1, then we have a subtract, otherwise its addition
function romanToInt(s) {
  // hard coded the symbols
  const mapRomanToValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let value = 0;
  // iterate over every char
  for (let i = 0; i < s.length; i++) {
    // check if we are not at the last char
    // and if the char at index is less the char on the index+1, then subtract, other wise its addition
    if (
      i + 1 !== s.length &&
      mapRomanToValues[s[i]] < mapRomanToValues[s[i + 1]]
    ) {
      value -= mapRomanToValues[s[i]];
    } else {
      value += mapRomanToValues[s[i]];
    }
  }
  return value;
}
describe("romanToInt()", () => {
  it("Function should receive a string as Roman number and convert it to a number", () => {
    expect(romanToInt("III")).toBe(3);
  });
});
