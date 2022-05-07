// find a number in sorted array of numbers
// The idea is to search a value in a sorted array
function search(numbers, target) {
  let index = mid(numbers.length - 1);
  let [left, right] = [0, numbers.length - 1];
  while (left <= right) {
    if (numbers[index] === target) return index;
    else if (target > numbers[index]) {
      left = index + 1;
      index = mid(left + right);
    } else {
      right = index - 1;
      index = mid(left + right);
    }
  }
  return -1;
}

function mid(num1 = 0, num2 = 0) {
  return Math.ceil((num1 + num2) / 2);
}
describe("search()", () => {
  it("Function should use a binary search to find a target in a sorted array, if not found it return -1", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
    expect(search([-1, 0, 3, 5, 9, 12], 10)).toBe(-1);
  });
});
