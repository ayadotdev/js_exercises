function squares(x, n) {
    let seq = [];
for (let i=0; i<n; i++){
    seq.push(x);
    x = Math.pow(x,2);
}
return seq;
}

//2, 5  -->  [2, 4, 16, 256, 65536]
console.log(squares(2, 5));