function zipWith(func, arr1, arr2) {
    let resArr = [];
    if (arr1.length <= arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            resArr.push(func(arr1[i], arr2[i]));
        }
    }
    else {
        for (let i = 0; i < arr2.length; i++) {
            resArr.push(func(arr1[i], arr2[i]));
        }
    }
    return resArr;
}

console.log((zipWith(function (a, b) { return a + b; }, [0, 1, 2, 3], [0, 1, 2, 3])));