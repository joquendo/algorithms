/* CTCI: 1.3 URLify
 * Replace spaces with '%20'
 
   I: a string with additional space needed at the end of the string, number of characters
   O: boolean
   C: none
   E: empty string, different number of characters, same string
 *
 */

 function URLify(string, trueStringLength) {
   const sLength = string.length;
   let pointer = sLength - 1;
   let charArray = [];

   for (let i = trueStringLength - 1; i >= 0; i--) {
     if (string[i] === ' ') {
        charArray[pointer--] = '0'
        charArray[pointer--] = '2';
        charArray[pointer--] = '%';
     } else {
       charArray[pointer--] = string[i];
     }
   }

   return charArray.join('');

 }

 console.log(URLify('Web development  ', 15));
 console.log(URLify('The craft of web development        ', 28));
 console.log(URLify('Everyone can benefit from accessibility features          ', 48));