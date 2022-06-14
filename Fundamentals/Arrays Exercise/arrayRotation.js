function arrayRotation(arr, numsOfRotation) {
    let index = 0;
    let cutNum = 0;

    while(index < numsOfRotation) {
        index++;
        cutNum = arr.shift()
        arr.push(cutNum)
    }
    console.log(arr.join(' '));
}
arrayRotation([32, 21, 61, 1], 4)