function repeatedString(s, n) {
    let strConcat = "";
    let letterACounter = 0;
    let howManyStrCanWeConcat = Math.floor(n/s.length);

    strConcat = s.repeat(howManyStrCanWeConcat);

    for(let i = 0; i<(n-strConcat.length); i++){
        strConcat = strConcat + s[i];
    }
    for(let char of strConcat){
        if(char === "a"){
            letterACounter++;
        }
    }
    
    return letterACounter;
}

console.log(repeatedString("aba", 10))