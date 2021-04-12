function shapeArea(n) {
    if (n === 1) {
        return 1;
    }
    else {
        console.log(n**2);
        console.log(n**2 + (n-1));



        return n ** 2 + (n - 1) ** 2
    }
}

console.log(shapeArea(3));