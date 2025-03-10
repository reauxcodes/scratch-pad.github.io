// #!/usr/bin/env node

'use strict';
/*
I:
O:
C:
E:
*/

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/*
I: given a string
O: return the length of the string
C:
E:
*/
function length(string) {
    // YOUR CODE BELOW HERE //
// return the length of the string paramater
return string.length;
    // YOUR CODE ABOVE HERE //
}


/**
 * Given an input String, return a new String forced to lowercase.
 */
/*

/*
I: given a string
O: return a new string that forces lowercase letters
C:
E:
*/

function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   // create variable for new string
   var newString = '';
   // use a method to return string with lowercase letters
   newString = string.toLowerCase();
   // return new variable
   return newString;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/*
I: given a string input
O: return a new string that forces uppercase letters
C:
E:
*/

function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
// initiate a variable with empty string 
var newString = '';
// use a method to return string with uppercase letters
newString = string.toUpperCase();
// return new variable
return newString;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // create 
var lowerCased = string.toLowerCase();
// convert new string to dashcasee
var newString = lowerCased.replace(/\s+/g, "-");
// return newString
return newString;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: a string and single character
O: return true if string begins with the character, false otherwise
C: case insensitive
E:
*/

function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
// create variable for case insensitive
var lowerCase = string.toLowerCase();
// use startsWith method to check first character
// method will return true or false
return lowerCase.startsWith(char.toLowerCase());

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: string and a single character
O: return true if string ends with the character, false otherwise
C: function is case insensitive
E:
*/

function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
// create variable for case insensitive
var lowerCase = string.toLowerCase();
// use endsWith method to check first character
// method will return true or false
return lowerCase.endsWith(char.toLowerCase());


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/*
I: two string params
O: one string concatenated into one
C:
E:
*/

function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
return stringOne + stringTwo;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

/*
I: any number of strings
O: all of the strings joined together
C:
E:
*/

function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // return all strings into one
    return args.join('');


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

/*
I: two strings
O: return the longest of the two
C:
E:
*/

function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// create an if statement that compares the length of the strings
if (stringOne.length > stringTwo.length){
    // return stringOne if comparison statemnet is true
    return stringOne;
} else {
    // return stringTwo if comparison statement is false
    return stringTwo;
}
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/*
I: two strings
O: return 1 if the first string is higher in alphabetical order; -1 if the second is higher; and 0 if theyre equal
C:
E:
*/

function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// create if statement to compare
if (stringOne < stringTwo){
    return 1;
} else if (stringOne > stringTwo){
    return -1;
} else if (stringOne === stringTwo){
    return 0;
}
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/*
I: two strings
O: return 1 if first letter is lower alphabetically than second string's first letter; -1 if opposite; and 0 if theyre equal
C:
E:
*/

function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
 if (stringOne > stringTwo){
        return 1;
    } else if (stringOne < stringTwo){
        return -1;
    } else if (stringOne === stringTwo){
        return 0;
    }
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}