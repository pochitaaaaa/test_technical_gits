function isBalanced(input) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of input) {
        if (brackets[char]) {
           
            stack.push(char);
        } else {

            if (!stack.length || brackets[stack.pop()] !== char) {
                return 'NO';
            }
        }
    }


    return stack.length === 0 ? 'YES' : 'NO';
}


const input1 = "{[()]}";
const input2 = "{[(])}";
const input3 = "{(([])[])[]}";

console.log(`Input: ${input1}, Output: ${isBalanced(input1)}`);
console.log(`Input: ${input2}, Output: ${isBalanced(input2)}`);
console.log(`Input: ${input3}, Output: ${isBalanced(input3)}`);
