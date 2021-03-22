const binary = (n) => {
    const divededByTwo = (n) => {
        let quotient = n /= 2;
        while (n / 2 < 0) {
            console.log(quotient);
        }
        return quotient;
    }
    return divededByTwo;
}

console.log(binary(12));