function countWords(arr){
    //count words in array

    let map = new Map();
    let words = 0;

    for(let word of arr){
        if(!map.has(word)){
            words = 1;
        }else {
            words = map.get(word) + 1;
        }
        map.set(word, words);
    }

    let entries = Array.from(map);
    entries.sort((a,b) => b[1] - a[1]);

    for(let [word,words] of entries){
        console.log(`${word} -> ${words} times`)
    }
}
countWords(["Here", "is", "the", "first", "sentence"
, "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])