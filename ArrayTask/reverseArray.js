// ============================================
// Array Reversal - Multiple Approaches
// ============================================

// Approach 1: Using built-in reverse() method
// Time: O(n), Space: O(1) - modifies original array
function reverseArray1(arr) {
  return arr.reverse();
}

// Approach 2: Two-pointer approach (in-place)
// Time: O(n), Space: O(1) - modifies original array
function reverseArray2(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    // Swap elements
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  
  return arr;
}

// Approach 3: Recursive approach
// Time: O(n), Space: O(n) - due to recursion stack
function reverseArray3(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return arr;
  }
  
  // Swap
  [arr[left], arr[right]] = [arr[right], arr[left]];
  
  return reverseArray3(arr, left + 1, right - 1);
}

// Approach 4: Using spread operator and reverse
// Time: O(n), Space: O(n) - creates new array
function reverseArray4(arr) {
  return [...arr].reverse();
}

// Approach 5: Using reduce
// Time: O(n), Space: O(n) - creates new array
function reverseArray5(arr) {
  return arr.reduce((reversed, current) => [current, ...reversed], []);
}

// Approach 6: Using a new array and loop
// Time: O(n), Space: O(n) - creates new array
function reverseArray6(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// ============================================
// Test Cases
// ============================================

console.log("Testing Array Reversal Methods:");
console.log("================================\n");

const testCases = [
  [1, 2, 3, 4, 5],
  ['a', 'b', 'c'],
  [10],
  [],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
];

// Test Approach 1
console.log("Approach 1: Using reverse()");
testCases.forEach(testCase => {
  const arr = [...testCase];
  console.log(`Input: [${arr}] => Output: [${reverseArray1(arr)}]`);
});

console.log("\nApproach 2: Two-pointer approach");
testCases.forEach(testCase => {
  const arr = [...testCase];
  console.log(`Input: [${arr}] => Output: [${reverseArray2(arr)}]`);
});

console.log("\nApproach 3: Recursive approach");
testCases.forEach(testCase => {
  const arr = [...testCase];
  console.log(`Input: [${arr}] => Output: [${reverseArray3(arr)}]`);
});

console.log("\nApproach 4: Spread operator + reverse");
testCases.forEach(testCase => {
  const arr = [...testCase];
  console.log(`Input: [${arr}] => Output: [${reverseArray4(arr)}]`);
});

console.log("\nApproach 5: Using reduce");
testCases.forEach(testCase => {
  const arr = [...testCase];
  console.log(`Input: [${arr}] => Output: [${reverseArray5(arr)}]`);
});

console.log("\nApproach 6: New array with loop");
testCases.forEach(testCase => {
  const arr = [...testCase];
  console.log(`Input: [${arr}] => Output: [${reverseArray6(arr)}]`);
});
