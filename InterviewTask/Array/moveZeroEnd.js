function moveZeroesToEnd(arr) {
    let nonZeroIndex = 0;
    
    // Move all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[nonZeroIndex];
            arr[nonZeroIndex] = arr[i];
            arr[i] = temp;
            nonZeroIndex++;
        }
    }
    return arr;
}
console.log(moveZeroesToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

function moveZeroesToFirst(arr) {
    let zeroIndex = 0;
    
    // Move all zeros to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            let temp = arr[zeroIndex];
            arr[zeroIndex] = arr[i];
            arr[i] = temp;
            zeroIndex++;
        }
    }
    return arr;
}
console.log(moveZeroesToFirst([0, 1, 0, 3, 12])); // Output: [0, 0, 1, 3, 12]