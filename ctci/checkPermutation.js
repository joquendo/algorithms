/* CTCI: 1.2 Check Permutation
 * Given two strings write a method to decide if one is a permutation of the other.
 
   I: two strings
   O: boolean
   C: none
   E: empty string, different number of characters, same string
 
 */

function checkPermutation(s1, s2) {
  if (s1 === s2) return false;
  if (s1.length !== s2.length) return false;

  const hash = {};

  for (let i = 0; i < s1.length; i++) {
    const c = s1[i];
    if (hash[c]) {
      hash[c]++;
    } else {
      hash[c] = 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    const c = s2[i];
    if (hash[c]) {
      hash[c]--;
    } else {
      return false;
    }
  }

  return true;

}

console.log(checkPermutation('abc', 'abc') === false);
console.log(checkPermutation('abc','cab') === true);
console.log(checkPermutation('apple','papel') === true);
console.log(checkPermutation('hannah', 'nahhan') === true);
console.log(checkPermutation('Mississippi', 'Trout') === false);
console.log(checkPermutation('baab', 'bbba') === false);
