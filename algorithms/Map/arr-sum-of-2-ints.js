const checkIfArrContains2Ints = (arr, x) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let int = arr[i];
        let diff = x - int;
        if (!map.has(diff)) {
            map.set(int);
        }
        else {
            return true;
        }
    }
    return false;
};

console.log(checkIfArrContains2Ints([2, 3, 5, 3, 4,2], 4));
