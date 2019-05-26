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
* [Fizzbuzz](#Fizzbuzz)
* [Max Chars]((#Max-Chars)) (most common character, anagram, any repeated characters)
* [Palindromes](#Palindromes)
* [Reverse Int](#Reverse-Int)
* [Reverse String](#Reverse-String)

### Fizzbuzz
* Requires use of a for-loop, and if-else statements
* Remember to start the for loop with ```let i = 1``` and ```i <= n```

### Max Chars
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
