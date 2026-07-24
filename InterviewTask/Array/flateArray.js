const arr =  [1, [2,[3,4,5], 6], 7, 8, 9, [10], 11];

function flatArr(arr) {
    const result = [];
    function recursionhelper(input) {
        for( let i = 0; i < input.length; i++) {
            if (Array.isArray(input[i])) {
                recursionhelper(input[i]);
            }
            else {
                result.push(input[i]);
            }
        }
    }
    recursionhelper(arr);
    return result;
}

const flatArray = flatArr(arr);
console.log(flatArray) // Output: [1,2,3,4,5,6,7,8,9,10,11]
module.exports = flatArr;