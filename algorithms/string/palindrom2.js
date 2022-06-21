const checkIfPlaindrom = (str) => {
if(str.length <= 1) {
    return false;
}

for (let i = 0; i < str.length/2; i++) {
    if(str[i] !== str[str.length - 1 - i]){
        return false;
    }  
}
    return true;
};

console.log(checkIfPlaindrom("ababbaba"));
console.log(checkIfPlaindrom("abacbaba"));
console.log(checkIfPlaindrom("a"));
console.log(checkIfPlaindrom("aa"));
console.log(checkIfPlaindrom("ab"));
console.log(checkIfPlaindrom(""));