function longestCommonPrefix(strs) {
    let result = [];
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return result.join('');
            }
        }
        result.push(strs[0][i]);
    }
    return result.join('');
}

console.log(longestCommonPrefix(['ciao', 'cgap', 'ciat']));