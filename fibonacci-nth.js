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




function iterativeFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    let previous = 0;
    let current = 1;
    for (let i = n; i > 1; i--) {
      let next = previous + current;
      previous = current;
      current = next;
    }
    return current;
  }


  function recursiveFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
  }


