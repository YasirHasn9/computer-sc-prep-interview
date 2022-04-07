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

function isAnagram_1(str1, str2) {
  if (str1.length !== str2.length) return false;
  let freq = {};
  for (let i in str1) {
    freq[str1[i]] ? freq[str1[i]]++ : (freq[str1[i]] = 1);
    freq[str2[i]] ? freq[str2[i]]-- : (freq[str2[i]] = -1);
  }
  for (let key in freq) {
    if (freq[key] > 0) return false;
  }
  return true;
}

describe("isAnagram()", () => {
  test("The function should return true if two strings are anagram", () => {
    expect(isAnagram("tea", "ate")).toBeTruthy();
    expect(isAnagram_1("tea", "ate")).toBeTruthy();
  });
});
