/*
We are give a string and a key(is a number ), the key represents the times the string should shift in the alphabet 
For example, if the string is "abc", and the key 2. Then the result is "cde" because if we take a look at the alphabet here "abcdef...z"
you see when we shift the letter a 2 time, we got c. But what if we have xyz then the output should zab, it rotates back since there is no letter after z


How can we solve it ?
1. iterate over each letter and find the unicode by using the built-in function. 
2. combined the unicode with the key + 96 to find the unicode to the new letter 
    check if the unicode is greater > 96 and < 122, otherwise its gonna different character
    the reason, we start to find the number between these numbers is 
    because a = 97 and z = 122 and what between them are representing the unicode numbers for the letters

3. to make sure we are not going below the 97 and above the 122
we divide the unicode by % 122 to get the modular

4. but what if the key is a high a number such 50 and above, we can tame it by using % over the number of letters in the English language (26)
*/

function caesarCipher(s, key) {
  key = key % 26;
  let output = "";
  for (let letter of s) {
    let unicode = letter.charCodeAt() + key;
    if (unicode > 122) {
      unicode = 96 + (unicode % 122);
    }
    output += String.fromCharCode(unicode);
  }
  return output;
}

describe("caesarCipher()", () => {
  it("The function should return a new string that shifted by key times", () => {
    const input = "xyz";
    const res = "zab";
    expect(caesarCipher(input, 2)).toBe("zab");
  });
});
