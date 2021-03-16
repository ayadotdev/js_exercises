// function count(array){
//     let res = new Map();
//     for (let i = 0; i < array.length; i++) {
//         if(!res.has(array[i])){
//             res.set(array[i],1)
//         }
//         else{
//             res.set(array[i], res.get(array[i]) +1)
//         }
//     }
//     return Object.fromEntries(res); // transforming Map to Object
//   }

//   console.log(count(['james', 'james', 'john']));

function count(array) {
    let obj = {};
    array.forEach(function (element) {
        if (!obj[element]) {
            obj[element] = 1;
        }
        else {
            obj[element]++;
        }
    });
    return obj;
}

console.log(count(['james', 'james', 'john']));

// // before
// for (let i = 0; i < items.length; i++) {
//     copyItems.push(items[i])
//   }

//   // after
//   items.forEach(function(item){
//     copyItems.push(item)
//   })