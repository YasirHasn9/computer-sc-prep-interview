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

describe("containsDuplicates()", () => {
  test(" function should return true if data has duplicated values", () => {
    const nums = [3, 2, 5, 3];
    const falselyNumber = [1, 2, 3, 4];
    //  return true
    expect(containsDuplicates(nums)).toBeTruthy();
    expect(containsDuplicates_1(nums)).toBeTruthy();
    expect(containsDuplicates_2(nums)).toBeTruthy();

    // return false
    expect(containsDuplicates(falselyNumber)).toBeFalsy();
    expect(containsDuplicates_1(falselyNumber)).toBeFalsy();
    expect(containsDuplicates_2(falselyNumber)).toBeFalsy();
  });
});
