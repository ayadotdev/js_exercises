function adjacentElementsProduct(inputArray) {
    let biggestProduct = -1000;
    for(let i = 0; i < inputArray.length-1; i++){
        let currentProduct = inputArray[i]* inputArray[i+1];
        if(biggestProduct<currentProduct)
        biggestProduct = currentProduct;
        console.log(currentProduct);
    }
    return biggestProduct;

}

console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]));