function spendingMoney(rich){
    let totalSpent = 0;
    function spend(amount){
        totalSpent += amount;
        if(rich){
            console.log("I will spend " + amount + " for a new phone. Total so far : " + totalSpent);
        }else{
            console.log("I will spend " + amount + " for food. Total so far : " + totalSpent);
        }           
    }
    return spend;
}

let caseRich = spendingMoney(true);
let casePoor = spendingMoney(false);

caseRich(190);//I will spend 190 for a new phone. Total so far: 190
casePoor(100);//I will spend 100 for for food. Total so far: 100
caseRich(300);//I will spend 300 for a new phone. Total so far: 490
casePoor(400);//I will spend 100 for food. Total so far: 500