let str = "this is a test this is only a test";

let words = str.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    let isDuplicate = false;

    // Check if the current word has already appeared
    for (let j = 0; j < i; j++) {
        if (words[i] === words[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        if (result === "") {
            result = words[i];
        } else {
            result = result + " " + words[i];
        }
    }
}

console.log(result);



let unique = [...new Set(str.split(" "))].join(" ");
console.log(unique);