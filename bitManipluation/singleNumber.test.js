// O(n) Time/Space
function singleNumber(nums) {
  const ht = {};
  for (let num of nums) {
    ht[num] = (ht[num] || 0) + 1;
  }
  for (let num in ht) {
    if (ht[num] === 1) return Number(num);
  }
  return -1;
}

// function singleNumberWithConstantSpace(nums) {}

describe("singleNumber()", () => {
  it("Function should find the only value that is not repeated in the array", () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });
});
