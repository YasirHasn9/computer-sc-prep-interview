const {
  lengthOfLongestSubstring,
  lengthOfLongestSubstring_1,
} = require("./lengthOfLongestSubstring");

describe("lengthOfLongestSubstring()", () => {
  test("return the length of the longest substring within the given string ", () => {
    const str = "abcabcbb";
    const len = 3;
    expect(lengthOfLongestSubstring(str)).toBe(len);
    expect(lengthOfLongestSubstring_1(str)).toBe(len);
  });
});
