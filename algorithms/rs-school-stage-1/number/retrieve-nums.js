const FilterString = function (str) {
    let justNums = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            justNums += str[i];
        }
    }
    return parseInt(justNums);
}

console.log(FilterString("a1b2c3"));