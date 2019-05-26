// jshint esversion:6

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Reverse the string and then compare input and output
function palindrome(str) {
  let reversed = "";

  for (var character of str){
    reversed = character + reversed;
  }

  return str === reversed;
}

// Using an array helper: Array.prototype.every()
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });

  // Will receive the first argument to this function as every element within the array
  // Takes two arguments:
    // The first is every element within the array (char)
    // The second is what we want to compare this to (i: the index of that element within the array)
}

module.exports = palindrome;
