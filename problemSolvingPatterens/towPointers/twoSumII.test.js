// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
/*
The idea is the given array because its an 1-indexed array and a target 
return [index1 , index2] that represents the sum of the target

so the idea is to loop over the array and creating an index start at one, and increase on each loop
create a hash table where each number is gonna be a key and the index its values
*/

function towSumII(numbers, target) {
  let hashTable = {};
  let index = 1;
  for (let i = 0; i < numbers.length; i++) {
    let num2 = target - numbers[i];
    if (hashTable[num2]) return [hashTable[num2], index];
    hashTable[numbers[i]] = index;
    index++;
  }
}

describe("towSumII", () => {
  test("It should return the indices of the 2 numbers to sum target", () => {
    let numbers = [2, 7, 11, 15],
      target = 9;
    let expected = [1, 2];
    // expected
    expect(towSumII(numbers, target)).toEqual(expected);
    expected.map((num) => expect(towSumII(numbers, target)).toContain(num));

    expect(towSumII(numbers, target)).toEqual(expect.arrayContaining(expected));
  });
});
