function specialNumbers(num){
    let isSpecial = false;
    let sum = 0;
    let yStr = num.toString();
    for(let i = 1; i <= num; i++) {
        sum += Number(yStr[i])
        if(sum === 5 || sum === 7 || sum === 11){
            isSpecial = true;
        }

        console.log(`${i} -> ${isSpecial ? 'False' : 'True'}`)
    }
}
specialNumbers(15)