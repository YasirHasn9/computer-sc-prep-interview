let { maxSubArray, maxSubArr } = require("./slidingWindow");
let { lengthOfLongestSubstring } = require("./longestSubSrt");

describe("maxSubArray()", () => {
  test("maxSubArray should return max of consecutive n numbers in an array ", () => {
    let res = 17;
    let arr = [1, 2, 5, 2, 8, 1, 5];
    expect(maxSubArray(arr, 4)).toBe(res);
  });
});

describe("maxSubArr()", () => {
  test("Another naive function of maxSub", () => {
    let res = 17;
    let arr = [1, 2, 5, 2, 8, 1, 5];
    expect(maxSubArr(arr, 4)).toEqual(res);
  });
});

describe("lengthOfLongestSubstring(str: string)", () => {
  test("should return a number of the longest of non-repeating substring", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  });
});
