function countUnique(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let uniqueCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            uniqueCount++;
        }
    }
    return uniqueCount;
}

console.log(countUnique([-2, -1, -1, 1, 1, 2, 2, 3, 4, 4, 5])); // Output: 7

function countUnique1(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let uniqueCount = 0;
    let uniqueValues = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            uniqueCount++;
            uniqueValues.push(arr[i]);
        }
    }

    console.log("Unique values:", uniqueValues); // Output: Unique values: [-2, -1, 1, 2, 3, 4, 5]
    return uniqueCount;
}

console.log("Count:", countUnique1([-2, -1, -1, 1, 1, 2, 2, 3, 4, 4, 5])); // Output: Count: 7