// we are given an array of integers
// the requirement is to find 3 three number that the sum of them is 0

//Thinking out loud
// edge cases, what if the length of the array less than 3 numbers
// since we have 3 numbers, in my mind it means i need 3 pointers, so I can move right and left of the array
// to make my life easier im gonna sort the array, so I can perform a binary search

// create an output array for the result
// iterate over the array
// when index >0 and array[index - 1] === [index], then don't do a thing ... just keeping with your life

// it means the index is a pointer, so I need a 2 more
// left pointer is gonna start at index + 1 and right gonna start from the end

// when left < right, get the sum of the three pointers,
// if sum === 0 push them the output array
// the constrains is that index on the three pointers should not be the same, which means no duplicated values
// so we need to check the pointers
// make sure that array[left] === array[left + 1] it means we have duplicate, then move left one step
// make sure that array[right] === array[right - 1] it means we have duplicate, then right one step back
// but anyways keep left and right moving a step when we have a match

// if sum is less than 0, it means we need increase in the value, then move left one step up because we are in a sorted array
// move right back when sum > 0

function sumThreeNumbers(numbers) {
  if (numbers.length < 3) return [];
  numbers.sort((A, B) => A - B);

  const output = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i > 0 && numbers[i - 1] === numbers[i]) continue;

    let left = i + 1,
      right = numbers.length - 1;
    while (left < right) {
      let sum = numbers[i] + numbers[left] + numbers[right];
      if (sum === 0) {
        output.push([numbers[i], numbers[left], numbers[right]]);

        while (left + 1 && numbers[left + 1] === numbers[left]) left++;
        while (right - 1 && numbers[right - 1] === numbers[right]) right--;

        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return output;
}

function flattenArray(arr) {
  return arr.reduce((acc, cur) => [...acc, ...cur], []);
}
describe("sumThreeNumbers()", () => {
  it("The function should return an array of arrays of 3 numbers that equal to Zero", () => {
    const numbers = [-1, 2, -1, 0, 1, -4];
    const output = flattenArray([
      [-1, -1, 2],
      [-1, 0, 1],
    ]).sort();
    const solution = flattenArray(sumThreeNumbers(numbers)).sort();
    output.map((res) => expect(solution).toContain(res));
  });
});
