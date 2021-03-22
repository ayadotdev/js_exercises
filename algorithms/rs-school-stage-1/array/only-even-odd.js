function findOutlier(arr) {
    let arrOfEven = [];
    let arrOfOdd = [];

    arr.forEach(num => {
        if (num % 2 === 0) {
            arrOfEven.push(num);

        }
        else {
            arrOfOdd.push(num);
        }

    })
    if (arrOfEven.length === 1 && arrOfOdd.length > 1) {
        console.log(arrOfEven.length);
        return arrOfEven[0];
    }
    else if (arrOfOdd.length === 1 && arrOfEven.length > 1) {
        console.log(arrOfOdd.length);
        return arrOfOdd[0];
    }

}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));