// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/*
I: function
O: for loop of 1-100; printing Buzz if multiple of 3, Fizz if multiple of 5, FizzBuzz if multiple of both, or just the number if not any 
C:
E:
*/

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
// create for loop to iterate over numbers 1 - 100
for (var i = 1; i <= 100; i++){
    // check for multiples of both 5 and 3
    if (i % 5 === 0 && i % 3 === 0){
        // print 'FizzBuzz' to console
        console.log('FizzBuzz');
    } 
    // if solely multiple of 3
    else if (i % 3 === 0){
        // print 'Fizz' to console
        console.log('Fizz');
    } 
    // if solely multiple of 5
    else if (i % 5 === 0){
        // print 'Buzz' to console
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}