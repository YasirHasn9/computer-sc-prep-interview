/*
Given a string A and a dictionary of words B,
 determine if A can be segmented into a space-separated sequence of one or more dictionary words.
Input Format:
The first argument is a string, A.
The second argument is an array of strings, B.

Output Format:
Return 0 / 1 ( 0 for false, 1 for true ) for this problem.

Examples:

Input 1:
    A = "myinterviewtrainer",
    B = ["trainer", "my", "interview"]

Output 1:
    1

    Explanation 1:
    Return 1 ( corresponding to true ) because "myinterviewtrainer" can be segmented as "my interview trainer".

Input 2:
    A = "a"
    B = ["aaa"]

Output 2:
    0

Explanation 2:
    Return 0 ( corresponding to false ) because "a" cannot be segmented as "aaa".
*/

function wordBreak(str, listOfWord) {
  const dp = new Array(len(str) + 1).fill(false);
  dp[len(str)] = true;
  for (let i = len(str) - 1; i > -1; i--) {
    for (let word of listOfWord) {
      if (
        len(word) <= len(str) - i &&
        word === str.substring(i, i + len(word))
      ) {
        dp[i] = dp[i + len(word)];
      }
      if (dp[i]) {
        break;
      }
    }
  }
  console.log(dp);
  return dp[0];
}

function len(obj) {
  return obj.length;
}

console.log(wordBreak("leetcode", ["leet", "code"]));
