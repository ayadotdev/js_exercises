function findOutlier(arr) {
    let map = new Map();

    arr.forEach((el) => {
        if (!map.has(el)) {
            map.set(el, 1);
        } else {
            const currentValue = map.get(el);
            map.set(el, currentValue + 1);
        }
    });

    for (let [key, value] of map) {
        if (value % 2 !== 0) {
            return key;
        }
    }
}


console.log(findOutlier([0,1,2]));


