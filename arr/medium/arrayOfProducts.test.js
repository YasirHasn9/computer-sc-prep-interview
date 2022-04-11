//Source: Leetcode https://leetcode.com/problems/product-of-array-except-self/
/*
The idea is that we are given an array of numbers, we should calculate the product for all numbers
in the array expect the number itself
for example 
numbers = [5,1,4,2]
5 = 1 * 4 * 2 = 8 
1 = 5 * 4 * 2 = 40
4 = 5 * 1 * 2 = 10
2 = 5 * 1 * 4 = 20
so our output should be [8,40,10,20]
*/

/*
Thinking out loud
1. create 3 arrays left, right, and result with the same length as numbers
2. fill them with 1
3. create a variable let's name it product or runningProduct
4. iterate over numbers form the left
    a. add to left the product
    b. multiply product by the next number in the array 
    Example:
    numbers = [5,1,4,2]
    product = 1
    ----------------------
    left[i] = product 
    product*=numbers[i]
    left = [1, 5, 5, 20]
5. iterate over numbers from the right
    a. add to right the product
    b. multiply product by the next number in the array from the right
    Example:
    numbers = [5,1,4,2]
    product = 1
    right[i = numbers.length - 1] = product 
    product*=numbers[i]
    left = [8, 8, 2, 1]
6. iterate again over numbers
   result[i] = left[i] * right[i]
   result = [8,40,10,20]
*/
function arrayOfProducts_0(numbers) {
  const [left, right, res] = [
    new Array(numbers.length).fill(1),
    new Array(numbers.length).fill(1),
    new Array(numbers.length).fill(1),
  ];

  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    left[i] = product;
    product *= numbers[i];
  }

  product = 1;
  for (let i = numbers.length - 1; i >= 0; i--) {
    right[i] = product;
    product *= numbers[i];
  }

  numbers.forEach((_, i) => {
    res[i] = left[i] * right[i];
  });

  return res;
}

/*
Thinking out loud
1. create result with the same length as numbers
2. fill result with 1
3. create a variable let's name it product or runningProduct
4. iterate over numbers form the left
    a. multiply product by the next number in the array 
    b. multiply result[i + 1] * product
    Example:
    result = [1,1,1,1]
    numbers = [5,1,4,2]
    product = 1
    ---------------------
    product *= numbers[i]
    result[i + 1]*= product
    ---------------------
   -->    result = [1,5,5,20]
5. iterate over numbers from the right
    a. multiply product by the next number in the array from the right
    b. multiply result[i - 1] * product
    Example:
    numbers = [5,1,4,2]
    product = 1
    ----------------------
    product *= numbers[i = numbers.length - 1]
    result[i -1]*= product
    ------------------
    result --> left = [8, 40, 10, 20]
6. iterate again over numbers
   result[i] = left[i] * right[i]
   result = [8,40,10,20]
*/
var arrayOfProducts_1 = function (nums) {
  let result = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    prefix *= nums[i];
    result[i + 1] *= prefix;
  }

  let postfix = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    postfix *= nums[i];
    result[i - 1] *= postfix;
  }

  return result;
};

/*
Thinking out loud
1. create a hash table
2. Iterate over the number
3. on each iteration, copy the array
4. and remove the number at that index, or replace with 1
5. get the product from the  copy array 
6. store index as key and the product of the copied array as value
7. return the values of the hash table
*/
function arrayOfProducts_2(arr) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let sliced = arr.slice(0);
    sliced.splice(i, 1, 1);
    hash[i] = getProduct(sliced);
  }
  return Object.values(hash);
}

function getProduct(arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);
}

describe("arrayOfProducts()", () => {
  it("Function return an array of the products of all the numbers in the array", () => {
    let expected = [8, 40, 10, 20];
    let numbers = [5, 1, 4, 2];
    let solution_0 = arrayOfProducts_0(numbers);
    expected.map((num) => expect(solution_0).toContain(num));
    expect(solution_0).toEqual(expect.arrayContaining(expected));
    expect(solution_0).toEqual(expect.arrayContaining(expected));

    let solution_1 = arrayOfProducts_1(numbers);
    expected.map((num) => expect(solution_1).toContain(num));
    expect(solution_1).toEqual(expect.arrayContaining(expected));
    expect(solution_1).toEqual(expect.arrayContaining(expected));

    let solution_2 = arrayOfProducts_0(numbers);
    expected.map((num) => expect(solution_2).toContain(num));
    expect(solution_2).toEqual(expect.arrayContaining(expected));
    expect(solution_2).toEqual(expect.arrayContaining(expected));
  });
});
