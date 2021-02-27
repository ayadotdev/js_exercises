function globalFunction(){
    let b = 10;
    function innerFunction(){
        let a = 20;
        console.log("a = " + a + " and b = " + b);
        a++;
        b++;
    }
    return innerFunction;
}

let caseOne = globalFunction();
let caseTwo = globalFunction();

caseOne();
caseOne();
caseOne();
caseTwo();
