function validBraces(braces) {
    let stack = [];
    for (let i = 0; i < braces.length; i++) {
        const par = braces[i];
        if (stack.length === 0 && (par === ')' || par === ']' || par === '}')) {
            return false;
        }
        else if (par === '(' || par === '[' || par === '{') {
            stack.push(par);
        }

        else if (par === ')') {
            const lastInStack = stack.pop();
            if (lastInStack !== '(') {
                return false;
            }
        }
        else if (par === ']') {
            const lastInStack = stack.pop();
            if (lastInStack !== '[') {
                return false;
            }
        }
        else if (par === '}') {
            const lastInStack = stack.pop();
            if (lastInStack !== '{') {
                return false;
            }
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(validBraces("((])"));