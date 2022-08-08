var reverseWords = function (s) {
    let split = s.split(" ");
    let revWords = [];
    for (let i = 0; i < split.length; i++) {
        revWords.push(reverseWord(split[i]));
    }
    return revWords.join(" ");
};

var reverseWord = function (word) {
    if (word.length <= 1) {
        return word;
    }
    return word.split("").reverse().join("");
}

console.log(reverseWords("ar ar ar"));

