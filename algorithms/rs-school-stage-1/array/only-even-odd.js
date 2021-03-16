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
        console.log("l------------- num :  " + num);

        console.log("length of even " + arrOfEven.length);
        console.log("length of odd " + arrOfOdd.length);


        if(arrOfEven.length === 1 && arrOfOdd.length > 1){
            return arrOfEven[0];
        }
        else if(arrOfOdd.length === 1 && arrOfEven.length > 1){
            return arrOfOdd[0];
        }      
    })
    
}

console.log(findOutlier([1, 2, 3, 5, 7]));