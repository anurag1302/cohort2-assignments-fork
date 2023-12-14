/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length === 0) {
    return true;
  }
  str = str
    .replaceAll(" ", "")
    .replaceAll(/[^\w\s]/gi, "")
    .toLowerCase();

  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }

  return reverseStr == str;
}

module.exports = isPalindrome;
