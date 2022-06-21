
const checkIfPal = (str) => {
    for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}
const arrOfPalindroms = (arr) => {


    const checkedStrings = arr.filter(str => checkIfPal(str));

    return checkedStrings.sort((a, b) => b.length - a.length);
}

console.log(arrOfPalindroms(["ciao", "aya", "serres", "pippo", "poliuilop"]));