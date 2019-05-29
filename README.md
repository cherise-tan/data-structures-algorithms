# data-structures-algorithms
Learning JavaScript Data Structures and Algorithms alongside a [Udemy](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure) course.

* Uses Jest to run tests for each exercise
  * Navigate to the 'exercises' directory and type ```jest <challenge-folder>/test.js --watch``` into the command terminal
* Debugger statements
  * Any time you want to analyse a particular point in the code, can place a ```debugger;``` statement
  * It will pause in execution, allowing you to inspect the different variables
  * If this statement is present, will need to manually call the function: e.g. ```reverse("asdf");```
  * Then run in debugger mode -> in the command terminal: ```node inspect index.js```
  * To run code line-by-line, need to enter: ```cont``` or ```c```
  * To inspect a variable, need to enter REPL mode: ```repl```
  * In the new menu, can type variables you want to inspect - e.g. ```str```, or copy over some code to run
  * Ctrl-C will exit REPL mode
  * To continue running code after the debugger statement, just type ```c```

## Problems
* [Anagrams](#Anagrams)
* [Capitalize](#Capitalize)
* [Chunk](#Chunk) (array chunking)
* [Fizzbuzz](#Fizzbuzz)
* [Matrix](#Matrix) (spiral matrix)
* [Max Chars]((#Max-Chars)) (most common character, anagram, any repeated characters)
* [Palindromes](#Palindromes)
* [Pyramid](#Pyramid)
* [Reverse Int](#Reverse-Int)
* [Reverse String](#Reverse-String)
* [Steps](#Steps)
* [Vowels](#Vowels)

### General
* Getting keys out of an object (obj):
  * ```Object.keys(obj);```
  * To get the number of keys in an object: ```Object.keys(obj).length;```
* String split() method
  * ```str.split(" ")``` will split the string by spaces into individual strings (e.g. "hello","world")
* String slice() method
  * ```string.slice(beginIndex, endIndex)``` -> nb 'endIndex' is optional
  * ```string[0]``` will show only the FIRST character in the string
  * ```string.slice(1)``` will show only the characters from position ONE onwards
* The .includes() function can be used to check if a string or array includes certain characters
* ```word.toLowerCase()``` will change all characters to lowercase

#### RegExp (Regular Expressions)
* The RegExp constructor creates a regular expression object for matching text with a pattern
* They can be used to manipulate strings very easily -> \v matches any alphanumeric character (disregards punctuation/spaces)
* ```word.replace(/[^\w]/g, "")``` will replace any other characters found in 'word' with an empty string

#### Recursion
* Recursion is re-calling a function from within itself
* Give reasonable defaults to the info, to avoid an infinite loop of the user doesn't provide the required information ```dec = 1```
* Need to identify a base case: the case in which we determine there is no more work to do and it is time to stop the recursion process
* Then perform the actions we want to perform
* Then call our function again (this is the recursion step). It is critical to make sure we have changed the arguments in some fashion -> careful not to end up in an infinite loop
* Recursion Example:
  ```
  function printNumber(n, dec = 1){
    if (n === 0) { // This is the base case
      return;
    }
    console.log(n);
    printNumber(n - dec);
  }
  ```

#### Runtime Complexity
* Runtime complexity describes the performance of an algorithm, and can be used to compare different solutions to a given problem
  * Really asking: "How much more processing time/power is required to run your algorithm if we double the inputs"

* Types of runtimes:
  * Constant time (1): takes the same amount of time regardless of the number of elements worked with
  * Logarithmic time (log(n)): You have this if doubling the number of elements you are iterating over doesn't double the amount of work
    * Assume that all searching operations are log(n)
  * Linear time (n): iterating through all elements in a collection of data. If you see a for-loop spanning from "0" to "array.length", it is probably linear runtime
    * E.g. String reversal -> iterative solution (for-loop): For each character that is added to the string, one further iteration through the loop is required
  * Quasilinear time (n*log(n)): you have this if doubling the number of elements doesn't double the amount of work
    * Always assume that any sorting operation is n*log(n)
  * Quadratic time (n^2): every element in a collection has to be compared to every other element.
    * E.g. Steps algorithm -> iterative solution with nested for-loop
  * Exponential time (2^n): if you add a single element to a collection, the processing power required doubles

* Big 'O' Notation
  * This is another way of referencing runtime complexity
    * O(n): Linear
    * O(1): Constant
    * O(n^2): Quadratic

* Tips for identifying Runtime Complexity
  * Iterating with a simple for loop through a single collection?
    * Probably O(n)
  * Iterating through half a collection?
    * Still O(n). There are no constants in runtime
  * Iterating through two 'different' collections with separate for-loops?
    * O(n + m)
  * Two nested for-loops iterating over the same collection?
    * O(n^2)
  * Two nested for loops iterating over different collections?
    * O(n*m)
  * Sorting?
    * O(n*log(n))

* Space Complexity
  * How much more memory is required by doubling the problem set?

## Anagrams
* 1: Use character maps
  * Build character maps (can write an external helper function so you don't need to repeat code for strings A + B)
    * Remove white space/punctuation using Regular Expressions ```word.replace(/[^\w]/g, "")```
  * Check if the character maps have the same number of keys ```Object.keys(aCharMap).length !== Object.keys(bCharMap).length```
  * Iterate through the first character map, comparing each key to the corresponding key in the second character map
    * ```(aCharMap[char] !== bCharMap[char])```
    * Return as true if all the key:value pairs match
* 2: Use the array sort() helper function
  * This will sort characters at runtime (works for both characters and numbers)
  * Create a helper function which will perform two tasks:
    * Clean spaces/punctuation, change letters to lowercase
    * Change string to array, perform sort() function, then change back to a string
  * Check whether both strings are equal

## Capitalize
* 1: Using the string standard library
  * Make an empty array 'words'
  * Split the string input by spaces to get an array ```str.split(" ")```
  * For each word in the array (FOR-OF loop)
    * Uppercase the first letter of the word
    * Join first letter with the rest of the string
    * Push result into 'words' array
  * Join 'words' into a string and return it ```return words.join(" ");```
* 2: Using a basic FOR loop
  * Create 'result' which is the first character of the input string capitalised
  * For each character in the string:
    * IF the character to the left is a space
      * Capitalize it and add it to 'result'
    * ELSE
      * Add it to result

## Chunk
* 1: Using a FOR-OF loop
  * Create empty array to hold chunks called 'chunked'
  * For each element in the 'unchunked' array (FOR-OF loop):
    * Retrieve the last element in 'chunked'
    * If the last element does not exist, or if its length is equal to chunk size -> push a new chunk into 'chunked' with the current element
    * Else add the current element into the chunk
* 2: Using the slice() function and a WHILE loop
  * The slice function exists for all arrays. Can pass in a start index and an end index as arguments
    * e.g. ```letters.slice(0, 3);```
    * Gives a COPY of every element inside of 'letters' from element 0 to element 3 (but NOT including element 3)
  * Create empty 'chunked' array
  * Create 'index' which starts at 0
  * While index is less than array.length (WHILE LOOP)
    * Push a slice of length 'size' from 'array' into 'chunked'
    * Add 'size' to 'index'

## Fizzbuzz
* Requires use of a for-loop, and if-else statements
* Remember to start the for loop with ```let i = 1``` and ```i <= n```

## Matrix
* The problem: want to create a 2d array (i.e. an array of array)
* Create an empty array of arrays called "results"
* Create a counter variable, starting at "1"
* Define starting and ending counters for column and row
* As long as (start column <= end column) AND (start row <= end row) -> WHILE LOOP
  * Loop from start column to end column (top row)
    * At results[start_row] [i] assign counter variable
    * Increment counter
  * Increment start row
  * Loop from start row to end row (right column)
    * At results[i] [end_column] assign counter variable
    * Increment counter
  * Decrement end row
  * ...Repeat for the other two sides (bottom row and left column)

## Max Chars
* Use this technique for the following questions:
  * What is the most common character in the string?
  * Does string A have the same characters as string B (is it an anagram)?
  * Does the string have any repeated characters in it?

* Can solve these problems by creating an object
  * First need to define a new object
  * Then need to iterate through each character in the string, and add each unique characters into this object -> using a FOR-OF loop
    * The object 'key' will be the character in the string, the object 'property' will be +1
  * Then need to iterate through the object to find the character that has been used the most -> using a FOR-IN loop
    * Set max-number and the associated character as variables as we loop through the object

## Palindromes
* Reverse the string and then compare input and output
  * Test if input string is equal to output string: ```return str === reversed;``` (doesn't need an if statement)
* Use the array every() helper function
  * Turn string into an array
  * The every() function does a boolean check on every element within an array
  * Compare each element (at position "i") to the element at position ```array.length -i -1```
    * NB: "-1" accounts for array starting at position 0)

## Pyramid
* Iterative solution:
  * Calculate the midpoint of the row (will be used to decide where "#" goes)
    * Use Math.floor() to take a decimel number and round it down to the nearest integer
  * From 0 to n (iterate through rows)
    * Create an empty string "level"
    * From 0 to ??? (number of columns)
      * Check if column is within the range of midpoint +/- row
        * IF the column is within this range -> add a "#" to "level"
        * ELSE add a space to "level"
    * Console log "level"
* Recursive solution:
  * See [steps](#Steps) for set-up for recursive solution
  * Calculate the midpoint of our row
  * Define a temporary variable 'add' - which will contain the character we are adding to our "level" string
  * Use midpoint and the length of the string to determine whether 'add' should equal "#" or " "

## Reverse Int
* Change the int to a string, then reverse the string, then change the string back into an int
* Use Math.sign() to maintain negative/positive numbers
  * Returns +1 if number is positive, and -1 if number is negative

## Reverse String
* Use the array reverse() helper function to reverse places in an array
  * Convert the string into an array
  * Call 'reverse' method on the array
  * Join the array back into a string and return the answer
* Use a for loop
  * Create an empty string called 'reversed'
  * For each character in the provided string, take the character and add it to the start of 'reversed'
  * Return the variable 'reversed'
* Use an array reverse() helper
  * Convert the string into an array
  * Use the reduce() helper

## Steps
* 1: Iterative solution
  * From 0 to n:
    * Create an empty string "stair"
    * From 0 to n:
      * IF the current column is <= to the current row
        * Add a "#" to "stair"
      * ELSE
        * Add a space to "stair"
    * Console.log "stair"
* 2: Recursive solution
  * If row === n, then we have hit the end of our problem
  * If the 'stair' string has a length === n, then we are at the end of a row
    * Console.log 'stair', and call the function again
  * If the length of the stair string is <= to the row number, we add a "#". Otherwise we add a " "
  * Then need to call the function again

## Vowels
* Iterative solution
  * Change the string to lowercase, so both upper and lower case characters can be considered vowels
  * Use the .includes() function to check if a string or array includes certain characters
* Recursive solution
  * Use the match() method on the string -> checks if "x" is included inside the string
  * Can pass in a regular expression as "x"
    * ```const matches = str.match(/[aeiou]/gi)```
    * This will check whether anything within the square brackets [] is included in the string
    * /g indicates that we won't stop after the first match is found (allows to detect multiple matches)
    * /i stands for 'insensitive' (i.e. case insensitive) -> will work on upper and lower case vowels
  * Then need to evaluate whether "matches" is an array (i.e. matches were found), or null (no matches found)
    * ```return matches ? matches.length : 0;```
