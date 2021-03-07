const vowels = ["a","e","i","o","u"];

const checkIfVowel = (char) => {
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === char) {
            return true;
        }
    }
    return false;
}

const howManyVowels = (str) => {
    let quantity = 0;
    for (let i=0; i<str.length; i++){
        if(checkIfVowel(str[i])){
            quantity += 1;
        }
    }
    return quantity;
}

console.log(howManyVowels("oooo"));