// We are given an array of numbers, find the max sum of three non-adjacent numbers
// in the array
// 1. create a maxSums array that have the same length as the main array
// 2. maxSums will hold the value for each computation
// 3. when we loop over it, the index before the current one would be
// the last sum we have
// maxSums[1] = max(maxSums[0] , maxSums[1])
function maxSubsetSumNoAdjacent(arr) {
  if (!arr.length) return 0;
  if (arr.length === 1) return arr[0];
  const maxSums = arr.slice();
  maxSums[1] = Math.max(maxSums[0], maxSums[1]);
  for (let i = 2; i < arr.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + arr[i]);
  }
  return maxSums[maxSums.length - 1];
}
describe("maxSubsetSumNoAdjacent()", () => {
  it("Function should return the max sum of three non-adjacent numbers in the array", () => {
    expect(maxSubsetSumNoAdjacent([7, 4, 3, 11, 14])).toBe(24);
  });
});
