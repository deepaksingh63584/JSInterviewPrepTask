const numArr = [1,2,3,4,5,2,3,7,6,5,8,1,9];
//const output = [7,4,6,8,9];

// Count occurrences
const counts = numArr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log(counts); // { '1': 2, '2': 2, '3': 2, '4': 1, '5': 2, '6': 1, '7': 1, '8': 1, '9': 1 }
// Filter elements that appear only once
const nonRepeating = numArr.filter(num => counts[num] === 1);
console.log(nonRepeating); // [4, 7, 6, 8, 9]