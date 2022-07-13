//Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
function repeatedSubstringPattern(s) {
    if (s.length === 1) {
        return false;
    }

    let substr = "";
    for (let i = 0; i < s.length / 2; i++) {
        substr += s[i];
        if (s.length % substr.length === 0) {
            console.log(substr.repeat(s.length / substr.length))
            if (substr.repeat(s.length / substr.length) === s) {
                return true;
            }
        }
    }
    return false;
}


//not working
function repeatedSubstringPattern3(s) {

    let substrLength = 0;
    let indexOfCharToCompare = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[indexOfCharToCompare] === s[i]) {
            substrLength = i - indexOfCharToCompare;
            indexOfCharToCompare++;
        }
        else {
            if (s[i] == s[0]) {
                indexOfCharToCompare = 1;
                substrLength = i;
            } else {
                indexOfCharToCompare = 0;
                substrLength = 0;
            }

        }
    }

    indexOfCharToCompare = (s.length % substrLength !== 0) ? 0 : substrLength;
    return substrLength === 0 ? false : true;

}



console.log(repeatedSubstringPattern3("ab"));