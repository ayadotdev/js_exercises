/** Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.

Example: 

Input: exp = “[()]{}{[()()]()}” 
Output: Balanced

Input: exp = “[(])” 
Output: Not Balanced*/

function checkIfExpIsBalanced(str) {
    let stack = [];
    const closedBraces = [')',']','}'];
    const openedBraces = ['(','[','{'];
    for (let i = 0; i < str.length; i++) {
        const brace = str[i];

        if (stack.length === 0 && (closedBraces.includes(brace))) {
            return 'not balanced';
        }

        else if (openedBraces.includes(brace)) {
            stack.push(brace);
        }

        else if (brace === closedBraces[0]) {
            let inStack = stack.pop();
            if (inStack !== openedBraces[0]) {
                return "not balanced";
            }
        }

        else if (brace === closedBraces[1]) {
            let inStack = stack.pop();
            if (inStack !== openedBraces[1]) {
                return "not balanced";
            }
        }

        else if (brace === closedBraces[2]) {
            let inStack = stack.pop();
            if (inStack !== openedBraces[2]) {
                return "not balanced";
            }
        }
        

    }
    return stack.length === 0;


}
console.log(checkIfExpIsBalanced('(]'));
// console.log(checkIfExpIsBalanced('[()]{}{[()()]()}'));