// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

/*
I: 
O: an object that manages contacts
C:
E:
*/

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // return an object in the function
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
}



function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
       // add length key with function value that returns length of constacts
       length: function(){
        return contacts.length;
       },
       // add a addContact key with functin value that has contact parameter
       addContact: function(contact){
        // add a contact object to the object list
        return contacts.push(contact);
       },
       // add a findContact key with function value with fullName string
       findContact: function(fullName){
        // iterate over the contacts array to find names
        for (var i = 0; i < contacts.length; i++){
            // create if statement that returns the contact object if found
            if (fullName === contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast']){
                return contacts[i];
            }
        }
       },
       // add removeContact key function value that removes a contact from array
       removeContact: function(contact){
        return contacts.pop(contact);
       },
       // add printAllContact key with function
       printAllContactNames: function(){
        // return strings of fullNames separated by line-break
       
        // init holder variable for strings
        // var names = '';
        
       }
    };
}

makeContactList(); // => { length: function(){}, addContact: function(){}, findContact: function(){}  }



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}