function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    // Continue looping while the two pointers
    // have not crossed
    while (left < right) {

        // If the characters at the current positions
        // are not equal
        if (s[left] !== s[right]) {
            return false;
        }

        // Move the left pointer to the right and
        // the right pointer to the left
        left++;
        right--;
    }

    // If no mismatch is found, return true (palindrome)
    return true;
}

// Driver code
const s = "abba";
console.log(isPalindrome(s)); // Output: true

// Question 5: Palindrome Check Without Built-in Methods
function isPalindrome1(str) {
  // Manually get the length of the string
  let len = 0;
  while (str[len] !== undefined) {
    len++;
  }
  // Compare characters from both ends

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
// Test
console.log(isPalindrome1("racecar")); // true
console.log(isPalindrome1("madam"));   // true
console.log(isPalindrome1("hello"));   // false
// Question 6: Check if Two Strings are Palindromes of Each Other Without Built-in Methods
function arePalindromesOfEachOther(str1, str2) {
  // Step 1: Manually calculate lengths of both strings
  let len1 = 0;
  while (str1[len1] !== undefined) len1++;
  let len2 = 0;
  while (str2[len2] !== undefined) len2++;

  // Step 2: If lengths are not equal, they can't be reverse of each other
  if (len1 !== len2) return false;
  // Step 3: Compare characters
  for (let i = 0; i < len1; i++) {
    if (str1[i] !== str2[len2 - 1 - i]) {
      return false;
    }
  }
  return true;
}
// Test cases
console.log(arePalindromesOfEachOther("abc", "cba")); // true
console.log(arePalindromesOfEachOther("hello", "olleh")); // true
console.log(arePalindromesOfEachOther("hello", "hello")); // false
console.log(arePalindromesOfEachOther("abc", "abcd")); // false

