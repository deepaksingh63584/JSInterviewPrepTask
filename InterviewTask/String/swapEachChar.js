// Swap each case in a string

// Method 1: Using map and ternary operator
function swapCase1(str) {
  return str
    .split('')
    .map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else if (char === char.toLowerCase()) {
        return char.toUpperCase();
      }
      return char;
    })
    .join('');
}
const input = 'tHE qUICK bROWN fOX';
console.log('Input:', input);
console.log('Method 1 (map + ternary):', swapCase1(input));

// Method 2: Using regex with replace
function swapCase2(str) {
  return str.replace(/[a-z]/gi, match => 
    match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase()
  );
}
console.log('Method 2 (regex replace):', swapCase2(input));

// Method 3: Using charCodeAt approach
function swapCase3(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const code = char.charCodeAt(0);
    
    // Check if uppercase (A-Z: 65-90)
    if (code >= 65 && code <= 90) {
      result += char.toLowerCase();
    }
    // Check if lowercase (a-z: 97-122)
    else if (code >= 97 && code <= 122) {
      result += char.toUpperCase();
    }
    else {
      result += char;
    }
  }
  return result;
}
console.log('Method 3 (charCodeAt):', swapCase3(input));

// Method 4: Using array reduce
function swapCase4(str) {
  return str.split('').reduce((acc, char) => {
    return acc + (char === char.toUpperCase() ? char.toLowerCase() : char.toLowerCase() === char ? char.toUpperCase() : char);
  }, '');
}
console.log('Method 4 (reduce):', swapCase4(input));

// Method 5: Using spread operator with map
function swapCase5(str) {
  return [...str].map(char => 
    char === char.toUpperCase() && char !== char.toLowerCase() 
      ? char.toLowerCase() 
      : char === char.toLowerCase() && char !== char.toUpperCase()
      ? char.toUpperCase()
      : char
  ).join('');
}
console.log('Method 5 (spread + map):', swapCase5(input));
