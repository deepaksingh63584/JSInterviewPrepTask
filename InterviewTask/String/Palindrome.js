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
console.log(isPalindrome(s));