//jshint esversion:6

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create the outer array, called 'results'
  results = [];
  // create 'n' number of sub-arrays
  for(i = 0; i < n; i++){
    results.push([]);
  }
  // define a 'counter' variable, which will define the number we want to push into the sub-array
  let counter = 1;
  // define starting and ending counters for column and row
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n-1;

  // check whether problem is incomplete
  while(startColumn <= endColumn && startRow <= endRow){
    // first for-loop: responsible for assembling the top row of our solution
    for(let i = startColumn; i <= endColumn; i++){
      results[startRow][i] = counter;
      counter++;
    }
    // increment start row
    startRow++;

    // second for-loop: responsible for assembling the right-side column
    for(let i = startRow; i <= endRow; i++){
      results[i][endColumn] = counter;
      counter++;
    }
    // decrement end column
    endColumn--;

    // third for-loop: responsible for assembling the bottom row of our solution
    for(let i = endColumn; i >= startColumn; i--){
      results[endRow][i] = counter;
      counter++;
    }
    // decrement end row
    endRow --;

    // fourth for-loop: responsible for assembling the left-side of our solution
    for(let i = endRow; i >= startRow; i--){
      results[i][startColumn] = counter;
      counter++;
    }
    // increment start column
    startColumn++;
  }

  return results;
}

module.exports = matrix;
