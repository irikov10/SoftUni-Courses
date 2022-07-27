function oddOccurrences(string) {
    let map = new Map();

    let words = string.split(' ');
    for (let word of words) {
        word = word.toLowerCase();

        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }

    let filtered = Array.from(map).filter(([key, value]) => {
        return value % 2 !== 0;
    })

    let buff = ' ';

    for (let [key, value] of filtered) {
        buff += key + ' ';
    }
    console.log(buff);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')