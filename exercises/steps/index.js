// jshint esversion:6

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Iterative solution
// function steps(n) {
//   for (let row = 1; row <= n; row++) {
//     let answer = "";
//     for (let col = 1; col <= n; col++) {
//       if (col <= row){
//         answer += "#";
//       } else {
//         answer += " ";
//       }
//     }
//     console.log(answer);
//   }
// }

// Recursion solution -> set default value of row to be 0 (i.e. the first row), and stair to be an empty string
function steps(n, row = 0, stair = "") {
  // Check if we have printed all of our rows
  if (n === row) {
    return;
  }
  // Check if the string length is the same length as the row length
  if (n === stair.length) {
    // Console log the string 'stair'
    console.log(stair);
    // Call the steps() method again, incrementing the row number by 1
    // Don't need to pass in the 'stair' string, as want to start each row with an empty string
    // Call 'return' to end the if statement
    return steps(n, row + 1);
  }
  // Check if 'stair' has the number of '#' characters it should have
  if (stair.length <= row){
    stair += "#";
  } else {
    stair += " ";
  }
  // Call the steps() method again, in order to continue iterating through the row
  // This time, pass in the current 'row', and the current 'stair' string -> as want to keep adding to 'stair'
  steps(n, row, stair);
}

module.exports = steps;
