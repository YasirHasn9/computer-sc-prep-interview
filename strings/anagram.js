// you are given 2 strings, find if they anagram

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  let freq = {};
  for (let char of s1) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of s2) {
    if (!freq[char]) return false;
    else {
      freq[char] -= 1;
    }
  }
  for (const key in freq) {
    if (freq[key] > 0) return false;
  }
  return true;
}
// console.log(isAnagram("racecar", "carrace"));
