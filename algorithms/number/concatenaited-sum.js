function checkConcatenatedSum(num, n) {
    let res = 0;
    let sign = "";

    let numToArr = num.toString().split("");
    if (num < 0) {
        numToArr.shift();
        sign = "-";
    }

    numToArr.forEach(num => {
        let concat = "";
        for (let i = 0; i < n; i++) {
            concat += num;
            console.log(concat);
        }
        res += parseInt(concat);
    })

    return num === parseInt(sign + res);
}

console.log(checkConcatenatedSum(2997, 3));
