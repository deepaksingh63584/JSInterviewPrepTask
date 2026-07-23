// Valid Parentheses - Multiple Methods

// Method 1: Using stack + map object
function isValidMethod1(str) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let ch of str) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            let top = stack.pop();
            if (top !== map[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidMethod1("{[]}")); // true
console.log(isValidMethod1("([)]")); // false

// Method 2: Using stack + switch statement
function isValidMethod2(str) {
    let stack = [];

    for (let ch of str) {
        switch (ch) {
            case '(':
            case '{':
            case '[':
                stack.push(ch);
                break;
            case ')':
                if (stack.pop() !== '(') return false;
                break;
            case '}':
                if (stack.pop() !== '{') return false;
                break;
            case ']':
                if (stack.pop() !== '[') return false;
                break;
            default:
                return false;
        }
    }

    return stack.length === 0;
}

// Method 3: Using reduce with an accumulator stack
function isValidMethod3(str) {
    const pairMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    const stack = str.split('').reduce((acc, ch) => {
        if (ch === '(' || ch === '{' || ch === '[') {
            acc.push(ch);
        } else {
            const top = acc.pop();
            if (top !== pairMap[ch]) {
                acc.push('INVALID');
            }
        }
        return acc;
    }, []);

    return stack.length === 0 || !stack.includes('INVALID');
}

console.log('Method 1:', isValidMethod1('{[]}')); // true
console.log('Method 1:', isValidMethod1('([)]')); // false

console.log('Method 2:', isValidMethod2('{[]}')); // true
console.log('Method 2:', isValidMethod2('([)]')); // false

console.log('Method 3:', isValidMethod3('{[]}')); // true
console.log('Method 3:', isValidMethod3('([)]')); // false