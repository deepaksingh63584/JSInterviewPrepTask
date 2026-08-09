// Example usage:
const data = [
  { id: 'a', value: 1 },
  { id: 'b', value: 2 },
  { id: 'c', value: 3 }
];

function convertArrayToObject(arr) {
  return arr.reduce((accumulator, currentItem) => {
    const key = currentItem.id;
    const value = currentItem.value;
    accumulator[key] = value;
    return accumulator;
  }, {}); // The `{}` is the initial value of the accumulator.
}

const singleObject = convertArrayToObject(data);
console.log(singleObject);   // Expected output: { a: 1, b: 2, c: 3 }