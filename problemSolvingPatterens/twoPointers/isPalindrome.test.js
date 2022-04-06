// A phrase is a palindrome if,
// after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

function isPalindrome(s) {
  let regex = /[^A-Za-z]/g;
  s = s.replace(regex, "").toLowerCase();
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
describe("isPalindrome()", () => {
  test("the function return true if string palindrome of false otherwise", () => {
    let str = "A man, a plan, a canal: Panama";
    expect(isPalindrome(str)).toBeTruthy();
  });
});
