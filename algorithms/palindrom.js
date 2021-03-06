function checkIfPalindrom (str) {
    if(str === str.split("").reverse().join("")){
        return true;
    }
    else{
        return false;
    }
}

function checkIfPal (str) {
    for (let i=0, j=str.length-1; i<str.length/2; i++, j--) {
        if(str[i]!== str[j]){
            return false;
        }
    }
    return true;
}

// console.log(checkIfPalindrom("marco and aya"));//flase
// console.log(checkIfPalindrom("marco and misha"));//false
// console.log(checkIfPalindrom("aya & aya"));//true

console.log(checkIfPal("marco and aya"));//flase
console.log(checkIfPal("marco and misha"));//false
console.log(checkIfPal("aya & aya"));//true
console.log(checkIfPal("aya&aya"));//true
console.log(checkIfPal("aya&&aya"));//true