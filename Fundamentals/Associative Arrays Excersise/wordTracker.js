function wordTracker(arr) {
    let map = new Map();

    let words = arr.shift().split(' ');

    for (let word of words) {
        map.set(word, 0);
    }

    for (let word of arr) {
        if (map.has(word)) {
            let oldValue = map.get(word);
            map.set(word, oldValue + 1);
        }
    }

    let sortedMap = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sortedMap) {
        console.log(`${key} - ${value}`);
    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)

console.log("-------------------------------------------------------")

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)