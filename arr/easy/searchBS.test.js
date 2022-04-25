// find a number in sorted array of numbers
// The idea is to search a value in a sorted array
function search(numbers, target) {
  let index = Math.ceil((numbers.length - 1) / 2);
  let [left, right] = [0, numbers.length - 1];
  while (left <= right) {
    if (numbers[index] === target) return index;
    else if (target > numbers[index]) {
      left = index + 1;
      index = Math.ceil((left + right) / 2);
    } else {
      right = index - 1;
      index = Math.ceil((left + right) / 2);
    }
  }
  return -1;
}
describe("search()", () => {
  it("Function should use a binary search to find a target in a sorted array, if not found it return -1", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
    expect(search([-1, 0, 3, 5, 9, 12], 10)).toBe(-1);
  });
});
