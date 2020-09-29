// from an array of words representing numbers to array of numbers and then to the avarage of these numbers

// ex : ["two", "one", "one", "three", "two", "one"] = > [2, 1, 1, 3, 2, 1] => 2;

let arrWordsNum = ["two", "one", "one", "three", "two"];

const arrNum = arrWordsNum.map (element => {

if (element === "one"){
    return 1;
}

else if (element === "two"){
    return 2;
}

else if (element === "three"){
    return 3;
}



//return "two" === 2 "one" ===1 "three" === 3
});


const sum = arrNum.reduce ((sum,element)=> {

return sum + element;

});

console.log(sum/arrNum.length);