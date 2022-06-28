function firstNonRepeatingCharacter(string) {
    let map = new Map();
    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (map[char]) {           
            map[char].count++;
        } else {
            map[char] = { index: i, count: 1 };
        }  
    }

    for (const [key, value] of map) {
        if (value.counter === 1) {
            return value.index;
        }
    }
    return -1;
}

console.log(firstNonRepeatingCharacter('aabbc'));