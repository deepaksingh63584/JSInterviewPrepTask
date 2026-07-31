// Print Nested Array Elements - Multiple Methods

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// Method 1: Using nested for loops
console.log("=== Method 1: Nested for loops ===");
for (let i = 0; i < a.length; i++) { // Outer loop for rows
  console.log("row " + i); // Print the row index
  for (let j = 0; j < a[i].length; j++) { // Inner loop for columns
    console.log(" " + a[i][j]); // Print each element in the row
  }
}

// Method 2: Using forEach with nested forEach
console.log("\n=== Method 2: forEach (nested) ===");
a.forEach((row, i) => {
  console.log("row " + i); // Print the row index
  row.forEach(element => {
    console.log(" " + element); // Print each element in the row
  });
});

// Method 3: Using while loops
console.log("\n=== Method 3: Nested while loops ===");
let i = 0;
while (i < a.length) {
  console.log("row " + i); // Print the row index
  let j = 0;
  while (j < a[i].length) {
    console.log(" " + a[i][j]); // Print each element in the row
    j++;
  }
  i++;
}

// Method 4: Using for...of loops
console.log("\n=== Method 4: Nested for...of loops ===");
let rowIndex = 0;
for (const row of a) {
  console.log("row " + rowIndex); // Print the row index
  for (const element of row) {
    console.log(" " + element); // Print each element in the row
  }
  rowIndex++;
}

// Method 5: Using map method
console.log("\n=== Method 5: Using map ===");
a.map((row, i) => {
  console.log("row " + i); // Print the row index
  row.map(element => console.log(" " + element)); // Print each element in the row
});

// Method 6: Using reduce method
console.log("\n=== Method 6: Using reduce ===");
a.reduce((acc, row, i) => { // Outer reduce for rows
  console.log("row " + i); // Print the row index
  row.reduce((acc2, element) => { //  Nested reduce for inner array
    console.log(" " + element); // Print each element in the row
    return acc2; // Return the accumulator for the inner reduce
  }, '');
  return acc; // Return the accumulator for the outer reduce
}, '');

// Method 7: Using entries() with nested loop
console.log("\n=== Method 7: Using entries() ===");
for (const [i, row] of a.entries()) {
  console.log("row " + i);
  for (const element of row) {
    console.log(" " + element);
  }
}
