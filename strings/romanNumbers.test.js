// We are given roman number and we need to convert them into integers.
// We have a several rules
// I: 1
// V: 5
// X: 10
// L: 50
// C: 100
// D: 500
// M: 1000

// numbers are written from largest to smallest, from left to right
// L
// |
// | |
// | | | S
// | | | |

// each Roman can't be repeated more than 3 times, which means IIII isn't representing
// the number 4 but IV does because we subtract the I from V.
// given rules
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// So technically, if the Roman is less then the one next to it then its a subtracting
// otherwise, its a addition

function romanToInt(s) {
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
  for (let i = 0; i < s.length; i++) {
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
