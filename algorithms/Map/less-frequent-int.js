const findLessFrequentInt = (arr) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let int = arr[i];
        if (!map.has(int)) {
            map.set(int, 1);
        } else {
            let currentFreq = map.get(int);
            map.set(int, currentFreq + 1);
        }
    }
    let lessFreq = 0;
    let lessFreqInt = 0;
    for (const [int, currentFreq] of map) {
        if (lessFreq === 0) {
            lessFreq = currentFreq;
        }
        if (currentFreq <= lessFreq) {
            lessFreq = currentFreq;
            lessFreqInt = int;
        }
    }
    console.log(map);
    return lessFreqInt;
};

console.log(findLessFrequentInt([3, 4, 1, 3, 3, 4, 4, 2, 2, 2, 1,1,0]));
