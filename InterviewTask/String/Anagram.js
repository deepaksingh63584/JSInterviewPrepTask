
// Question 3: Anagram Check Without Built-in Methods
function areAnagrams(str1, str2) {
  // Step 1: Manually calculate lengths of both strings
  let len1 = 0;
  while (str1[len1] !== undefined) len1++;
  let len2 = 0;
  while (str2[len2] !== undefined) len2++;
  // Step 2: If lengths are not equal, they can't be anagrams
  if (len1 !== len2) return false;
  // Step 3: Create frequency objects for both strings
  const freq1 = {};
  const freq2 = {};
  for (let i = 0; i < len1; i++) {
    freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
    freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
  }
  // Step 4: Compare frequency objects
  for (let char in freq1) {
    if (freq1[char] !== freq2[char]) {
      return false;
    }
  }
  return true;
}
// Test cases
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false

//2nd way
function areAnagrams1(str1, str2) {
  // Step 1: Manually calculate lengths of both strings

  let len1 = 0;
  while (str1[len1] !== undefined) len1++;
  let len2 = 0;
  while (str2[len2] !== undefined) len2++;
  // Step 2: If lengths are not equal, they can't be anagrams
  if (len1 !== len2) return false;
  // Step 3: Create frequency array for both strings
  const freq = new Array(256).fill(0); // Assuming ASCII characters
  for (let i = 0; i < len1; i++) {
    freq[str1.charCodeAt(i)]++;
    freq[str2.charCodeAt(i)]--;
  }
  // Step 4: Check if all counts are zero
  for (let i = 0; i < 256; i++) {
    if (freq[i] !== 0) {
      return false;
    }
  }
  return true;
}
// Test cases
console.log(areAnagrams1("listen", "silent")); // true
console.log(areAnagrams1("hello", "world")); // false