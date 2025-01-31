// #!/usr/bin/env node

'use strict';

const { get } = require("lodash");

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

/*
I: array
O: print values of array
C: use console.log()
E:
*/

function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // use for loop to loop over array
  for (var i = 0; i < array.length; i++){
    // print values to console
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

/*
I: array
O: print values of array backwards
C: use console.log()
E:
*/

function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // use for loop to loop over array backwards
  for (var i = array.length - 1; i >= 0; i--){
    // print values to the console
    console.log(array[i]);
  }

  

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

/*
I: object
O: an array containing the object keys
C:
E:
*/

function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // return object keys using object.key method
  return Object.keys(object);

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

/*
I: object
O: print object keys by looping over object
C: use console.log
E:
*/

function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // use for..in loop to loop over the object
  for (var key in object){
    // print object keys to the console
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

/*
I: object
O: array with object's values
C:
E:
*/

function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // return an array with object's values
  // use object.value method
  return Object.values(object);
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

/*
I: object
O: print object values
C: use console.log
E:
*/

function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
// create for loop to iterate over object
for (var key in object){
  //print to console
  console.log(object[key]);
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

/*
I: object
O: the number of key/value pairs stored within the object
C:
E:
*/

function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // return the number of key/value pairs stored within object parameter
  return Object.keys(object).length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

/*
I: object
O: print values of object in reverse
C: console.log
E:
*/

function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // create variable for object values array
  var obj = Object.values(object);
  // reverse object values using holder variable
  var reversedObj = obj.reverse();
  // loop over reversed object values
  for (var key in reversedObj){
    // print to console
    console.log(reversedObj[key]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}