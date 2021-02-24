function checkIfPrime (num) {
    if (num === 2 || num === 3) {
        return "is prime";
    } else if(num % 2 === 0 || num % 3 === 0){
        return "is not prime";
    }
    else {
        return "is prime";
    }
}


console.log(checkIfPrime(89));