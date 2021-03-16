function calc(str) {
    let total1 = "";
    let total2 = "";
    let diff = 0;
    for (let i = 0; i < str.length; i++) {
        total1 += str.charCodeAt(i);
    }
    for (let j = 0; j < total1.length; j++) {
        if (total1[j] !== "7") {
            total2 += total1[j];
        }
        else {
            total2 += "1";
        }
    }
    
    let sum1 = total1.split("").map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
    let sum2 = total2.split("").map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
    
    diff = sum1 - sum2;
    return diff;
}

console.log(calc("aaaaaddddr"));