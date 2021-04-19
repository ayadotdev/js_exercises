// function factorial(num){
//     if(num < 2){
//         return 1;
//     }else{
//         return num * factorial(num-1);
//     }
// }

// 4 * 3 * 2 * 1

function factorial(n) {
    let factorial = 1;
    if (n < 1) {
        return factorial;
    }
    else{
        for(let i = 1; i<=n; i++) {
            factorial = factorial * i;
        }
    }
    return factorial;
}

console.log(factorial(2));