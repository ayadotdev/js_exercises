var reverseString = function (s) {
    let start = 0;
    let end = s.length - 1;
    while (start <= end) {
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
};

let str = ["h","e", "l", "l", "o"];
reverseString(str);

console.log(str);