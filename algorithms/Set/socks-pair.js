function sockMerchant(n, ar) {
    
    let socksSet = new Set();
    let totalPairs = 0;
    for(let sock of ar){
        console.log(sock);
        if (!socksSet.has(sock)){
            socksSet.add(sock);
        }
        else{
            totalPairs = totalPairs + 1;
            socksSet.delete(sock);
        }
    }
    
    return totalPairs;


}
console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]));
