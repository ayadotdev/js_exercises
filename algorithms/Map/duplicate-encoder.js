function duplicateEncode(str) {
    let strToArr = str.toLowerCase().split("");
    let strEncoded = "";
    let map = new Map();
    strToArr.forEach(char => {
        if (!map.has(char)) {
            map.set(char, 1)
        }
        else {
            let currentValue = map.get(char);
            map.set(char, currentValue + 1);
        }
    })

    strToArr.forEach(char => {
        if (map.get(char) === 1) {
            strEncoded += "(";
        }
        else {
            strEncoded += ")";
        }
    })
    return strEncoded;
}


console.log(duplicateEncode("recede"));