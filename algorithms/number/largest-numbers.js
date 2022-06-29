function findThreeLargestNumbers(array) {
    let first = Number.NEGATIVE_INFINITY;
    let sec = Number.NEGATIVE_INFINITY;
    let third = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (num > third) {
            first = sec;
            sec = third;
            third = num;
        }
        else if (num > sec) {
            first = sec;
            sec = num;
        }
        else if (num > first) {
            first = num;
        }
    }
    return [first, sec, third];
}

console.log(findThreeLargestNumbers([-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]))
// console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))