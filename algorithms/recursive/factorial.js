function findFact(num){
    if(num === 0){
        return 1;
    }
    return num * findFact( num - 1);
}

console.log(findFact(5));
// 5 * 4 * 3 * 2 * 1

