let a = [1,2,3]
let b = [4,5,6]
let c = [7,8,9]

function totalSumArr(sumArr) {
    let sum =0;
    for (let sumValue of sumArr) {
        if (Array.isArray(sumValue)){
            sum = sum + totalSumArr(sumValue);
        } else {
            sum = sum + sumValue;
        }
    }
    return sum;
}
const total = totalSumArr(a) + totalSumArr(b) + totalSumArr(c);
console.log(total);