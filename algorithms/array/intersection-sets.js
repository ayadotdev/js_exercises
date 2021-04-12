function inter(set1, set2) {
    let set3 = new Set();
    for (let num1 of set1) {
        for (let num2 of set2) {
            if (num1 === num2) {
                set3.add(num1);
            }
        }
    }
    return set3;
}

A = new Set([1,2]);
B = new Set([2,3]);

console.log(inter(A,B));