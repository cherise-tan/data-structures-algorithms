// jshint esversion:6

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for(let char of str){
    charMap[char] = charMap[char] + 1 || 1;
  }

  for(let char in charMap){
    if (charMap[char] > max){
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;  
}

// First define a new object
// Iterate through the string, using a for-of loop
  // For each character, if it already exists -> increment the value by 1
  // If it does not already exist -> set the value to 1

// Set two helper variables at the top of the function
  // Iterate through the object using a for-in loop
  // 'max' will be incremented to the highest number in the object
  // 'maxChar' will be set as the character value matching the highest number

module.exports = maxChar;
