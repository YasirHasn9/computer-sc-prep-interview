const {
  containsDuplicates,
  containsDuplicates_1,
  containsDuplicates_2,
} = require("./containsDuplicate");

const { twoSum } = require("./twoSum");

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
