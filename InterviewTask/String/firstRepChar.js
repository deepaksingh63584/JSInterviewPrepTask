function firstRepChar(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                return str[i];
            }
        }
    }
    return -1;
}

let str = "geeksforgeeks";
console.log(firstRepChar(str));