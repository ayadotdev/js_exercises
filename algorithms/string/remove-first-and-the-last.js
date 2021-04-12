function array(str) {
    let strToArr = str.split(",").map(el => el.trim());
    if (strToArr.length <= 2) {
        return null;
    }
    else {
        let arrToStr = strToArr.slice(1, strToArr.length - 1);
        return arrToStr.join(",");
    }
}
console.log(array('1,2,3')); // 2