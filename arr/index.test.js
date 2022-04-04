const {
  missingNumberWithSortedArr,
  missingNumber,
} = require("./missingNumber");

const {
  sec_first_and_last,
  first_and_last,
  searchRange,
} = require("./searchRange");

describe("missingNumber()", () => {
  test("returned the missing number in the array of numbers", () => {
    const nums = [3, 0, 1];
    const output = 2;
    expect(missingNumber(nums)).toBe(output);
    expect(missingNumberWithSortedArr(nums)).toBe(output);
  });
});

describe("searchRange()", () => {
  test("find the last and end position in a sorted arr of numbers ", () => {
    // let nums = [2, 4, 5, 5];
    let nums = [2, 4, 5, 5, 5, 5, 5, 7, 9, 9];
    expect(first_and_last(nums, 19)).toEqual([-1, -1]);
    expect(first_and_last(nums, 9)).toEqual([8, 9]);
    expect(sec_first_and_last(nums, 9)).toEqual([8, 9]);
    expect(searchRange(nums, 9)).toEqual([8, 9]);
  });
});
