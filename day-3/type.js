// #!/usr/bin/env node

'use strict';
/*
I:
O:
C:
E:
*/

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */

/*
I: a value
O: return true if value is an array, false otherwise
C:
E:
*/

function isArray(value) {
    // YOUR CODE BELOW HERE //
    // use Array.isArray method to check if value is array or not
    // method will return true or false
    return Array.isArray(value);
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */

/*
I: value
O: return true if value is an object, false otherwise
C: cannot use typeof for null, array, and date
E:
*/

function isObject(value) {
    // YOUR CODE BELOW HERE //
    // return tyep of value to object
    return typeof value === 'object' &&
    // exclude null
        value !== null &&
    // exclude array
    !Array.isArray(value) &&
    // exclude date using instanceof method
    !(value instanceof Date);

    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */

/*
I: value
O: return if value is either an array or an object intended as a collection, false if otherwise
C:
E:
*/

function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // check if value is an array & an object
    return (typeof value === 'object' && value !== null) &&
    // value.constructor method exposes which type of constructor the object is
        (Array.isArray(value) || (value.constructor === Object));
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 

/*
I: value
O: return the type of value as a string
C:
E:
*/

function typeOf(value) {
    // YOUR CODE BELOW HERE //
// specify different value types
if (value === null){
    return 'null';
} else if (Array.isArray(value)){
    return 'array'
} else if (value instanceof Date){
    return 'date';
} else {
    return typeof value;
}
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}