function printCharNtimes(char, n) {
    let res = "";

    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            res += char.toUpperCase();
        } else {
            res += char.toLowerCase();
        }
    }
    return res;
}

console.log(printCharNtimes("a", 0));

function accum(s) {
    let newStr = "";
    for (let i = 0; i < s.length; i++) {
        newStr += printCharNtimes(s[i], i) + "-";
    }
    return newStr.slice(0, -1);;
}

console.log(accum("ZpglnRxqenU"));


//accum("abcd") -> "A-Bb-Ccc-Dddd"