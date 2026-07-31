let a = [1,2,3]
let b = [4,5,6]
let c = [7,8,9]

function totalSumArr(sumArr) {
    let sum =0;
    for (let sumValue of sumArr) {
        if (Array.isArray(sumValue)){ // Check if the element is an array
            sum = sum + totalSumArr(sumValue); // Recursively call the function for nested arrays
        } else {
            sum = sum + sumValue; // Add the value to the sum
        }
    }
    return sum;
}
const total = totalSumArr(a) + totalSumArr(b) + totalSumArr(c);
console.log(total); // Output: 45