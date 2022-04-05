const { TestWatcher } = require("jest");
const { isPalindrome } = require("./isPalindrome");

describe("isPalindrome()", () => {
  test("the function return true if string palindrome of false otherwise", () => {
    let str = "A man, a plan, a canal: Panama";
    expect(isPalindrome(str)).toBeTruthy();
  });
});
