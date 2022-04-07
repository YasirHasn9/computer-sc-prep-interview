// let { maxSubArray, maxSubArr } = require("./slidingWindow");
// let { lengthOfLongestSubstring } = require("../longestSubSrt");

// this is naive solution to find the max of consecutive n numbers in an array.
// Time Complexity: O(n^2)
function maxSubArr(arr, n) {
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
}
// console.log(maxSubArray([1, 2, 5, 2, 8, 1, 5], 4));

function maxSubArray(arr, n) {
  // edge cases
  if (n > arr.length) return null;
  let maxNum = 0;
  let tempNum = 0;
  for (let i = 0; i < n; i++) {
    // assuming that we have the max Number by combining the first n number in the array
    maxNum += arr[i];
  }
  // now make the temp is max number
  tempNum = maxNum;
  // iterate over the array from n position
  for (let i = n; i < arr.length; i++) {
    // since the temp is the max, then subtract first number from the array from temp
    tempNum = tempNum - arr[i - n] + arr[i];
    maxNum = Math.max(maxNum, tempNum);
  }
  return maxNum;
}

function averageOfKNumsInArr(arr, k) {
  let sum = 0;
  let left = 0;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      res.push(sum);
      sum -= arr[left];
      left++;
    }
  }
  return res;
}
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
