/* Given a string s, find the length of the longest substring without repeating characters.*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let startIdx = 0;
    let endIdx = 0;
    let uniqueConsecutiveChars = new Set();

    while (endIdx < s.length) {
        let char = s[endIdx];
        if (!uniqueConsecutiveChars.has(char)) {
            uniqueConsecutiveChars.add(char);
            endIdx++;
            if ((endIdx - startIdx) > maxLength) {
                maxLength = (endIdx - startIdx);
            }
        } else {
            uniqueConsecutiveChars.delete(s[startIdx]);
            startIdx++;
        }
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring("vdvfaaabfrwe"));