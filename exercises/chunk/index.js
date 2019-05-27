// jshint esversion:6

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Use a FOR-OF loop
function chunk(array, size) {
  // Define a new array
  let chunked = [];
  // Use a for-of loop to iterate through the array
  for (let element of array) {
    // Define 'last' as the element at the last position in the array (-1 as arrays start at 0)
    last = chunked[chunked.length - 1];
    // Check if the last element does not exist, or is at the position of max-array size
    if (!last || last.length === size) {
      // Create a new array within chunked
      chunked.push([element]);
    } else {
      // Push the element to the last array
      last.push(element);
    }
  }
  return chunked;
}

// Use the slice() function
function chunk(array, size) {
  // Define a new array
  let chunked = [];
  // Define index, starting at 0
  let index = 0;
  // While index is less than array length
  while (index < array.length){
    // Slice array to push 'size' number of elements to the 'chunked' array
    chunked.push(array.slice(index, index + size));
    // Increment index by the 'size' variable for re-use during the loop
    index = index + size;
  }
  return chunked;
}

module.exports = chunk;
