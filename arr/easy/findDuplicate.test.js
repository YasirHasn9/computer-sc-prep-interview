// SOURCE: leetcode https://leetcode.com/problems/find-the-duplicate-number/
/*
The idea we are given a an array of numbers. Each number is in the range of (1,n) where n is the length of the array.
The should return the first duplicate number in the array
*/

/*
THINKING OUT LOUD
1. create a hash table || set
2. store number as a key in the table || add the number to set
3. store boolean as a value in the table 
4. if number found in the table, return it || if set has a value, then return it
5. if number not found, return -1 
*/

// using hash tables|| dictionaries
// O(n) time | O(n) space
function findDuplicate_0(array) {
  const hashTable = {};
  for (const value of array) {
    if (hashTable[value]) return value;
    hashTable[value] = true;
  }

  return -1;
}

// using sets
// O(n) time | O(n) space
function findDuplicate_1(array) {
  const set = new Set();
  for (const value of array) {
    if (set.has(value)) return value;
    set.add(value);
  }

  return -1;
}

/*
can we do it with a constant space ? Yes
since the numbers in the array are integers in the range(1,n), then we can use indices to map values to each other
which means any value in the array - 1 = the index that represents it
value - 1 = index   ---> -1 because we integers in range(1,n)
for Example 
-------------------------
keep in mind our formula 
number - 1 = index
array[index] = number
----------------------
nums = [2,1,5,3,3,2]
2- 1 = 1
nums[1] = 2

1-1 = 0
nums[0] = 1

5-1 = 4
nums[4] = 5

3-1 = 2
nums[2] = 3

3-1 = 2
nums[2] = 3 then we have a duplicated value 
*/

function findDuplicate_2(numbers) {
  for (const num of numbers) {
    let value = Math.abs(num);
    if (numbers[value - 1] < 0) return value;
    numbers[value - 1] *= -1;
  }
  return -1;
}

describe("findDuplicate()", () => {
  it("Function should return the first duplicated value, or -1 if not found", () => {
    // found
    const foundValue = [2, 1, 5, 3, 3];
    expect(findDuplicate_0(foundValue)).toBe(3);
    expect(findDuplicate_1(foundValue)).toBe(3);
    expect(findDuplicate_2(foundValue)).toBe(3);

    // not found
    const notFound = [2, 1, 5, 3];
    expect(findDuplicate_0(notFound)).toBe(-1);
    expect(findDuplicate_1(notFound)).toBe(-1);
    expect(findDuplicate_2(notFound)).toBe(-1);
  });
});
