//function returns characters reversed from

function reverseStr(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reverseStr("hello marco"));


function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello marcof"));

//complexity O(n)
