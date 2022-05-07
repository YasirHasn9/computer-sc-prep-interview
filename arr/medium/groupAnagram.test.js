// https://leetcode.com/problems/group-anagrams/
/*
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the 
letters of a different word or phrase, typically using all the original letters exactly once.
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

// Thinking out loud
// the idea is that we have a list of words, words are different but some of them
//  are anagram. We are asked to gather all the anagrams in separate array and output
// them all as one array; Array of arrays

// what to do?
// create hash table
// sort each word and store it as a key in the table
// iterate over the rest to see if we have anagram word
// then iterate over the hash table and get its values

function groupAnagram(words) {
  let ht = {};
  for (let word of words) {
    let key = sortKey(word);
    if (ht[key]) {
      ht[key].push(word);
    } else {
      ht[key] = [word];
    }
  }

  return Object.values(ht);
}

function sortKey(key) {
  return key.split("").sort().join("");
}
describe("groundAnagram()", () => {
  test("The function should return an array of anagram words arrays", () => {
    const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
      .reduce((acc, cur) => [...acc, ...cur], [])
      .sort();

    const solution = groupAnagram(words)
      .reduce((acc, cur) => [...acc, ...cur])
      .sort();
    expected.map((m) => expect(solution).toContain(m));
    expect(solution).toEqual(expect.arrayContaining(expected));
  });
});
