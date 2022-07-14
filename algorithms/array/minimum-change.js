function nonConstructibleChange(coins) {
    coinsSorted = coins.sort((a, b) => a - b);
    let change = 0;
    for (let i = 0; i < coinsSorted.length; i++) {
        if (coinsSorted[i] > (change + 1)) {
            return change + 1;
        }
        change = change + coinsSorted[i];
    }
    return change + 1;
}

console.log(nonConstructibleChange([1, 1, 1]));