// jshint esversion:6

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Iterative solution
function vowels(str) {
  let number = 0;
  let vowelCheck = ["a", "e", "i", "o", "u"];

  for (char of str.toLowerCase()){
    if (vowelCheck.includes(char)){
      number ++;
    }
  }

  return number;
}

// Using a regular expression
function vowels(str){
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
