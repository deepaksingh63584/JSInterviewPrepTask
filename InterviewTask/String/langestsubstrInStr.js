function longestWord(str) {
let longest = "";
let current = "";

for (let i = 0; i < str.length; i++) {
// if not space → build current word
if (str[i] !== " ") {
current += str[i];
} else {
// compare lengths
if (current.length > longest.length) {
longest = current;
}
current = ""; // reset
}
}

// check last word (important)
if (current.length > longest.length) {
longest = current;
}

return longest;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"