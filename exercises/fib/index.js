//jshint esversion:6

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative solution
function fib(n) {
  const result = [0, 1];

  for (i = 2; i <= n; i++){
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }
  return result[n];
}

// Recursive solution
function fib(n, count = 0, result = [0, 1]) {
  // if 'n' is 0 or 1, the answer will be '0' or '1'
  if (n < 2){
    return n;
  }
  // keep reducing down the fib() function, until you end up adding a series of '1's
  return fib(n-1) + fib(n-2);
}

// Memoized recursive solution
function memoise(fn){
  const cache = {};
  return function(...args){
    if (cache[args]){
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n, count = 0, result = [0, 1]) {
  // if 'n' is 0 or 1, the answer will be '0' or '1'
  if (n < 2){
    return n;
  }
  // keep reducing down the fib() function, until you end up adding a series of '1's
  return fib(n-1) + fib(n-2);
}

const fib = memoise(slowFib);

module.exports = fib;
