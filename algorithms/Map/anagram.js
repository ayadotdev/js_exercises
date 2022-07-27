const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let mappedStr = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!mappedStr.has(s[i])) {
            mappedStr.set(s[i], 1);

        } else {
            let occur = mappedStr.get(s[i]);
            mappedStr.set(s[i], occur + 1);
        }
    }

    console.log(mappedStr);


    for (let i = 0; i < t.length; i++) {
        if (mappedStr.has(t[i])) {
            let occur = mappedStr.get(t[i]);
            if (occur === 1) {
                mappedStr.delete(t[i]);

            } else {
                mappedStr.set(t[i], occur - 1);
            }
        }

    }
    console.log(mappedStr);

    return mappedStr.size === 0;
};

console.log(isAnagram("aacc", "ccac"))