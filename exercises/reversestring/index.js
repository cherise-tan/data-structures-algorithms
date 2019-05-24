// jshint esversion:6

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Using array reverse() helper -> long version
function reverse(str) {
  const arr = str.split(""); // convert string to an array
  arr.reverse(); // reverse order in array
  return arr.join(""); // join the reversed values together
}

// Using array reverse() helper -> short version
function reverse(str) {
  return str.split("").reverse().join("");
}

// Using a for-of loop
function reverse(str) {
  let reversed = ""; // define an empty string

  for (let character of str){ // for each character (new declared variable) of str (the iterable object)
    reversed = character + reversed; // take that character and add it to the start of the new 'reversed' variable
  }

  return reversed;
}

// Using array reduce() helper -> long version
function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
  // reduce takes all the different values in an array and condences them down into 1 single string value
  // reduce takes two separate arguments: an arrow function and a starting initial value for the function
  // set the initial starting value as an empty string
  // reduce will take the starting argument (i.e. ""), pass it into the arrow function as the first argument
  // whatever gets returned will then be used as the starting function for every successive run of the function
  // function runs once for every item in the array
  // this will take the character we are operating on right now, add it to the total reversed string, then return the result
}

// Using array reduce() helper -> short version
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev , "");
}

module.exports = reverse;
