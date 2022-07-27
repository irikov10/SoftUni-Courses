function matchPhoneNumbers(arr) {
    const pattern = /\+359([ |-])2\1[0-9]{3}\1[0-9]{4}\b/g;
    let matches = pattern.exec(arr);
    let res = [];

    while(matches !== null) {
        res.push(matches[0])
        matches = pattern.exec(arr)
    }
    console.log(res.join(', '))
}
matchPhoneNumbers(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])