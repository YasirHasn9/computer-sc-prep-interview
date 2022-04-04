// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// naive way
function searchRange(arr, target) {
  let res = [-1, -1];
  let first = 0;
  let last = arr.length - 1;
  while (first <= last) {
    if (arr[first] === target) {
      res[0] = first;
      break;
    }
    first++;
  }
  while (last >= first) {
    if (arr[last] === target) {
      res[1] = last;
      break;
    }
    last--;
  }
  return res;
}
function first_and_last(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === target) {
      let start = i;
      while (i < nums.length && nums[i + 1] === target) {
        i++;
      }
      return [start, i];
    }
  }
  return [-1, -1];
}

function sec_first_and_last(nums, tar) {
  let start = bs(nums, tar);
  if (start === -1 || nums.length === 0) return [-1, -1];

  let end = start;
  while (end + 1 < nums.length && nums[end + 1] === tar) {
    end++;
  }
  return [start, end];
}

function bs(arr, t) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === t && arr[mid - 1] !== t) {
      return mid;
    }
    if (t < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

let nums = [2, 4, 5, 5, 5, 5, 5, 7, 9];
console.log(sec_first_and_last(nums, 9));
console.log(first_and_last(nums, 9));
console.log(searchRange(nums, 9));

module.exports = {
  first_and_last,
  sec_first_and_last,
  searchRange,
};
