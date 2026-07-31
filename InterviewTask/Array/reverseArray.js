// Simple Array Reversal Methods

// Method 1: Using reverse()
function reverseArray1(arr) {
  return arr.reverse();
}

// Method 2: Two-pointer approach
function reverseArray2(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

// Method 3: Using spread operator
function reverseArray3(arr) {
  return [...arr].reverse();
}

// Method 4: Using reduce
function reverseArray4(arr) {
  return arr.reduce((rev, cur) => [cur, ...rev], []);
}

// Question 4: revese a array without using built-in methods
function reverseArray(arr) {
  const len = arr.length; // Manually get the length of the array
  const reversed = new Array(len);  // Create a new array to hold reversed elements
  for (let i = 0; i < len; i++) { // Loop through the original array
    reversed[i] = arr[len - 1 - i]; // Fill the new array with elements from the original array in reverse order
  }
  return reversed;
}

// Test
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(originalArray); // [1, 2, 3, 4, 5] (original array remains unchanged)

// Test
const arr = [1, 2, 3, 4, 5];
console.log("Original:", arr);
console.log("Method 1:", reverseArray1([...arr]));
console.log("Method 2:", reverseArray2([...arr]));
console.log("Method 3:", reverseArray3([...arr]));
console.log("Method 4:", reverseArray4([...arr]));
