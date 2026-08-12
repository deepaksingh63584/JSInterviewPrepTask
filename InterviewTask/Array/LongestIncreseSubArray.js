function longestIncreseSubArray(nums) {
    if (nums.length === 0) return 0;
    let currLength = 1;
    let maxLength = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currLength++;
        } else {
            currLength = 1;
        }
        maxLength = Math.max(maxLength, currLength);
    }
    return maxLength;
}

const nums = [10, 9, 2, 5, 6, 7, 101, 18];
console.log("Original array:", nums); // Original array: [ 10, 9, 2, 5, 6, 7, 101, 18 ]
console.log("Length of longest increasing subarray:", longestIncreseSubArray(nums)); // Length of longest increasing subarray: 4 [5, 6, 7, 101]

//print value for lanest increasing sub array
function longestIncreseSubArray1(nums1) {
    let currLength = 1;
    let maxLength = 1;
    let start = 0;
    let maxStart = 0;

    for (let i = 1; i < nums1.length; i++) {
        if (nums1[i] > nums1[i - 1]) {
            currLength++;
        } else {
            currLength = 1;
            start = i;
        }
        if (currLength > maxLength) {
            maxLength = currLength;
            maxStart = start;
        }
    }
    let result = nums1.slice(maxStart, maxStart + maxLength);
    console.log("Length:", maxLength); // Length: 3
    console.log("Longest Increasing Subarray1:", result); // Longest Increasing Subarray: [ 3, 7, 101 ]
}

const  nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
longestIncreseSubArray1(nums1);