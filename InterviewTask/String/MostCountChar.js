// Find Most Frequent Item in Array - Multiple Approaches
const arr1 = "ksfhsdiufhskdfgggggggggjdfhgbksm";

// Method 1: Using Object/Map to count frequencies
function mostFrequent1(arr) {
    const freq = {};
    let maxCount = 0;
    let maxItem = "";
    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1;
        if (freq[item] > maxCount) {
            maxCount = freq[item];
            maxItem = item;
        }
    }
    return { maxItem, maxCount };
}
console.log("Original array:", arr1); // Original array: ksfhsdiufhskdfgggggggggjdfhgbksm

console.log("Method 1 :", mostFrequent1(arr1)); // Method 1 : { maxItem: 'g', maxCount: 9 }
