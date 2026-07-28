function SwapFirstlast(str) {
    if(str.length <= 1) {
        return str;
    }
    return str[str.length - 1] + str.slice(1, -1) + str[0];
}

console.log(SwapFirstlast("helloworld")); //delloworlh