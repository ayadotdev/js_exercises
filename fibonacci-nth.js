function nthFibonacci(num) {

    let fib1 = 0;
    let fib2 = 1;
    let fiboAtNth = 0;
    for (let nth = 1; nth < num; nth++) {
        fib1 = fib2;
        fib2 = fiboAtNth;
        fiboAtNth = fib1 + fib2;
    }
    return fiboAtNth;
}

console.log(nthFibonacci(5));

function fibonacci(n) {
    let fibo = [0, 1];
    if (n <= 2) return 1;
    for (let i = 2; i <= n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]); // fibo[i]=fibo[i-1]+fibo[i-2];
    }
    console.log(fibo);
    return fibo[n];
}

console.log(fibonacci(10));


let arr1 = [0,1,2,3];
let arr2 = [0,1,2,3];

arr1 = arr2;

arr1.shift();
arr2.pop();

console.log(arr1);//??
console.log(arr1);//??



