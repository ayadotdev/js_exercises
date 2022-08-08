function solution1(string) {
    let result = "";
    let currentChar = "";
    let repeated = 0;
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char !== currentChar) {
            result += char;
            currentChar = char;
            repeated = 1;
        } else if (repeated < 2) {
            result += char;
            repeated++;
        }
    }
    return result;
}
