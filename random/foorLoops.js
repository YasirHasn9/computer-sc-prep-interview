/*
I was curious about what is the fasts loops,Because in js such as many other languages have for loops.
It turns out the for(reverse) function loop is the fastest.
*/

console.time("");

const million = 1000000;
const array = Array(million);
for (let i = array.length; i >= 0; i--) {
  // console.log()
}
// array.forEach((v) => v);
// for (const val of array) {
// }
console.timeEnd("");

// well, the other loops are performant and there's slightly different speed, not even
// recognizable
