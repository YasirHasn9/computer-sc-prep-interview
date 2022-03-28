const {
  missingNumberWithSortedArr,
  missingNumber,
} = require("./missingNumber");

describe("missingNumber()", () => {
  test("returned the missing number in the array of numbers", () => {
    const nums = [3, 0, 1];
    const output = 2;
    expect(missingNumber(nums)).toBe(output);
    expect(missingNumberWithSortedArr(nums)).toBe(output);
  });
});
