// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicates(nums) {
  return new Set(nums).size < nums.length;
}

function containsDuplicates_1(nums) {
  let set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}

function containsDuplicates_2(nums) {
  let hashTable = {};
  for (const num of nums) {
    if (hashTable[num]) return true;
    hashTable[num] = true;
  }
  return false;
}

module.exports = {
  containsDuplicates,
  containsDuplicates_1,
  containsDuplicates_2,
};
