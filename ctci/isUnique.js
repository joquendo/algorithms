/*
 * CTCI Chapter 1.1
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

 I: String
 O: Boolean
 C: no additional data structures, optimize
 E: empty string
 *
 */

const isUnique = (s) => {
  // check each character and store in a hash table
  // if character is already there, then return false
  // when done checking, return true
  let hash = {};

  for (const letter of s) {
    if (hash[letter]) return false;
    hash[letter] = 1;
  }
  
  return true;

};

console.log(isUnique('s') === true);
console.log(isUnique('') === true);
console.log(isUnique('ss') === false);
console.log(isUnique('patterns') === false);
