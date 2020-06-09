/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

var longestPalindrome = function (string) {
  var result = '';

  var innerFunc = function (a, b) {
    while (a >= 0 && b < string.length && string[a] === string[b]) {
      a--;
      b++;
    }
    return string.slice(a + 1, b);
  };

  for (var i = 0; i < string.length; i++) {
    var case1 = innerFunc(i - 1, i + 1);
    var case2 = innerFunc(i, i + 1);
    if (case1.length > result.length) {
      result = case1;
    }
    if (case2.length > result.length) {
      result = case2;
    }
  }
  return result;
};

console.log(longestPalindrome('My dad is a racecar athlete'));
