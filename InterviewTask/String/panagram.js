// Check if a given string is a pangram
function isPangram(str) {
  if (typeof str !== 'string') {
    return false;
  }

  const normalized = str.toLowerCase();
  const letters = new Set();

  for (const char of normalized) {
    if (char >= 'a' && char <= 'z') {
      letters.add(char);
      if (letters.size === 26) {
        return true;
      }
    }
  }

  return letters.size === 26;
}

// Examples
const examples = [
  'The quick brown fox jumps over the lazy dog',
  'Sphinx of black quartz, judge my vow',
  'Hello World'
];

for (const example of examples) {
  console.log(`${example} -> ${isPangram(example) ? 'Pangram' : 'Not a pangram'}`);
}
