// https://leetcode.com/problems/missing-number/
// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.
// input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers,
//  so all numbers are in the range [0,3].
// 2 is the missing number in the range since it does not appear in nums.

// dont manipulate
function missingNumber(nums) {
  let sums = (nums.length * (nums.length + 1)) / 2;
  for (const num of nums) {
    sums -= num;
  }
  return sums;
}

// sort the array
function missingNumberWithSortedArr(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }

  return nums.length;
}

describe("missingNumber()", () => {
  test("returned the missing number in the array of numbers", () => {
    const nums = [3, 0, 1];
    const output = 2;
    expect(missingNumber(nums)).toBe(output);
    expect(missingNumberWithSortedArr(nums)).toBe(output);
  });
});
