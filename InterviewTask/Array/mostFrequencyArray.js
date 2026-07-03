// Find Most Frequent Item in Array - Multiple Approaches
const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Format output
function formatOutput(result) {
    return `${result.item} ( ${result.count} times )`;
}

// Method 1: Using Object/Map to count frequencies
function mostFrequent1(arr) {
    const freq = {};
    let maxCount = 0;
    let maxItem = null;
    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1;
        if (freq[item] > maxCount) {
            maxCount = freq[item];
            maxItem = item;
        }
    }
    return { item: maxItem, count: maxCount };
}
console.log("Original array:", arr1);
console.log("Sample Output: a ( 5 times )\n"); 
console.log("Method 1 (Object counting):", formatOutput(mostFrequent1(arr1)));

// Method 2: Using Map
function mostFrequent2(arr) {
    const freq = new Map();
    for (let item of arr) {
        freq.set(item, (freq.get(item) || 0) + 1);
    }
    let maxItem = null;
    let maxCount = 0;

    for (let [item, count] of freq) {
        if (count > maxCount) {
            maxCount = count;
            maxItem = item;
        }
    }
    return { item: maxItem, count: maxCount };
}
console.log("Method 2 (Using Map):", formatOutput(mostFrequent2(arr1)));


// Method 3: Using reduce and spread operator
function mostFrequent3(arr) {
    const freq = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
    const maxItem = Object.keys(freq).reduce((a, b) =>
        freq[a] > freq[b] ? a : b
    );
    return { item: maxItem, count: freq[maxItem] };
}
console.log("Method 3 (Using reduce):", formatOutput(mostFrequent3(arr1)));

// Method 4: Using sort and iteration
function mostFrequent4(arr) {
    const freq = {};
    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1;
    }
    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    return { item: sorted[0][0], count: sorted[0][1] };
}

console.log("Method 4 (Using sort):", formatOutput(mostFrequent4(arr1)));
