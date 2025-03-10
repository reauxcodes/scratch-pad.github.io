// #!/usr/bin/env node

'use strict';
/*
I:
O:
C:
E:
*/
/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

/*
I: base string or number for testing
O: a function that tests whether given value is greater than base value
C:
E:
*/

function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (value) {
        return value > base;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (value) {
        return value < base;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */

/*
I: single character
O: function that tests whether a given string starts with the startsWith character
C: needs to be case insensitive
E:
*/

function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // create a case insensitive
    var newString = startsWith.toLowerCase();
    // return a function that tests string
    return function (string){
        return string.charAt(0).toLowerCase() === newString;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */

/*
I: single character
O: function that tests whether given string ends with given character
C: needs to be case insensitve
E:
*/

function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
     // create a case insensitive
     var newString = endsWith.toLowerCase();
     // return a function that tests string
     return function (string){
        // use charAt method to utilize index in string
        // use .length method to access end of string
         return string.charAt(string.length - 1).toLowerCase() === newString;
     }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */

/*
I: an array of strings and a function; 
O: a modified array of strings
C:
E:
*/

function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // create an empty array to collect results
    var arr = [];
    // create for loop to iterate over the array
    for (var i = 0; i < strings.length; i++){
        // create holder varible for modified strings
        var modifiedString = modify(strings[i]);
        // push into modified string into empty array
        arr.push(modifiedString);
    }
    return arr;
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */

/*
I: array of strings and function
O: a boolean on whether function test passed, return true if all strings pass the test
C:
E:
*/

function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // use a for loop to iterate over the array
    for (var i = 0; i < strings.length; i++){
        if (!test(strings[i])){
            // return false if function does not pass
            return false;
        }
    }
    // return true if false statement does not pass
    return true;
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}