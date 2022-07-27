function replaceRepeatingChars(string) {
    let result = string[0];

    for (let i = 1; i < string.length; i++) {
        let previous = string[i - 1];
        let current = string[i];

        if (previous === current) {
            continue;
        } else {
            result += current;
        }
    }
    console.log(result)
}
replaceRepeatingChars('qqqwerqwecccwd')