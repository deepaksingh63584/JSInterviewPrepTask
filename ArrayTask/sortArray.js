// Sort Array - Multiple Approaches
const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// Method 1: Using built-in sort() method
function sortArray1(arr) {
  return arr.sort((a, b) => a - b);
}
console.log("Original array:", arr1);
console.log("Sample Output:", "-4,-3,1,2,3,5,6,7,8\n");

console.log("Method 1 (Built-in sort):", sortArray1([...arr1]).join(","));

// Method 2: Bubble Sort
function sortArray2(arr) {
  const sorted = [...arr];
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }
  return sorted;
}
console.log("Method 2 (Bubble Sort):", sortArray2([...arr1]).join(","));


// Method 3: Quick Sort
function sortArray3(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...sortArray3(left), ...middle, ...sortArray3(right)];
}
console.log("Method 3 (Quick Sort):", sortArray3([...arr1]).join(","));


// Method 4: Merge Sort
function sortArray4(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = sortArray4(arr.slice(0, mid));
  const right = sortArray4(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log("Method 4 (Merge Sort):", sortArray4([...arr1]).join(","));
