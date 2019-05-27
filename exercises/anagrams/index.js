// jshint esversion:6

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
function anagrams(stringA, stringB) {
  // Build character maps
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  // Check if the character maps have the same number of keys
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  // Check if character map key:value pairs are equal
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}
// Write a helper function to make a character map for each string
function buildCharMap(str) {
  const charMap = {};
  // Add characters to the character map
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
    // Iterate through the string, using a for-of loop
    // For each character, if it already exists -> increment the value by 1
    // If it does not already exist -> set the value to 1
  }
  // Return to the character map
  return charMap;
}

// Solution 2: use the array sort() helper function
function anagrams(stringA, stringB){
  if (sortString(stringA) !== sortString(stringB)){
    return false;
  }
  return true;
}
// Use a helper function to remove spaces/punctuation, change to lower case, and sort the string
function sortString(str){
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
