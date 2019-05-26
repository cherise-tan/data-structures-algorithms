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
* [Palindromes](#Palindromes)
* [Reverse Int](#Reverse-Int)
* [Reverse String](#Reverse-String)

### Palindromes
* Reverse the string and then compare input and output
  * Test if input string is equal to output string: ```return str === reversed;``` (doesn't need an if statement)
* Use the array every() helper function
  * Turn string into an array
  * The every() function does a boolean check on every element within an array
  * Compare each element (at position "i") to the element at position ```array.length -i -1```
    * NB: "-1" accounts for array starting at position 0)

### Reverse Int
* Change the int to a string, then reverse the string, then change the string back into an int
* Use Math.sign() to maintain negative/positive numbers
  * Returns +1 if number is positive, and -1 if number is negative

### Reverse String
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
