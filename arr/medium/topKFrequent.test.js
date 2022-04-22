//  we are given an array of numbers
// we should find the k most frequent elements in the array
// for example arr = [1,1,1,4,4,3], k = 2
// output: [1,4] because 1 repeated 3, and 4 repeated 2

// Thinking out loud
// create a hash table
// each num would be a key and its value would be an object
// num:{
//     key: num,
//     value: frequency of num
// }

// then iterate over the hash table to get values.
//  sort them by values
// slice them 0, k
//  map only keys

function topKFrequent(numbers, k) {
  const ht = {};
  numbers.forEach((num) => {
    if (ht[num]) ht[num].value++;
    else {
      ht[num] = {
        key: num,
        value: 1,
      };
    }
  });

  return Object.values(ht)
    .sort((a, b) => b.value - a.value)
    .slice(0, k)
    .map((obj) => obj.key);
}

describe("topKFrequent()", () => {
  it("Function should k most frequent element in the array of numbers", () => {
    const input = [4, 1, -1, 2, -1, 2, 3];
    const k = 2;
    expect(topKFrequent(input, k)).toEqual([2, -1]);
    expect(topKFrequent(input, k)).toEqual(expect.arrayContaining([-1, 2]));
  });
});
