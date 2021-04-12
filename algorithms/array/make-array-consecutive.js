function makeArrayConsecutive2(statues) {
    let statuesSorted = statues.sort ((a,b) => a-b);
    let statuesMissing = 0;
    console.log(statuesSorted);
    for (let i = statuesSorted[0]; i < statuesSorted[statuesSorted.length - 1]; i++) {

        if (!statuesSorted.includes(i)) {
            statuesMissing++;
        }
    }
    return statuesMissing;
}

console.log(makeArrayConsecutive2([4, 2, 7, 18])); //2,4,7,18