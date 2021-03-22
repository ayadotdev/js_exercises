function rotateImage(arr) {
    let arrRotated = [];
    for(let i=0; i<arr.length; i++){
        let row =[];
        for(let j=0; j<arr[i].length; j++){
            row.push(arr[(arr.length-1)-j][i])
        }
        arrRotated.push(row);
    }
return arrRotated;
}

console.log(rotateImage([[1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9]]));

                        