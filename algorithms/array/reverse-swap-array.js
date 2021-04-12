const reverseArr = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        let tempEl = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 -i] = tempEl;
    }
    return arr;
}

console.log(reverseArr([1, 2, 3, 4]));

