function isValidSubsequence(array, sequence) {
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        let arrValue = array[i];

        if (arrValue === sequence[j]) {
            j++;
        }
    }
    if (j === sequence.length) {
        return true;
    } else {
        false;
    }
}
console.log(isValidSubsequence([1, 2, 3, 4], [6, 3]));