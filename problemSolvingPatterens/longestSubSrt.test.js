// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

function lengthOfLongestSubstring(s) {
  let [right, left, len, set] = [0, 0, 0, new Set()];
  // return s.slice(0 , 3)
  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      len = Math.max(len, set.size);
      right++;
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return len;
}
describe("lengthOfLongestSubstring(str: string)", () => {
  test("should return a number of the longest of non-repeating substring", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  });
});
