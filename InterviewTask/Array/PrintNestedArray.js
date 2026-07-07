// Print Nested Array Elements - Multiple Methods

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// Method 1: Using nested for loops
console.log("=== Method 1: Nested for loops ===");
for (let i = 0; i < a.length; i++) {
  console.log("row " + i);
  for (let j = 0; j < a[i].length; j++) {
    console.log(" " + a[i][j]);
  }
}

// Method 2: Using forEach with nested forEach
console.log("\n=== Method 2: forEach (nested) ===");
a.forEach((row, i) => {
  console.log("row " + i);
  row.forEach(element => {
    console.log(" " + element);
  });
});

// Method 3: Using while loops
console.log("\n=== Method 3: Nested while loops ===");
let i = 0;
while (i < a.length) {
  console.log("row " + i);
  let j = 0;
  while (j < a[i].length) {
    console.log(" " + a[i][j]);
    j++;
  }
  i++;
}

// Method 4: Using for...of loops
console.log("\n=== Method 4: Nested for...of loops ===");
let rowIndex = 0;
for (const row of a) {
  console.log("row " + rowIndex);
  for (const element of row) {
    console.log(" " + element);
  }
  rowIndex++;
}

// Method 5: Using map method
console.log("\n=== Method 5: Using map ===");
a.map((row, i) => {
  console.log("row " + i);
  row.map(element => console.log(" " + element));
});

// Method 6: Using reduce method
console.log("\n=== Method 6: Using reduce ===");
a.reduce((acc, row, i) => {
  console.log("row " + i);
  row.reduce((acc2, element) => {
    console.log(" " + element);
    return acc2;
  }, '');
  return acc;
}, '');

// Method 7: Using entries() with nested loop
console.log("\n=== Method 7: Using entries() ===");
for (const [i, row] of a.entries()) {
  console.log("row " + i);
  for (const element of row) {
    console.log(" " + element);
  }
}
