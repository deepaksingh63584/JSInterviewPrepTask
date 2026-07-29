function CompressString(input) {
  let compressStr = '';
  let i = 0;
  while (i < input.length) {
    let count = 1;
    while (i + 1 < input.length && input[i] === input[i + 1]) {
      count++;
      i++;
    }
    compressStr += input[i];
    if (count >= 1) {
      compressStr += count;
    }
    i++;
  }
  return compressStr;
}
console.log(CompressString('aabcccccaaa')); // a2b1c5a3
console.log(CompressString('aaabbbccc')); // a3b3c3
console.log(CompressString('abcd')); // a1b1c1d1
console.log(CompressString('aabbccdde')); // a2b2c2d2e1
console.log(CompressString('a')); // a1
console.log(CompressString('')); // (empty string)