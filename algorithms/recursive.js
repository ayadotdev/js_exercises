function factorial(num){
    if(num < 2){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}

// 4 * 3 * 2 * 1


console.log(factorial(4));