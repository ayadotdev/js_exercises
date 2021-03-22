function arrayOfArrayProducts(arr) {
    let products = [];
    for (let i = 0; i < arr.length && arr.length > 1; i++) {
        let calc = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j ) {
                calc *= arr[j];
            }
        }
        products.push(calc);
    }
    return products;
}

console.log(arrayOfArrayProducts([1]));



// const arrayofArrayProducts = (arr) => {
//     let res = [];
//     for (let i = 0; i < arr.length; ++i) {
//       let calc = 1;
//       for (let j = 0; j < arr.length; ++j) {
//         calc *= i !== j ? arr[j] : 1;
//       }
//       res.push(calc);
//     }
//     return res;
//   }


  
//   console.log(arrayofArrayProducts([1]));
