// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
/*
Thinking our loud:
The idea is to find a sub string within the given string that has no duplicated values. 
we should return a number which is the length of it, what to do?

create a text that only have the unique consecutive letters 
and before we add a new letter we check its position by using a built-in function 
(string.indexOf()) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
it returns -1 if not found;  And > -1 if it found
if its not found then the make the text to be the substring that start from that position and above

add new letter to text 
get the max
*/
function lengthOfLongestSubstring(s) {
  let max = 0,
    txt = "",
    pos,
    char;
  for (let i = 0; i < s.length; i++) {
    char = s.charAt(i);
    pos = txt.indexOf(char);
    if (pos !== -1) {
      txt = txt.substring(pos + 1);
    }
    txt += char;
    max = Math.max(max, txt.length);
  }
  return max;
}
// console.log(lengthOfLongestSubstring("abcabcbb"));

// different solution using sets
/*
create a set https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
which hold a unique values
create 2 pointers right and left 
right is iterating over the sting and check if its in the set, if not then add it and get the max and move the right + 1
if found the set then delete a char from the left and move left one position 
*/

function lengthOfLongestSubstring_1(s) {
  let [right, left, len, set] = [0, 0, 0, new Set()];
  while (left < s.length) {
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
// console.log(lengthOfLongestSubstring("abcakbcbb"));
// console.log(lengthOfLongestSubstring_1("abcakbcbb"));

module.exports = {
  lengthOfLongestSubstring,
  lengthOfLongestSubstring_1,
};
