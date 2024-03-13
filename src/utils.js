// Your code here
function reverse(string) {
    return string.split("").reverse().join("");
  }
  export function isPalindrome(word) {
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord === reverse(lowerCaseWord);
  }