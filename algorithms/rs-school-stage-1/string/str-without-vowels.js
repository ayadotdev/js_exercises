
function checkIfVowel(char) {
    const vowels = ["a", "A", "e", "E", "u", "U", "i", "I", "o", "O"];
    for (let i = 0; i < vowels.length; i++) {
        if (char === vowels[i]) {
            return true;
        }
    }
    return false;
}

function disemvowel(str) {
    let strWithoutVowels = "";
    for (let i = 0; i < str.length; i++) {
        if (!checkIfVowel(str[i])) {
            strWithoutVowels += str[i];
        }
    }
    return strWithoutVowels;
}



console.log(disemvowel("LOL"));