// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
  const ht = {};
  for (let i = 0; i < nums.length; i++) {
    let num2 = target - nums[i];
    if (ht[num2] !== undefined) {
      return [ht[num2], i];
    }
    ht[nums[i]] = i;
  }
  return [-1, -1];
}

describe("twoSum()", () => {
  test("function should return the indices of 2 numbers in the array if the sum of them is target", () => {
    // found
    const nums = [2, 7, 11, 4];
    let target = 9;
    let foundTarget = [0, 1];
    foundTarget.map((m) => expect(twoSum(nums, target)).toContain(m));
    expect(twoSum(nums, target)).toEqual(expect.arrayContaining(foundTarget));

    //  Not found
    let f_target = 10;
    let notFoundTarget = [-1, -1];
    notFoundTarget.map((m) => expect(twoSum(nums, f_target)).toContain(m));
    expect(twoSum(nums, f_target)).toEqual(
      expect.arrayContaining(notFoundTarget)
    );
  });
});
